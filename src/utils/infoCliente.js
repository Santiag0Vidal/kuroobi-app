export function getInfoCliente() {
  const clienteString = localStorage.getItem("cliente");
  const cliente = clienteString ? JSON.parse(clienteString) : "no se encontro" ;
console.log(cliente[0])
  return cliente[0];
}