// 3js - cube
let scene, camera, renderer, cube;

scene = new THREE.Scene();

// degree, aspect ratio, nearpane, farpane
camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    100
);

renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

camera.position.z = 20;

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);


function init(x,y,z) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    cube = new THREE.Mesh(geometry, material);
    cube.position.x = x;
    cube.position.y = y;
    cube.position.z = z;
    scene.add(cube);

    const domEvents = new THREEx.DOMEvents(camera, render.domElement);
    let cubeClicked = false;
    domEvents.addEventListener(cube, 'click', event => {
        if (!cubeClicked) {
            material.wireframe = false;
            cubeClicked = true;
        } else {
            material.wireframe = true;
            cubeClicked = false;
        }
    })
}

for (let x=0; x<4; x++) {
    for (let y=0; y<4; y++) {
        for (let z=0; z<4; z++) {
            init(x*2,y*2, z*2);
        }
    }
}

// controls = new THREE.PointerLockControls( camera, renderer.domElement )
// renderer.render(scene, camera);

function animate() {
    requestAnimationFrame(animate);

    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

document.addEventListener('keydown',Keyboard, false);

function Keyboard() {
    let speed = 0.2;

    // WASDRF
    if(event.keyCode===65) {
        // A
        camera.position.x -= speed;
    } else if (event.keyCode===68) {
        // D 
        camera.position.x += speed;
    } else if (event.keyCode===83) {
        // W
        camera.position.z += speed;
    } else if (event.keyCode===87) {
        // S
        camera.position.z -= speed;
    } else if (event.keyCode===82) {
        // R
        camera.position.y += speed;
    } else if (event.keyCode===70) {
        // F
        camera.position.y -= speed;
    }

    // use mouse to rotate
}



animate();

