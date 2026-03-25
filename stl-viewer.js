/**
 * PrintForge STL Viewer & Analyzer
 * - 3D Preview im Browser (Three.js)
 * - Maße auslesen (Bounding Box)
 * - Drucker-Kompatibilität prüfen
 * - Volumen berechnen
 */

// Drucker-Datenbank
const PRINTERS = {
  'h2d-single': {
    name: 'Bambu Lab H2D',
    volume: { x: 325, y: 320, z: 325 },
    speed: '600 mm/s',
    features: 'Dual-Extruder, High-Flow, Multi-Material'
  },
  'h2d-dual': {
    name: 'Bambu Lab H2D Dual',
    volume: { x: 300, y: 320, z: 325 },
    speed: '600 mm/s',
    features: 'Dual-Extruder, High-Flow, Multi-Material'
  },
  'p1s': {
    name: 'Bambu Lab P1S',
    volume: { x: 256, y: 256, z: 256 },
    speed: '500 mm/s',
    features: 'Enclosed, AMS-kompatibel, ABS/ASA/PLA/PETG'
  }
};

let scene, camera, renderer, controls, mesh;

function initViewer(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0A1628);

  camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 10000);
  camera.position.set(200, 200, 200);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  // Lights
  const ambient = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambient);
  const directional = new THREE.DirectionalLight(0xffffff, 0.8);
  directional.position.set(200, 400, 200);
  scene.add(directional);

  // Grid
  const grid = new THREE.GridHelper(400, 20, 0x2A4468, 0x1A2D4A);
  scene.add(grid);

  // Controls
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;

  animate();

  window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
}

function animate() {
  requestAnimationFrame(animate);
  if (controls) controls.update();
  if (renderer && scene && camera) renderer.render(scene, camera);
}

function loadSTL(file) {
  const reader = new FileReader();
  reader.onload = function(e) {
    const loader = new THREE.STLLoader();
    const geometry = loader.parse(e.target.result);

    // Remove old mesh
    if (mesh) scene.remove(mesh);

    const material = new THREE.MeshPhongMaterial({
      color: 0xE8772E,
      specular: 0x444444,
      shininess: 30
    });
    mesh = new THREE.Mesh(geometry, material);

    // Center model
    geometry.computeBoundingBox();
    const bb = geometry.boundingBox;
    const center = new THREE.Vector3();
    bb.getCenter(center);
    mesh.position.sub(center);
    mesh.position.y += (bb.max.y - bb.min.y) / 2;

    scene.add(mesh);

    // Fit camera
    const size = new THREE.Vector3();
    bb.getSize(size);
    const maxDim = Math.max(size.x, size.y, size.z);
    camera.position.set(maxDim * 1.5, maxDim * 1.2, maxDim * 1.5);
    controls.target.set(0, size.y / 4, 0);
    controls.update();

    // Analyze
    analyzeModel(geometry, size);
  };
  reader.readAsArrayBuffer(file);
}

function analyzeModel(geometry, size) {
  const dims = {
    x: parseFloat(size.x.toFixed(1)),
    y: parseFloat(size.z.toFixed(1)),  // STL Y = depth
    z: parseFloat(size.y.toFixed(1))   // STL Z = height
  };

  // Volume (cm³)
  let volume = 0;
  const pos = geometry.attributes.position;
  for (let i = 0; i < pos.count; i += 3) {
    const v0 = new THREE.Vector3().fromBufferAttribute(pos, i);
    const v1 = new THREE.Vector3().fromBufferAttribute(pos, i + 1);
    const v2 = new THREE.Vector3().fromBufferAttribute(pos, i + 2);
    volume += v0.dot(v1.clone().cross(v2)) / 6;
  }
  volume = Math.abs(volume) / 1000; // mm³ → cm³

  // Drucker-Check
  const results = [];
  for (const [id, printer] of Object.entries(PRINTERS)) {
    const fits = dims.x <= printer.volume.x &&
                 dims.y <= printer.volume.y &&
                 dims.z <= printer.volume.z;
    results.push({ ...printer, id, fits });
  }

  displayAnalysis(dims, volume, results);
}

function displayAnalysis(dims, volume, printers) {
  const panel = document.getElementById('analysisPanel');
  if (!panel) return;

  let html = `
    <div class="analysis-grid">
      <div class="analysis-card">
        <h4>📏 Maße</h4>
        <p>${dims.x} × ${dims.y} × ${dims.z} mm</p>
      </div>
      <div class="analysis-card">
        <h4>📦 Volumen</h4>
        <p>${volume.toFixed(1)} cm³</p>
      </div>
    </div>
    <h4 style="margin: 16px 0 8px;">🖨️ Drucker-Kompatibilität</h4>
    <div class="printer-list">
  `;

  for (const p of printers) {
    const icon = p.fits ? '✅' : '❌';
    const cls = p.fits ? 'printer-ok' : 'printer-no';
    html += `
      <div class="printer-item ${cls}">
        <span>${icon} <strong>${p.name}</strong></span>
        <span>${p.volume.x}×${p.volume.y}×${p.volume.z} mm | ${p.speed}</span>
      </div>
    `;
  }

  html += '</div>';
  panel.innerHTML = html;
  panel.style.display = 'block';
}
