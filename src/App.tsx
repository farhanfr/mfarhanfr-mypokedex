import HomePage from './pages/home';
import { Route, BrowserRouter as Router, Routes, } from "react-router-dom";

import 'rsuite/dist/rsuite.min.css';
import DetailPage from './pages/detail';

const App = () => {
  return (
    <Router >
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/detail/:namePokemon' element={<DetailPage/>}/>
        </Routes>
    </Router>

  )
}

export default App;
