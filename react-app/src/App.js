import logo from './logo.svg';
import './App.css';
import DogCart from './DogCart';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" /> 
        <DogCart name="Dog1" image="https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_1280.jpg"/>
        <DogCart name="Dog2" image="https://cdn.pixabay.com/photo/2018/05/26/18/06/dog-3431913_1280.jpg"/>
      </header>
    </div>
  );
}

export default App;
