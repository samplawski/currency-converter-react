import { Button } from "./styled.js";

const Buttons = ({ onReset }) => (
  <p>
    <Button
      type="submit" 
      value="Przelicz" 
      title="Przelicz"
    >
      Przelicz
    </Button>

    <Button 
       onClick={onReset} 
       type="button"
       value="Wyczyść" 
       title="Wyczyść"
      >
      Wyczyść
    </Button>
  </p>
);

export default Buttons;
