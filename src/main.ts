document.addEventListener('DOMContentLoaded', () => {
  const appRoot = document.querySelector<HTMLElement>('#app')
  if (appRoot) {
    appRoot.textContent = 'Hello Vite!'
  }
})
