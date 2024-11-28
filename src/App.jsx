import SubjectCalc from "./components/SubjectCalc";
import ConfigModalProvider from "./context/ConfigModalProvider";

function App() {
  return (
    <>
      <ConfigModalProvider>
        <SubjectCalc/>
      </ConfigModalProvider>
    </>
  );
}

export default App;
