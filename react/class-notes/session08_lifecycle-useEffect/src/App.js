import LifeCycleMethods from "./components/LifeCycleMethods";
import { useState } from "react";
import UseEffectHook from "./components/UseEffectHook";
import Users from "./components/Users";

function App() {
  const [show, setShow] = useState(true);
  console.log(show);

  return (
    <div className="container text-center mt-4">
      {/* <button onClick={() => setShow(!show)} className="btn btn-dark">
        {show ? "Hide" : "Show"}
      </button> */}
      {/* conditional renderinng (short-circuit) || show false olunca çalıştır.*/}
      {/* {show && <LifeCycleMethods />} */}
      {/* ternary iki şart ve 2 durum olunca mantıklı oluyor*/}
      {/* {show ? <LifeCycleMethods /> : null} */}
      {/* {show && <UseEffectHook />} */}
      {/* <UseEffectHook /> */}
      <Users />
    </div>
  );
}

export default App;
//toggle mantığı
