/* eslint-disable react/prop-types */
import { useContext } from "react";
import Aside from "../components/Aside";
import Navbar from "../components/Navbar";
import { GUIContext } from "../context/GUIProvider";
import ConfigModal from "../components/ConfigModal";

const SubjectLayout = ({ children }) => {
  const { modalState, asideState } = useContext(GUIContext);

  const { isModalOpen } = modalState;
  const { isAsideOpen } = asideState;

  return (
    <>
      <Navbar />
      <div className="flex">
        {isAsideOpen && <Aside />}
        <div className="w-full">{children}</div>
      </div>
      {isModalOpen && <ConfigModal />}
    </>
  );
};

export default SubjectLayout;
