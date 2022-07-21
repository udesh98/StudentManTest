import './App.css';
import './styles.css';
import CounterClass from './componentsTest/Classbase';
import CounterFunction from './componentsTest/FunctionalBase';

function App() {
  return (
    <div className="App">
      <center><h1>Hello</h1></center>
      <div className="counter">
        <CounterClass/>
        <CounterFunction/>
      </div>
    </div>
  );
}

export default App;
