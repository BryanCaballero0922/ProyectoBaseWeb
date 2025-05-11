import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [inputError, setInputerror] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
      navigate('/');
   
  }

  const handleonBlur = ( ) =>{
    if (email.includes('@')) {
      setInputerror('');
      navigate('/');
    } else {
      setInputerror('Correo inválido');
    };
  }

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <div className="card p-4" style={{ width: '300px' }}>
        <h2 className="text">Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Ingrese su correo"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            onBlur={handleonBlur}
          />
          {inputError && <div className="text-danger mb-3">{inputError}</div>}
          <button className="btn btn-primary w-100" type="submit">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;