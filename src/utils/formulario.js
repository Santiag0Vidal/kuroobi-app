export function cargarFormulario(cliente) {
  const formulario = JSON.parse(localStorage.getItem("cliente")) || [];
  formulario.push(cliente);
  localStorage.setItem("cliente", JSON.stringify(formulario));
}

export function borrarFormulario() {
  localStorage.clear();
}