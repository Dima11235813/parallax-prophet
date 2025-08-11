import type { MarkerEntity } from '../entities/Marker'

export function createOriginMarker(): MarkerEntity {
  return { x: 0, y: 0, z: 0, label: 'origin', color: 0xffee58 }
}

export function createSocketMarkers(): MarkerEntity[] {
  return [
    { x: 1.5, y: 0, z: 1.5, label: 'socket A', color: 0x29b6f6 },
    { x: -1.5, y: 0, z: 1.0, label: 'socket B', color: 0xab47bc },
    { x: 0.5, y: 0, z: -1.2, label: 'socket C', color: 0xef5350 },
  ]
}

export function allMarkers(): MarkerEntity[] {
  return [createOriginMarker(), ...createSocketMarkers()]
}
