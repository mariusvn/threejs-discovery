/* EPITECH HUB */

// on crée la screne et la caméra
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// on crée le moteur de rendu
const renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// on crée le cube, on y ajoute le material
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0xffffff, side: THREE.DoubleSide});
const cube = new THREE.Mesh(geometry, material);
// on crée la wireframe
const wire_material = new THREE.LineBasicMaterial({
  color: 0x000000,
  linewidth: 3
});
const lines = new THREE.LineSegments(new THREE.WireframeGeometry(geometry), wire_material);
// on l'ajoute à la scene
scene.add(cube);
scene.add(lines);

// on crée le plane et on l'ajoute à la scene
const geometry_line = new THREE.PlaneGeometry(15, 15, 32, 32);
const linesP = new THREE.LineSegments(new THREE.WireframeGeometry(geometry_line), wire_material);
const plane = new THREE.Mesh(geometry_line, material);
scene.add(plane);
scene.add(linesP);


// on set les positions initiales

camera.position.z = 5;

cube.rotation.x = 0.4;
lines.rotation.x = 0.4;
plane.rotation.x = THREE.Math.degToRad(90);
plane.rotation.x += 0.4;
plane.position.y -= 0.7;
linesP.rotation.x = THREE.Math.degToRad(90);
linesP.rotation.x += 0.4;
linesP.position.y -= 0.7;

// on anime le cube à chaque frame
const animate = function () {
  requestAnimationFrame(animate);

  cube.rotation.y += 0.01;
  lines.rotation.y += 0.01;
  plane.rotation.z -= 0.01;
  linesP.rotation.z -= 0.01;

  renderer.render(scene, camera);
};

animate();
