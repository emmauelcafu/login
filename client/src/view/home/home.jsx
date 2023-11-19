  // import {Router} from "react-router-dom";

  // import Logins from "../login/login";
  import "./home.css";
  import Button from "../../create/button/button";
  import { Link } from "react-router-dom";
  
  function Home() {
    return (
      <div className="component-one">
        <h1>Bienvenido</h1>
        

          <div className="container-div-submit">
          <Link to={"/login"}>
            
          <Button name="login" /> 
          </Link>
          </div>
        
      </div>
    );
  }

  export default Home;
