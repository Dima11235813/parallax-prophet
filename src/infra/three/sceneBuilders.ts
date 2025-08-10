import * as THREE from 'three'
import { createLabelCanvas } from '../canvas/labels'
import type { MarkerEntity } from '../../domain/entities/Marker'
import type { RoomEntity } from '../../domain/entities/Room'

export function addMarker(scene: THREE.Scene, marker: MarkerEntity): void {
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.1, 16, 16),
    new THREE.MeshBasicMaterial({ color: marker.color })
  )
  sphere.position.set(marker.x, marker.y, marker.z)
  scene.add(sphere)

  const labelCanvas = createLabelCanvas(marker.label)
  const texture = new THREE.CanvasTexture(labelCanvas)
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true })
  const sprite = new THREE.Sprite(material)
  sprite.position.set(marker.x, marker.y + 0.25, marker.z)
  const scale = 0.005
  sprite.scale.set(labelCanvas.width * scale, labelCanvas.height * scale, 1)
  scene.add(sprite)
}

export function addRoom(scene: THREE.Scene, room: RoomEntity): void {
  // Ground
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(room.width, room.depth),
    new THREE.MeshStandardMaterial({ color: room.groundColor, roughness: 1.0 })
  )
  ground.rotation.x = -Math.PI / 2
  ground.receiveShadow = true
  scene.add(ground)

  // Walls
  const wallMaterial = new THREE.MeshStandardMaterial({ color: room.wallColor, roughness: 1.0 })
  const wallGeom = new THREE.PlaneGeometry(room.width, room.wallHeight)
  const halfDepth = -room.depth / 2
  const halfWidth = room.width / 2

  const north = new THREE.Mesh(wallGeom, wallMaterial)
  north.position.set(0, room.wallHeight / 2, halfDepth)
  scene.add(north)

  const south = new THREE.Mesh(wallGeom, wallMaterial)
  south.rotation.y = Math.PI
  south.position.set(0, room.wallHeight / 2, -halfDepth)
  scene.add(south)

  const east = new THREE.Mesh(wallGeom, wallMaterial)
  east.rotation.y = -Math.PI / 2
  east.position.set(halfWidth, room.wallHeight / 2, 0)
  scene.add(east)

  const west = new THREE.Mesh(wallGeom, wallMaterial)
  west.rotation.y = Math.PI / 2
  west.position.set(-halfWidth, room.wallHeight / 2, 0)
  scene.add(west)
}
