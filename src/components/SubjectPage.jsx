import React, { useState, useContext } from "react";
import ConfigModal from "./ConfigModal";
import GradeCalcForm from "./GradeCalcForm";
import { ConfigModalContext } from "../context/ConfigModalProvider";
import SubjectTitle from "./SubjectTitle";

const SubjectPage = ({ subjectName }) => {
  const { isModalOpen, setIsModalOpen } = useContext(ConfigModalContext);

  const [wishedGrade, setWishedGrade] = useState(3);
  const [maxGrade, setMaxGrade] = useState(5);
  return (
    <div className="relative">
      <header className="bg-slate-600 w-full h-72 flex items-end">
        <SubjectTitle name="Prueba" />
      </header>
      <GradeCalcForm maxGrade={maxGrade} wishedGrade={wishedGrade} />
      {isModalOpen && (
        <ConfigModal
          setIsPopupOpen={setIsModalOpen}
          wishedGrade={wishedGrade}
          setWishedGrade={setWishedGrade}
          maxGrade={maxGrade}
          setMaxGrade={setMaxGrade}
        />
      )}
    </div>
  );
};

export default SubjectPage;
