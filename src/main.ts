import * as THREE from 'three'
import { createDefaultRoom } from './domain/entities/Room'
import { allMarkers } from './domain/helpers/markers'
import { addMarker, addRoom } from './infra/three/sceneBuilders'

function bootTestArena(root: HTMLElement): void {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x202025)

  const camera = new THREE.PerspectiveCamera(60, root.clientWidth / root.clientHeight, 0.1, 100)
  camera.position.set(2.5, 2.0, 3.5)
  camera.lookAt(0, 0.5, 0)

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

  // Basic orbit via mouse (minimal custom)
  let isDragging = false
  let prevX = 0
  let prevY = 0
  let azimuth = -0.9
  let elevation = 0.5
  let radius = 5.0

  function updateCamera(): void {
    const x = radius * Math.cos(elevation) * Math.cos(azimuth)
    const z = radius * Math.cos(elevation) * Math.sin(azimuth)
    const y = radius * Math.sin(elevation) + 1.0
    camera.position.set(x, y, z)
    camera.lookAt(0, 0.7, 0)
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
    azimuth -= dx * 0.005
    elevation = Math.max(-1.2, Math.min(1.2, elevation - dy * 0.005))
    updateCamera()
  })
  window.addEventListener('wheel', (e: WheelEvent) => {
    radius = Math.max(2.0, Math.min(12.0, radius + (e.deltaY > 0 ? 0.5 : -0.5)))
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
