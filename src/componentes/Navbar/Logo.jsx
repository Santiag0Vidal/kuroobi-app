import img from "../../assets/logo.jpg";
function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <a href="#inicio">
        <img src={img} alt="Logo" className="h-20 w-80 object-contain cursor-pointer" />
      </a>
    </div>
  );
}

export default Logo;