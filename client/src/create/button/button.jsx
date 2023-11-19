
import "./botton.css"
function Button({ name }) {
    return (
      <div className="component-id">
        <input className="component-input" type="submit" value={name} />
      </div>
    );
  }
export default Button;
