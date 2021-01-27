import './App.less';
import { Rate } from 'antd';
import { Switch } from 'antd';

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

function App() {
  return (
    <div className="App">
      <Rate />
      <Switch defaultChecked onChange={onChange} />
    </div>
  );
}

export default App;
