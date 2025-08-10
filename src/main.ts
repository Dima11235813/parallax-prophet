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
  updateCamera()

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
