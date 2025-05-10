import { Form } from "react-router-dom";

function Login(){
    return(
         <div className="d-flex align-items-center justify-cintent-center"
     style={{height: '100vh'}}>

<div className="card p-4" style={{width:'300px'}}>
    <h2 className="text">Iniciar secion</h2>
        <form onsubmit={()=>{}}> 
        <input type="email" className="form-control mb-3" planceholder="Ingrese su correo"
        value={""}
        oneChange={()=>{}}/>

      <button
      className="btn btn-primary w-100"
      type="subimit">
        Ingresar
      </button>
        </form>
        </div>
        </div>
    );
}

export default  Login;