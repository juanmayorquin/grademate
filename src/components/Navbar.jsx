import { useContext } from "react";
import { CircleUser, Menu } from "lucide-react";
import { GUIContext } from "../context/GUIProvider";

const Navbar = () => {
  const { asideState } = useContext(GUIContext);
  const { isAsideOpen, setAsideOpen } = asideState;
  return (
    <nav className="flex p-3 justify-between bg-slate-950">
      <button
        className="hover:text-sky-400 transition-all"
        onClick={() => setAsideOpen(!isAsideOpen)}
      >
        <Menu className="h-8 w-8" />
      </button>
      <button className="hover:text-sky-400 transition-all">
        <CircleUser className="h-8 w-8" />
      </button>
    </nav>
  );
};

export default Navbar;
