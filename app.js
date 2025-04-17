import './main.css'




AFRAME.registerComponent('button', {
    init() {
      const btn = document.getElementById('myButton')
      btn.addEventListener('click', () => {
        window.open('https://google.com', '_blank')
      })
    }
  })