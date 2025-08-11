export interface RoomEntity {
  width: number
  depth: number
  wallHeight: number
  groundColor: number
  wallColor: number
}

export function createDefaultRoom(): RoomEntity {
  return {
    width: 6,
    depth: 6,
    wallHeight: 2.5,
    groundColor: 0x2e7d32,
    wallColor: 0x455a64,
  }
}
