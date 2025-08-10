import * as THREE from 'three'

function createLabelCanvas(text: string): HTMLCanvasElement {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d') as CanvasRenderingContext2D
  const font = 24
  context.font = `${font}px sans-serif`
  const metrics = context.measureText(text)
  const textWidth = metrics.width
  canvas.width = Math.ceil(textWidth + 16)
  canvas.height = Math.ceil(font + 16)
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  ctx.font = `${font}px sans-serif`
  ctx.fillStyle = '#000000'
  ctx.globalAlpha = 0.6
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.globalAlpha = 1
  ctx.fillStyle = '#ffffff'
  ctx.textBaseline = 'top'
  ctx.fillText(text, 8, 8)
  return canvas
}

function addMarker(
  scene: THREE.Scene,
  position: THREE.Vector3,
  label: string,
  color: number
): void {
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.1, 16, 16),
    new THREE.MeshBasicMaterial({ color })
  )
  sphere.position.copy(position)
  scene.add(sphere)

  const labelCanvas = createLabelCanvas(label)
  const texture = new THREE.CanvasTexture(labelCanvas)
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true })
  const sprite = new THREE.Sprite(material)
  sprite.position.copy(position.clone().add(new THREE.Vector3(0, 0.25, 0)))
  const scale = 0.005
  sprite.scale.set(labelCanvas.width * scale, labelCanvas.height * scale, 1)
  scene.add(sprite)
}

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

  // Ground
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(6, 6),
    new THREE.MeshStandardMaterial({ color: 0x2e7d32, roughness: 1.0 })
  )
  ground.rotation.x = -Math.PI / 2
  ground.receiveShadow = true
  scene.add(ground)

  // Walls (simple planes)
  const wallMaterial = new THREE.MeshStandardMaterial({ color: 0x455a64, roughness: 1.0 })
  const wallGeom = new THREE.PlaneGeometry(6, 2.5)
  const north = new THREE.Mesh(wallGeom, wallMaterial)
  north.position.set(0, 1.25, -3)
  scene.add(north)
  const south = new THREE.Mesh(wallGeom, wallMaterial)
  south.rotation.y = Math.PI
  south.position.set(0, 1.25, 3)
  scene.add(south)
  const east = new THREE.Mesh(wallGeom, wallMaterial)
  east.rotation.y = -Math.PI / 2
  east.position.set(3, 1.25, 0)
  scene.add(east)
  const west = new THREE.Mesh(wallGeom, wallMaterial)
  west.rotation.y = Math.PI / 2
  west.position.set(-3, 1.25, 0)
  scene.add(west)

  // Origin marker and three socket markers
  addMarker(scene, new THREE.Vector3(0, 0, 0), 'origin', 0xffee58)
  addMarker(scene, new THREE.Vector3(1.5, 0, 1.5), 'socket A', 0x29b6f6)
  addMarker(scene, new THREE.Vector3(-1.5, 0, 1.0), 'socket B', 0xab47bc)
  addMarker(scene, new THREE.Vector3(0.5, 0, -1.2), 'socket C', 0xef5350)

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
