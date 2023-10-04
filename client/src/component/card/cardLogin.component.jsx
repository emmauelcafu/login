import "./cardLogin.component.css"

function CardLogin() {
  return (
    <div className="div-content-card">
      <form action="">
        <div className="div-h4"> <h4>BIENVENIDO</h4></div>

        <div className="div-input">
          
          <input type="text" placeholder="Username" />
        </div>


        <div className="div-input">
          
          <input type="text" placeholder="password" />
        </div>

        <div className="div-submit">
          <input type="submit" value="Iniciar Sesión"></input>
        </div>
        
        <div className="div-p">
            <p>¿perdiste la contraseña?</p>
            <p>¿no tines cuenta? Registrarme</p>
        </div>
      </form>
    </div>
  );
}
export default CardLogin;
