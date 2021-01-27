import './App.css';
import ContainerKnight from './container/Knight'
import store from './redux/store'

function App() {
  return (
    <div className="App">
      <ContainerKnight store={store}></ContainerKnight>
    </div>
  );
}

export default App;
