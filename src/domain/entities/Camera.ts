export type CameraMode = 'orbit' | 'free'

export interface Vector3D {
  x: number
  y: number
  z: number
}

export interface OrbitParams {
  azimuth: number
  elevation: number
  radius: number
  target: Vector3D
  elevationMin: number
  elevationMax: number
  radiusMin: number
  radiusMax: number
}

export interface FreeParams {
  position: Vector3D
  lookAt: Vector3D
}

export interface CameraState {
  mode: CameraMode
  orbit: OrbitParams
  free: FreeParams
}

export interface CameraParams {
  position: Vector3D
  lookAt: Vector3D
}
