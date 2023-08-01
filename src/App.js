import ToDo from './components/pages/ToDo/ToDo';
import HOCTest from './components/HOCTest';
import SingleTask from './components/pages/SingleTask';
import NoFound from './components/pages/NoFOund';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import MainHooks from './components/Hooks/MainHooks';
import Wrapper from './components/Hooks/ContextHook/Wrapper';
import AboutUs from './components/pages/AboutUs/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
    <div className="mainDiv">
      {/* <Wrapper /> */}
      {/* <MainHooks /> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<ToDo />} />
        <Route path="/task/:id" element={<SingleTask />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NoFound />} />
      </Routes>
    </div>

  );
}

export default App;
