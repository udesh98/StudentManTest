import './App.css';
import './styles.css';
// import CounterClass from './componentsTest/Classbase';
// import CounterFunction from './componentsTest/FunctionalBase';
import Home from './componentsTest/Home';
import Navbar from './componentsTest/Navbar';

function App() {
  return (
    <div className="App">
      <div className="container1">
        <Navbar/><br /><hr /><br />
        <Home/>
      </div>
    </div>
  );
}

export default App;
