document.getElementById('anio').textContent = new Date().getFullYear();

document.getElementById('cta').addEventListener('click', () => {
  alert('¡Ole! Botón funcionando.');
});

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  // Simula un envío
  setTimeout(() => {
    document.getElementById('estado').textContent =
      `Gracias, ${data.nombre}. Te contactaremos al ${data.email}.`;
    e.target.reset();
  }, 500);
});
