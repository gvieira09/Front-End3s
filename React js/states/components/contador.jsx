import { useState } from "react";
function Contador () {
  
  const [contador, setContador] = useState(0);
  function incrementar() {
   setContador(contador + 1);
   if  (contador >= 10) {
   setContador(10);
}

  }
  function decrementar() {
    setContador(contador - 1);
    if (contador <= 0) {
      setContador(0);
    }
  }
  
  
  
  
    return(
        <div className="contador">
            <h1 className="contador_title">Contador {contador}</h1>
          <button onClick={incrementar}> Contar ++</button>
          <button onClick={decrementar}> Contar --</button>
        </div>


    )
    
}

export default Contador; 