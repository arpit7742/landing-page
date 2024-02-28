import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Loader from "./Components/Loader";
import Main from "./Components/Main";
import Section2 from "./Components/Section2";

function App() {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    },5000 );
  }, []);
  return (
    <div className="App font-signature">
      {load ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Main />
          <Section2 />
          
        </>
      )}
    </div>
  );
}

export default App;
