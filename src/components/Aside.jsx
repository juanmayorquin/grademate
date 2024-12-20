/* eslint-disable react/prop-types */
import { Plus } from "lucide-react";

const Aside = ({ subjects = [], setSubject, setSubjects }) => {
  const handleAddSubject = () => {
    setSubjects((prevSubjectsList) => [...prevSubjectsList, { name: "Nueva asignatura", notes: [] }])
  }

  const subjectStyles = "flex items-center gap-4 hover:bg-white/5 hover:text-sky-400 p-4 rounded-md transition-all"

  return (
    <aside className="w-1/4 bg-slate-950 sticky h-screen">
      <div className="flex flex-col p-1">
        {subjects.map((subject) => {
          <button className={subjectStyles} onClick={() => setSubject(subject)}>{subject.name}</button>
        })}
        <button className={subjectStyles} onClick={handleAddSubject}><Plus /> Añadir asignatura</button>
      </div>
    </aside>
  );
};

export default Aside;
