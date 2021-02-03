import { Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Nav from './Nav'

const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))
const Cat = lazy(() => import('./Cat'))

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Suspense fallback={<div>loading</div>}>
        <Route path="/home" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/cat" component={Cat}></Route>
      </Suspense>
    </div>
  );
}

export default App;
