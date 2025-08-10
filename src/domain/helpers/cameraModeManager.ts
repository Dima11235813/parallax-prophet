import type { CameraMode, CameraParams, CameraState } from '@domain/entities/Camera'

export function createDefaultCameraState(): CameraState {
  return {
    mode: 'orbit',
    orbit: {
      azimuth: -0.9,
      elevation: 0.5,
      radius: 5.0,
      target: { x: 0, y: 0.7, z: 0 },
      elevationMin: -1.2,
      elevationMax: 1.2,
      radiusMin: 2.0,
      radiusMax: 12.0,
    },
    free: {
      position: { x: 2.5, y: 2.0, z: 3.5 },
      lookAt: { x: 0, y: 0.7, z: 0 },
    },
  }
}

export function getCurrentMode(state: CameraState): CameraMode {
  return state.mode
}

export function toggleMode(state: CameraState): CameraState {
  return {
    ...state,
    mode: state.mode === 'orbit' ? 'free' : 'orbit',
  }
}

export function reset(): CameraState {
  // Stateless: return a fresh default state, ignoring provided state
  return createDefaultCameraState()
}

export function clampOrbitElevation(elevation: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, elevation))
}

export function clampOrbitRadius(radius: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, radius))
}

export function updateOrbitFromDrag(
  state: CameraState,
  deltaAzimuth: number,
  deltaElevation: number
): CameraState {
  if (state.mode !== 'orbit') return state
  const nextElevation = clampOrbitElevation(
    state.orbit.elevation - deltaElevation,
    state.orbit.elevationMin,
    state.orbit.elevationMax
  )
  return {
    ...state,
    orbit: {
      ...state.orbit,
      azimuth: state.orbit.azimuth - deltaAzimuth,
      elevation: nextElevation,
    },
  }
}

export function updateOrbitFromWheel(state: CameraState, wheelDelta: number): CameraState {
  if (state.mode !== 'orbit') return state
  const nextRadius = clampOrbitRadius(
    state.orbit.radius + (wheelDelta > 0 ? 0.5 : -0.5),
    state.orbit.radiusMin,
    state.orbit.radiusMax
  )
  return {
    ...state,
    orbit: {
      ...state.orbit,
      radius: nextRadius,
    },
  }
}

export function deriveCameraParams(state: CameraState): CameraParams {
  if (state.mode === 'free') {
    return { position: state.free.position, lookAt: state.free.lookAt }
  }
  const { azimuth, elevation, radius, target } = state.orbit
  const x = radius * Math.cos(elevation) * Math.cos(azimuth)
  const z = radius * Math.cos(elevation) * Math.sin(azimuth)
  const y = radius * Math.sin(elevation) + target.y
  return {
    position: { x, y, z },
    lookAt: target,
  }
}
