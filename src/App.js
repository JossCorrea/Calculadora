import './App.css';
import Calculadora from './componentes/Calculadora';
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";


function App() {
  const history = useHistory();
  return (
    <div className="App">
      <Button
        onClick={() => history.push("/sobre")}
        fullWidth
        variant={"contained"}
        color={"primary"}
        margin={"normal"}
      >
        Sobre esta calculadora!
      </Button>
      <Calculadora />
    </div>
  );
}

export default App;
