import { Callback } from "./Components/Callback";
import { Memorize } from "./Components/Memorize";

function App() {
  return (
    <div className="App">
      <h1>Use memo and Use Callback</h1>
      <Memorize />
      <h1>Use Callback</h1>
      <Callback />
    </div>
  );
}

export default App;
