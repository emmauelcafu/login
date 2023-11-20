import "./caracter.component.css";

function Caracter(params) {
  return (
    <div className="component-card" >

      <div className="div-component">
         <h3> Proyecto</h3>
      </div>
      <div className="div-contenido">
        Proyecto creado por <b>Emmanuel Cabrales</b>, es una forma de crear y comprender como funciona el  <b>JWT</b>  con <b>React</b> y <b>Express</b>.
      </div>

    </div>
  );
}
export default Caracter;
