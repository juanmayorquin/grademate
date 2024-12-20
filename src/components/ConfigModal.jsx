import { useContext } from 'react'
import { X } from 'lucide-react'
import { GUIContext } from '../context/GUIProvider'

const ConfigModal = () => {

    const { modalState } = useContext(GUIContext)

    const {setModalOpen, wishedGrade, setWishedGrade, maxGrade, setMaxGrade} = modalState

    const handleWishedGradeChange = (e) => {
        setWishedGrade(parseFloat(e.target.value))
    }

    const handleMaxGradeChange = (e) => {
        setMaxGrade(parseFloat(e.target.value))
    }

    return (
        <>
            <div className="absolute top-0 left-0 w-screen h-screen bg-black/50 backdrop-blur-sm grid place-items-center" onClick={() => setModalOpen(false)}></div>
            <div className="absolute top-1/4 left-[37.5%] w-1/4 h-auto bg-slate-800 p-8 rounded-md">
                <button className='absolute top-8 right-8 hover:text-sky-400 transition-all' onClick={() => setModalOpen(false)}><X /></button>
                <h2 className='font-bold text-3xl mb-4'>Configuración</h2>
                <div className='flex flex-wrap gap-[10%] py-1 rounded-md'>
                    <div className='flex flex-col py-2 w-auto group/grade'>
                        <label
                            className="text-sm text-slate-100 group-focus-within/grade:text-sky-400 transition-all ease-in-out"
                            htmlFor="max-grade-input"
                        >
                            Nota máxima
                        </label>
                        <input
                            id="max-grade-input"
                            placeholder="Ingresa la nota"
                            className="bg-transparent outline-none border-b py-0.5 focus:border-b-2 focus:p-1 focus:border-sky-500 focus:outline-none transition-all ease-in-out"
                            type="number"
                            onChange={handleMaxGradeChange}
                            value={maxGrade}
                        />

                    </div>
                    <div className='flex flex-col py-2 w-auto group/grade'>
                        <label
                            className="text-sm text-slate-100 group-focus-within/grade:text-sky-400 transition-all ease-in-out"
                            htmlFor="wished-grade-input"
                        >
                            Nota deseada
                        </label>
                        <input
                            id="wished-grade-input"
                            placeholder="Ingresa la nota"
                            className="bg-transparent outline-none border-b py-0.5 focus:border-b-2 focus:p-1 focus:border-sky-500 focus:outline-none transition-all ease-in-out"
                            type="number"
                            onChange={handleWishedGradeChange}
                            value={wishedGrade}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConfigModal