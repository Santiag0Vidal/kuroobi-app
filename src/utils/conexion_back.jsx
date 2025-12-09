//import { useNavigate } from "react-router-dom";

export default function ConectarButton() {
 // const nav = useNavigate();
  const handleClick = () => {
    window.location.href = 'https://front-kuro.vercel.app/login';
   // nav('/kuroo-app')
  };

  return (
    <button
      onClick={handleClick}
      
    >
      Ingresar
    </button>
  );
}
