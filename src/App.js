import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Table from './pages/table';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Table/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
