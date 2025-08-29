export function cargarFormulario(cliente) {
  const formulario = JSON.parse(localStorage.getItem("formulario")) || [];
  formulario.push(cliente);
  localStorage.setItem("formulario", JSON.stringify(formulario));
}