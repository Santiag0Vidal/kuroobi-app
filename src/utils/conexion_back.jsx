
export default function ConectarButton() {
  const handleClick = () => {
    window.location.href = 'https://front-kuro.vercel.app/login';
  };

  return (
    <button
      onClick={handleClick}
      
    >
      Ingresar
    </button>
  );
}
