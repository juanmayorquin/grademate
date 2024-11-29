import SubjectPage from "./components/SubjectPage";
import ConfigModalProvider from "./context/ConfigModalProvider";

function App() {
  return (
    <>
      <ConfigModalProvider>
        <SubjectPage/>
      </ConfigModalProvider>
    </>
  );
}

export default App;
