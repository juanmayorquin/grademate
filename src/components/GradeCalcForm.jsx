import { Plus, Calculator, Bolt } from "lucide-react";
import React, { useEffect } from "react";
import { useState } from "react";
import GradeInput from "./GradeInput";
import GradeCalcMessage from "./GradeCalcMessage";
import ConfigurationPopup from "./ConfigurationPopup";

const GradeCalcForm = () => {
    const [idCounter, setIdCounter] = useState(1);
    const [maxGrade, setMaxGrade] = useState(5);
    const [wishedGrade, setWishedGrade] = useState(3);
    const [neededGrade, setNeededGrade] = useState(3);
    const [missingPercent, setMissingPercent] = useState(100);
    const [mean, setMean] = useState(0);
    const [grades, setGrades] = useState([
        {
            id: 0,
            value: 0,
            percent: 0,
        },
    ]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

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

        const calculatedNeededGrade = (wishedGrade - actualGrade) / missing;

        if (missing == 0) { setMean(actualGrade) }

        setNeededGrade(Math.max(calculatedNeededGrade, 0));
        setMissingPercent(missing * 100);
    };

    useEffect(calcNeededGrade, [grades, wishedGrade, maxGrade]);

    return (
        <div className="relative">
            <div className="bg-slate-800 max-w-3xl flex flex-col gap-4 w-11/12 m-auto text-white p-8 rounded-xl">
                <h2>Ingresa aquí todas tus notas</h2>
                <div className="w-full flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        {grades.map((_, index) => (
                            <GradeInput
                                index={index}
                                grades={grades}
                                setGrades={setGrades}
                                maxGrade={maxGrade}
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
                <div className="flex flex-col justify-center items-center group">
                    <GradeCalcMessage mean={mean} missingPercent={missingPercent} neededGrade={neededGrade} />
                </div>
                <div className="flex justify-end">
                    <button className="hover:bg-white/5 hover:text-sky-400 p-2 rounded-md transition-all" onClick={() => setIsPopupOpen(!isPopupOpen)}>
                        <Bolt />
                    </button>
                </div>
            </div>
            {isPopupOpen && <ConfigurationPopup setIsPopupOpen={setIsPopupOpen} wishedGrade={wishedGrade} setWishedGrade={setWishedGrade} maxGrade={maxGrade} setMaxGrade={setMaxGrade} />}

        </div>
    );
};

export default GradeCalcForm;
