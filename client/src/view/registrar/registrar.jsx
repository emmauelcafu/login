import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "../../create/button/button";

import "./registrar.css";

function Registro() {
  const [registrar, setRegistrar] = useState({
    name: "",
    password: "",
    gmail: "",
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    let value = event.target.value;
    setRegistrar({ ...registrar, [property]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault(); // Corrección: usa preventDefault en lugar de preventDefaul

    const registrarData = JSON.stringify(registrar);
    axios
      .post("http://localhost:3001/registrar", registrarData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        // Verifica si se recibió una respuesta exitosa del servidor y muestra un mensaje en consecuencia
        if (res.status === 200) {
          alert("Registro exitoso");
          // Puedes redirigir al usuario a la página de inicio de sesión u otra página aquí
        } else {
          alert("Registro fallido");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error al registrar. Verifica tus credenciales.");
      });
  };

  return (
    <div>
      <div className="div-registrar">
        <form onSubmit={submitHandler}>
          <div>
            <h1>Registrate</h1>
          </div>

          <div className="div-input">
          <input
            type="text"
            placeholder="Usuario"
            onChange={changeHandler}
            name="name"
            required
          />
          </div>
          <div className="div-input">
          <input
            type="password"
            placeholder="Contraseña"
            onChange={changeHandler}
            name="password"
            required
          />
          </div>
          <div className="div-input">
          <input
            type="text"
            placeholder="Correo"
            onChange={changeHandler}
            name="gmail"
            required
          />
          </div>
          <Button name="enviar"/>
        </form>
        <Link to={"/login"}>
          <Button name="ir al login"/>
        </Link>
      </div>
    </div>
  );
}

export default Registro;
