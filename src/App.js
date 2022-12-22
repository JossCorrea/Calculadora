
import './App.css';
import Calculadora from './componentes/Calculadora';
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";



function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Button
        onClick={() => navigate("/sobre")}
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
