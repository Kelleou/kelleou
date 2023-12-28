import './App.scss';
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home';
import About from './pages/About'
import { Projects } from './pages/Projects/index.tsx';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects/>} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
