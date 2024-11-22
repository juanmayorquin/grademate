import { Plus, Calculator, Bolt } from "lucide-react";
import React, { useEffect } from "react";
import { useState } from "react";
import GradeInput from "./GradeInput";

const GradeCalcForm = () => {
  const [idCounter, setIdCounter] = useState(1);
  const [whishedGrade, setWishedGrade] = useState(3);
  const [neededGrade, setNeededGrade] = useState(3);
  const [missingPercent, setMissingPercent] = useState(100);
  const [grades, setGrades] = useState([
    {
      id: 0,
      value: 0,
      percent: 0,
    },
  ]);

  const handleAddGrade = () => {
    setGrades([...grades, { id: idCounter, value: 0, percent: 0 }]);
    setIdCounter(idCounter + 1);
  };

  const calcNeededGrade = () => {
    let actualGrade = 0;
    let actualPercent = 0;

    grades.forEach((grade) => {
      actualGrade +=
        parseFloat(grade.value || 0) * parseFloat((grade.percent || 0) / 100);
      actualPercent += (grade.percent || 0) / 100;
    });
    const missing = 1 - actualPercent;

    if (missing <= 0) {
      console.log("Ya tienes más del 100% de porcentaje.");
      return;
    }

    const calculatedNeededGrade = (whishedGrade - actualGrade) / missing;
    calculatedNeededGrade > 0
      ? console.log(
          `Necesitas sacar ${calculatedNeededGrade.toFixed(2)} en el ${(
            missing * 100
          ).toFixed(0)}% restante.`
        )
      : "Ya coronaste vv";
    setNeededGrade(calculatedNeededGrade);
    setMissingPercent(missing * 100);
  };

  useEffect(() => calcNeededGrade, [grades]);

  return (
    <div className="bg-slate-800 max-w-3xl flex flex-col gap-4 w-11/12 m-auto text-white p-8 rounded-xl">
      <h2>Ingresa aquí todas tus notas</h2>
      <div className="w-full flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          {grades.map((_, index) => (
            <GradeInput
              index={index}
              grades={grades}
              setGrades={setGrades}
              key={grades[index].id}
            />
          ))}
        </div>
        <button
          className="flex items-center justify-center gap-2 p-2 md:w-1/4 text-white bg-sky-500 hover:bg-sky-400 transition rounded-md"
          onClick={handleAddGrade}
        >
          <Plus />
          Añadir nota
        </button>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="flex items-center justify-center gap-2 p-2 md:w-1/4 text-white bg-sky-500 hover:bg-sky-400 transition rounded-md"
          onClick={calcNeededGrade}
        >
          <Calculator />
          Calcular restante
        </button>
        <button className="hover:bg-white/5 p-2 rounded-md transition-all">
          <Bolt />
        </button>
      </div>
    </div>
  );
};

export default GradeCalcForm;
