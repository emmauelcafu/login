

  import Caracter from "../../component/caracter/caracter.componet"
  import "./home.css";
  import Button from "../../create/button/button";
  import { Link } from "react-router-dom";
  
  function Home() {
    return (
      <div className="component-one">
        <h1>Bienvenido</h1>
        

          <div className="container-div-submit">
          <Link to={"/login"}>
            
          <Button className="Button-class" name="Login" /> 
          </Link>
          </div>
          <div className="div-caracter">
          <Caracter/>
          </div>

      </div>
    );
  }

  export default Home;
