import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Result from './page/Result';
import Resultnocp from './page/Resultnocp';

function App() {
  return (
    <div className='App'>
      {' '}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Result />}></Route>
          <Route path='/nocp' element={<Resultnocp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
