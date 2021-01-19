import logo from './logo.svg';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import Index from './pages/Index'
 
function App() {
  return (
    <div className="App">
      <div className="content">
        <Route path="/" component={Index}></Route>
      </div>
    </div>
  );
}

export default App;
