import React from "react";
import GradeCalcForm from "./GradeCalcForm";
import SubjectTitle from "./SubjectTitle";

const SubjectPage = ({ subjectName = "Nombre de la asignatura" }) => {
  return (
    <div className="relative">
      <header className="bg-slate-600 w-full p-4 h-72 flex items-end">
        <SubjectTitle name={subjectName} />
      </header>
      <GradeCalcForm />
    </div>
  );
};

export default SubjectPage;
