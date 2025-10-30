
export default function ConectarButton() {
  const handleClick = () => {
    window.location.href = 'http://localhost:5173/';
  };

  return (
    <button
      onClick={handleClick}
      
    >
      Ingresar
    </button>
  );
}
