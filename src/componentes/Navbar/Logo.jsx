import { Link } from "react-router-dom";
import img from "../../assets/logo-r.png";
function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Link to="/">
        <a href="#inicio">
          <img
            src={img}
            alt="Logo"
            className="h-20 w-80 object-contain cursor-pointer"
          />
        </a>
      </Link>
    </div>
  );
}

export default Logo;
