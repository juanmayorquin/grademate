import React from "react";

const Aside = () => {
  return (
    <aside className="w-1/4 bg-slate-950">
      <div className="flex flex-col p-1">
        <a className="hover:bg-white/5 hover:text-sky-400 p-4 rounded-md transition-all" href="">Opción 1</a>
        <a className="hover:bg-white/5 hover:text-sky-400 p-4 rounded-md transition-all" href="">Opción 2</a>
        <a className="hover:bg-white/5 hover:text-sky-400 p-4 rounded-md transition-all" href="">Opción 3</a>
        <a className="hover:bg-white/5 hover:text-sky-400 p-4 rounded-md transition-all" href="">Opción 4</a>
        <a className="hover:bg-white/5 hover:text-sky-400 p-4 rounded-md transition-all" href="">Opción 5</a>
      </div>
    </aside>
  );
};

export default Aside;
