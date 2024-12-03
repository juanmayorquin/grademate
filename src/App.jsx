import SubjectPage from "./components/SubjectPage";
import GUIProvider from "./context/GUIProvider";
import SubjectLayout from "./layouts/SubjectLayout";

function App() {
  return (
    <>
      <GUIProvider>
        <SubjectLayout>
          <SubjectPage />
        </SubjectLayout>
      </GUIProvider>
    </>
  );
}

export default App;
