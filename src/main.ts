import * as THREE from 'three'
import { createDefaultRoom } from './domain/entities/Room'
import { allMarkers } from './domain/helpers/markers'
import { addMarker, addRoom } from './infra/three/sceneBuilders'
import {
  createDefaultCameraState,
  deriveCameraParams,
  updateOrbitFromDrag,
  updateOrbitFromWheel,
} from '@domain/helpers/cameraModeManager'
import { getCurrentMode, toggleMode } from '@domain/helpers/cameraModeManager'

function bootTestArena(root: HTMLElement): void {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x202025)

  const camera = new THREE.PerspectiveCamera(60, root.clientWidth / root.clientHeight, 0.1, 100)
  let cameraState = createDefaultCameraState()
  function applyCameraFromState(): void {
    const params = deriveCameraParams(cameraState)
    camera.position.set(params.position.x, params.position.y, params.position.z)
    camera.lookAt(params.lookAt.x, params.lookAt.y, params.lookAt.z)
  }
  applyCameraFromState()

  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(root.clientWidth, root.clientHeight)
  root.innerHTML = ''
  root.appendChild(renderer.domElement)

  // HUD overlay for mode and orbit values (dev aid)
  const hud = document.createElement('div')
  hud.style.position = 'fixed'
  hud.style.top = '12px'
  hud.style.left = '12px'
  hud.style.background = 'rgba(0,0,0,0.55)'
  hud.style.color = '#fff'
  hud.style.fontFamily =
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
  hud.style.fontSize = '12px'
  hud.style.padding = '8px 10px'
  hud.style.borderRadius = '6px'
  hud.style.zIndex = '1000'
  hud.style.pointerEvents = 'auto'

  const modeEl = document.createElement('div')
  const valuesEl = document.createElement('div')
  const controlsEl = document.createElement('div')

  const toggleBtn = document.createElement('button')
  toggleBtn.textContent = 'Toggle Camera (C)'
  toggleBtn.style.marginTop = '6px'
  toggleBtn.style.cursor = 'pointer'
  controlsEl.appendChild(toggleBtn)

  hud.appendChild(modeEl)
  hud.appendChild(valuesEl)
  hud.appendChild(controlsEl)
  root.appendChild(hud)

  // Lights
  const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 0.8)
  hemi.position.set(0, 2, 0)
  scene.add(hemi)
  const dir = new THREE.DirectionalLight(0xffffff, 0.8)
  dir.position.set(3, 5, 2)
  scene.add(dir)

  // Domain-driven construction of room and markers
  addRoom(scene, createDefaultRoom())

  // Origin marker and three socket markers
  for (const m of allMarkers()) {
    addMarker(scene, m)
  }

  // Basic orbit via mouse (driven by domain camera state)
  let isDragging = false
  let prevX = 0
  let prevY = 0

  function updateCamera(): void {
    applyCameraFromState()
  }
  function updateHud(): void {
    const mode = getCurrentMode(cameraState)
    modeEl.textContent = `Mode: ${mode}`
    const { azimuth, elevation, radius } = cameraState.orbit
    valuesEl.textContent = `orbit: az=${azimuth.toFixed(2)} el=${elevation.toFixed(2)} r=${radius.toFixed(2)}`
  }
  updateCamera()
  updateHud()

  renderer.domElement.addEventListener('mousedown', (e: MouseEvent) => {
    isDragging = true
    prevX = e.clientX
    prevY = e.clientY
  })
  window.addEventListener('mouseup', () => {
    isDragging = false
  })
  window.addEventListener('mousemove', (e: MouseEvent) => {
    if (!isDragging) return
    const dx = e.clientX - prevX
    const dy = e.clientY - prevY
    prevX = e.clientX
    prevY = e.clientY
    const deltaAz = dx * 0.005
    const deltaEl = dy * 0.005
    cameraState = updateOrbitFromDrag(cameraState, deltaAz, deltaEl)
    updateCamera()
  })
  window.addEventListener('wheel', (e: WheelEvent) => {
    cameraState = updateOrbitFromWheel(cameraState, e.deltaY)
    updateCamera()
    updateHud()
  })

  // Toggle camera mode via button and keyboard
  function toggleCameraMode(): void {
    cameraState = toggleMode(cameraState)
    updateCamera()
    updateHud()
  }
  toggleBtn.addEventListener('click', toggleCameraMode)
  window.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.code === 'KeyC') {
      e.preventDefault()
      toggleCameraMode()
    }
  })

  function onResize(): void {
    const width = root.clientWidth
    const height = root.clientHeight
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
  }
  window.addEventListener('resize', onResize)

  function animate(): void {
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }
  animate()
}

document.addEventListener('DOMContentLoaded', () => {
  const appRoot = document.querySelector<HTMLElement>('#app')
  if (!appRoot) return

  // In dev, boot the alignment test arena scene.
  if (import.meta.env.DEV) {
    bootTestArena(appRoot)
  } else {
    appRoot.textContent = 'Parallax Prophet'
  }
})
