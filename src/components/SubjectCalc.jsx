import React, { useState, useContext } from "react";
import { Check, Pencil, X } from "lucide-react";
import ConfigModal from "./ConfigModal";
import GradeCalcForm from "./GradeCalcForm";
import { ConfigModalContext } from "../context/ConfigModalProvider";

const SubjectCalc = () => {
  const [subjectName, setSubjectName] = useState("Prueba");
  const [isEditing, setIsEditing] = useState(false);
  const { isModalOpen, setIsModalOpen } = useContext(ConfigModalContext);

  const [wishedGrade, setWishedGrade] = useState(3);
  const [maxGrade, setMaxGrade] = useState(5);
  return (
    <div className="relative">
      <div className="flex gap-4 items-center group">
        {!isEditing ? (
          <h2 className="text-4xl font-bold">{subjectName}</h2>
        ) : (
          <input
            className="text-4xl font-bold outline-none bg-transparent w-auto"
            type="text"
            value={subjectName}
            onChange={(e) => {
              setSubjectName(e.target.value);
            }}
          />
        )}
        {!isEditing ? (
          <button
            className="hidden group-hover:block opacity-40 hover:opacity-80 transition-all"
            onClick={() => {
              setIsEditing(!isEditing);
            }}
          >
            <Pencil />
          </button>
        ) : (
          <button
            className="opacity-40 hover:opacity-80 transition-all"
            onClick={() => setIsEditing(false)}
          >
            <Check />
          </button>
        )}
      </div>
      <GradeCalcForm maxGrade={maxGrade} wishedGrade={wishedGrade}/>
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

export default SubjectCalc;
