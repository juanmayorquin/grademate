import React from 'react'

const GradeCalcMessage = ({ neededGrade, missingPercent, mean }) => {
    if (missingPercent === 0) {
        return (
            <>
                <p>Tu nota final es de</p>
                <h3 className="font-bold text-3xl">{mean.toFixed(2)}</h3>

            </>
        )
    }
    if (missingPercent < 0) {
        return (
            <>
                <p>El porcentaje debe ser menor que 100</p>
            </>
        )
    }
    if (neededGrade <= 0) {
        return (
            <>
                <h3 className='font-bold text-3xl'>¡Ya coronaste!</h3>
            </>
        )
    }
    if (missingPercent == 100) {
        return
    }
    return (
        <>
            <p>Necesitas</p>
            <h3 className="font-bold text-3xl group-hover:text-sky-400 transition-all">{neededGrade.toFixed(2)}</h3>
            <p>en el <span className="font-bold group-hover:text-sky-400 transition-all">{missingPercent.toFixed(0)}%</span> restante</p>
        </>
    )
}

export default GradeCalcMessage