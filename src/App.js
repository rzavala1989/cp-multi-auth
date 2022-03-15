import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { FirstStep } from './components/FirstStep';
import SecondStep from './components/SecondStep';

function App() {
  return (
    <Router>
      <div className='container'>
        <Header />
        <Routes>
          <Route exact path='/' element={<FirstStep />} />
          <Route path='/second' element={<SecondStep />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
