import React from 'react'

const GradeInput = ({ id }) => {
    return (
        <div className='flex gap-[10%]'>

            <div className='flex flex-col py-2 w-1/2'>
                <label className='text-sm text-slate-100' htmlFor={`notas-${id}`}>Nota %</label>
                <input id={`nota-${id}`}
                    placeholder='Ingresa la nota'
                    className='bg-transparent outline-none border-b py-0.5 focus:border-b-2 focus:p-1 focus:border-sky-600 focus:outline-none transition-all ease-in-out'
                    type="number" />

            </div>
            <div className='flex flex-col py-2 w-1/2'>
                <label className='text-sm text-slate-100' htmlFor={`porcentaje-${id}`}>Porcentaje %</label>
                <input id={`porcentaje-${id}`}
                    placeholder='Ingresa el porcentaje'
                    className='bg-transparent outline-none border-b py-0.5 focus:border-b-2 focus:p-1 focus:border-sky-600 focus:outline-none transition-all ease-in-out'
                    type="number" />
            </div>
        </div>
    )
}

export default GradeInput