import { Plus, Calculator } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import GradeInput from './GradeInput'


const GradeCalcForm = () => {
    const [idCounter, setIdCounter] = useState(1);
    const [whishedGrade, setWishedGrade] = useState(3);
    const [neededGrade, setNeededGrade] = useState(3);
    const [missingPercent, setMissingPercent] = useState(100);
    const [grades, setGrades] = useState([{
        id: 0,
        value: 0,
        percent: 0
    }]);

    const handleAddGrade = () => {
        setGrades([...grades, { id: idCounter, value: 0, percent: 0 }])
        setIdCounter(idCounter + 1)
        console.log(grades);
    }

    const calcNeededGrade = () => {
        let actualGrade = 0;
        let actualPercent = 0

        grades.forEach(grade => {
            actualGrade += grade.value * (grade.percent / 100);
            actualPercent += (grade.percent / 100);
        });
        setNeededGrade((whishedGrade - actualGrade) / (1 - actualPercent))
        setMissingPercent((1 - actualPercent) * 100)
        actualPercent < 1 ? console.log(`Necesitas ${neededGrade} en el ${missingPercent}% restante`) : null;
    }

    return (
        <div className='bg-slate-800 max-w-3xl w-11/12 m-auto text-white p-8 rounded-xl'>
            <div className='w-full flex flex-col gap-4'>
                <h2>Ingresa aquí todas tus notas</h2>
                <div className='flex flex-col gap-2'>
                    {grades.map((_, index) => (
                        <GradeInput index={index} grades={grades} setGrades={setGrades} key={index} />
                    ))}
                </div>
                <button className='flex items-center justify-center gap-2 p-2 md:w-1/4 text-white bg-sky-500 hover:bg-sky-400 transition rounded-md'
                    onClick={handleAddGrade}
                >
                    <Plus />
                    Añadir nota
                </button>
                <button className='flex items-center justify-center gap-2 p-2 md:w-1/4 text-white bg-sky-500 hover:bg-sky-400 transition rounded-md'
                    onClick={calcNeededGrade}
                >
                    <Calculator />
                    Calcular restante
                </button>
            </div>
        </div >
    )
}

export default GradeCalcForm