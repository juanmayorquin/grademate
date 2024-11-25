import React from "react";
import { X } from "lucide-react";

const GradeInput = ({ index, grades, setGrades, maxGrade }) => {
  const id = grades[index].id;

  const handleGradeChange = (e) => {
    const value = Math.max(0, Math.min(maxGrade, e.target.value))
    setGrades(prevGradesList =>
      prevGradesList.map((grade, i) => (i === index ? { ...grade, value: value } : grade))
    )
  };

  const handlePercentChange = (e) => {
    const percent = Math.max(0, Math.min(100, e.target.value))
    setGrades(prevGradesList =>
      prevGradesList.map((grade, i) => (i === index ? { ...grade, percent: percent } : grade))
    );
  };

  const handleDelete = () => {
    setGrades(prevGradeList => (prevGradeList.length > 1 ? prevGradeList.filter((grade) => (grade.id !== id)) : [{ id: 0, value: 0, percent: 0 }]))
  };

  return (
    <div className="flex gap-[10%] hover:bg-white/5 py-1 px-5 rounded-md transition-all">
      <div className="flex flex-col py-2 w-1/2 group/grade">
        <label
          className="text-sm text-slate-100 group-focus-within/grade:text-sky-400 transition-all ease-in-out"
          htmlFor={`nota-${id}`}
        >
          Nota {index + 1}{" "}
        </label>
        <input
          id={`nota-${id}`}
          placeholder="Ingresa la nota"
          className="bg-transparent outline-none border-b py-0.5 focus:border-b-2 focus:p-1 focus:border-sky-500 focus:outline-none transition-all ease-in-out"
          type="number"
          onChange={handleGradeChange}
          value = {grades[index]?.value || ""}
        />
      </div>
      <div className="flex flex-col py-2 w-1/2 group/percent">
        <label
          className="text-sm text-slate-100 group-focus-within/percent:text-sky-400 transition-all ease-in-out"
          htmlFor={`porcentaje-${id}`}
        >
          Porcentaje {index + 1} (%)
        </label>
        <input
          id={`porcentaje-${id}`}
          placeholder="Ingresa el porcentaje"
          className="bg-transparent outline-none border-b py-0.5 focus:border-b-2 focus:p-1 focus:border-sky-500 focus:outline-none transition-all ease-in-out"
          type="number"
          onChange={handlePercentChange}
          value={grades[index]?.percent || ""}
        />
      </div>
      <button
        className="text-white hover:text-red-500 transition-all ease-in-out"
        type="button"
        onClick={handleDelete}
      >
        <X />
      </button>
    </div>
  );
};

export default GradeInput;