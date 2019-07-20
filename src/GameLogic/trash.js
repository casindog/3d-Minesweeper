//         < !-- < script >
//     // 3js

//     let scene = new THREE.Scene();
// let camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000)
// camera.position.z = 10;


// let renderer = new THREE.WebGLRenderer({ antialias: true });

// renderer.setClearColor("#e5e5e5");
// renderer.setSize(window.innerWidth, window.innerHeight);

// document.body.appendChild(renderer.domElement);

// window.addEventListener('resize', () => {
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     camera.aspect = window.innerWidth / window.innerHeight;

//     camera.updateProjectionMatrix();
// })

// let geometry = new THREE.BoxGeometry(1, 1, 1);
// let material = new THREE.MeshLambertMaterial({ color: 0xFFCC00 })
// let mesh = new THREE.Mesh(geometry, material);

// // scene.add(mesh);
// // mesh.position.set(2,2,-2);
// // mesh.position.x = 2;
// // mesh.position.y = 2;
// // mesh.position.z = 2;

// // scene.add(mesh);

// // let meshX = -10;

// for (let i = 0; i < 4; i++) {
//     // let mesh = new THREE.Mesh(geometry, material);
//     mesh.position.x = i;
//     mesh.position.y = i;
//     mesh.position.z = i;
//     scene.add(mesh);
//     // meshX+=1;
// }

// let light = new THREE.PointLight(0xFFFFFF, 1, 500)
// light.position.set(10, 0, 25);
// scene.add(light);

// let render = function () {
//     requestAnimationFrame(render);

//     mesh.rotation.x += 0.001;

//     renderer.render(scene, camera);
// }

// render();

//         </script > -->


