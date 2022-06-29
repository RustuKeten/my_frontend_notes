//** component: uygulamayı esas çalıştıran  */
import React,{ useState} from "react";
import RustuKeten from "./RustuKeten";
function App() {
  const [isim, setIsim] = useState("Rustu");
  return (
    //jsx
    <div>
      <h1>Merhaba React {isim}</h1>
      <button onClick={()=> setIsim("fatih")}>ismi değiştir</button>
      <RustuKeten ad="FS11"/>
    </div>
  );
}

export default App;
