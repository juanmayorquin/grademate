import React, { useEffect, useRef, useState } from "react";
import { Check, Pencil } from "lucide-react";

const SubjectTitle = ({name}) => {
  const [subjectName, setSubjectName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  const hiddenTextRef = useRef(null);
  const inputRef = useRef(null);

  const refreshInputWidth = () => {
    if (hiddenTextRef.current && inputRef.current) {
      // Calcula el ancho exacto del texto renderizado
      const textWidth = hiddenTextRef.current.offsetWidth;
      // Ajusta el ancho del input al texto
      inputRef.current.style.width = `${textWidth}px`;
    }
  };

  useEffect(refreshInputWidth, [subjectName, isEditing]);

  useEffect(() => {
    if (inputRef.current && isEditing) {
      inputRef.current.select();
    }
  }, [isEditing]);

  return (
    <div className="flex gap-4 items-center h-min group">
      {!isEditing ? (
        <h2 className="text-4xl font-bold">{subjectName}</h2>
      ) : (
        <div className="relative">
          {/* Elemento oculto para medir el ancho del texto */}
          <span
            ref={hiddenTextRef}
            className="absolute top-0 left-0 invisible pointer-events-none whitespace-pre"
            style={{
              fontSize: "2.25rem",
              fontWeight: "bold",
              fontFamily: "inherit",
            }}
          >
            {subjectName}
          </span>
          <input
            ref={inputRef}
            className="text-4xl font-bold outline-none bg-transparent w-min"
            id="subject-name-input"
            type="text"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
          />
        </div>
      )}
      {!isEditing ? (
        <button
          className="hidden group-hover:block opacity-40 hover:opacity-80 transition-all"
          onClick={() => setIsEditing(!isEditing)}
        >
          <Pencil />
        </button>
      ) : (
        <button
          className="opacity-40 hover:opacity-80 transition-all"
          onClick={() => setIsEditing(false)}
        >
          <Check />
        </button>
      )}
    </div>
  );
};

export default SubjectTitle;
