import { Plus } from 'lucide-react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import GradeInput from './GradeInput'


const GradeCalcForm = () => {
    const [notesQty, setNotesQty] = useState(1)
    return (
        <div className='flex flex-col justify-between bg-slate-700 max-w-3xl w-11/12 m-auto text-white p-8 rounded-xl'>
            <form className='w-full'>
                <h2>Ingresa aquí todas tus notas</h2>
                {[...Array(notesQty)].map((e, index) => (
                    <GradeInput id={index} key={index} />
                ))}
                <button className='flex gap-2 p-2 text-white bg-sky-500 hover:bg-sky-400 transition rounded-md' type='button'
                    onClick={()=>{
                        setNotesQty(notesQty+1);
                    }}
                    >
                    <Plus />
                    Añadir nota
                </button>
            </form>
        </div>
    )
}

export default GradeCalcForm