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
        return(
            <>
                <p>El porcentaje debe estar entre 0 y 100</p>
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
            <h3 className="font-bold text-3xl">{neededGrade.toFixed(2)}</h3>
            <p>en el <span className="font-bold">{missingPercent.toFixed(0)}%</span> restante</p>
        </>
    )
}

export default GradeCalcMessage