import ToDo from './pages/ToDo/ToDo';
import ToDoFunc from './pages/ToDo/ToDoFunc';
import SingleTask from './pages/SingleTask';
import NoFound from './pages/NoFound';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUs'
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
    <div className="mainDiv">
      <NavBar />
      <Routes>
        <Route path="/" element={<ToDoFunc />} />
        <Route path="/task/:id" element={<SingleTask />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NoFound />} />
      </Routes>
    </div>

  );
}

export default App;
