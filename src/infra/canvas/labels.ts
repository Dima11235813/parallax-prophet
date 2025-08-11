export function createLabelCanvas(text: string): HTMLCanvasElement {
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
