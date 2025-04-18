import './main.css'

<a-entity class="link"
    geometry="primitive: plane; height: 1; width: 1"
    material="shader: flat; src: #cubes-thumb"
    sound="on: click; src: #click-sound"
    event-set__mouseenter="scale: 1.2 1.2 1"
    event-set__mouseleave="scale: 1 1 1"
    event-set__click="_target: #image-360; _delay: 300; material.src: ${src}">

</a-entity>

const camera = document.querySelector('#my-camera');
const initialRotation = camera.getAttribute('rotation');

// Rotate the camera by 20 degrees along the x-axis
camera.setAttribute('rotation', {
    x: initialRotation.x + 20,
    y: initialRotation.y,
    z: initialRotation.z
});

// Move the camera forward by 2 units
camera.setAttribute('position', {
    x: camera.getAttribute('position').x,
    y: camera.getAttribute('position').y,
    z: camera.getAttribute('position').z - 2
});













    
    