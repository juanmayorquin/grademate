import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react'

const GradeInput = ({ index, grades, setGrades }) => {
    const id = grades[index].id;
    const [gradeValue, setGradeValue] = useState(0);
    const [gradePercent, setGradePercent] = useState(0);

    const writeFromGradesList = () => {
        const gradeTextInput = document.getElementById(`nota-${id}`);
        const percentTextInput = document.getElementById(`porcentaje-${id}`);

        gradeTextInput.value = grades[index].value != 0 ? grades[index].value : "";
        percentTextInput.value = grades[index].percent != 0 ? grades[index].percent : "";
    }

    const writeToGradesList = () => {
        const newGradesList = [...grades];
        newGradesList[index].value = gradeValue;
        newGradesList[index].percent = gradePercent;
        setGrades(newGradesList);
    }

    useEffect(() => {
        writeFromGradesList();
    }, [grades])

    useEffect(() => {
        writeToGradesList();
    }, [gradeValue, gradePercent])


    const handleGradeChange = (e) => {
        setGradeValue(e.target.value);
    };
    const handlePercentChange = (e) => {
        setGradePercent(e.target.value)
    };

    const handleDelete = () => {
        grades.length > 1 ? setGrades(grades.filter(grade => grade.id !== id)) : 0;
        console.log(grades);
    };

    return (
        <div className='flex gap-[10%] hover:bg-slate-700 py-1 px-5 rounded-md transition-all'>
            {id}
            <div className='flex flex-col py-2 w-1/2 group/grade'>
                <label className='text-sm text-slate-100 group-focus-within/grade:text-sky-400 transition-all ease-in-out' htmlFor={`nota-${id}`}>Nota {index + 1} </label>
                <input id={`nota-${id}`}
                    placeholder='Ingresa la nota'
                    className='bg-transparent outline-none border-b py-0.5 focus:border-b-2 focus:p-1 focus:border-sky-500 focus:outline-none transition-all ease-in-out'
                    type="number"
                    onChange={handleGradeChange}
                />

            </div>
            <div className='flex flex-col py-2 w-1/2 group/percent'>
                <label className='text-sm text-slate-100 group-focus-within/percent:text-sky-400 transition-all ease-in-out' htmlFor={`porcentaje-${id}`}>Porcentaje {index + 1} (%)</label>
                <input id={`porcentaje-${id}`}
                    placeholder='Ingresa el porcentaje'
                    className='bg-transparent outline-none border-b py-0.5 focus:border-b-2 focus:p-1 focus:border-sky-500 focus:outline-none transition-all ease-in-out'
                    type="number"
                    onChange={handlePercentChange}
                />
            </div>
            <button className='text-white hover:text-red-500 transition-all ease-in-out' type="button"
                onClick={handleDelete}>
                <X />
            </button>
        </div>
    )
}

export default GradeInput