import './main.css'

<a-entity class="link"
geometry="primitive: plane; height: 1; width: 1"
material="shader: flat; src: #cubes-thumb"
sound="on: click; src: #click-sound"
event-set__mouseenter="scale: 1.2 1.2 1"
event-set__mouseleave="scale: 1 1 1"
event-set__click="_target: #image-360; _delay: 300; material.src: ${src}">

</a-entity>


AFRAME.registerComponent('button', {
    init() {
      const btn = document.getElementById('myButton')
      btn.addEventListener('click', () => {
        window.open('./WHMIS', '_blank')
      })
    }
  })