import { Routes, Route } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Skills from './pages/Skills';
import Dashboard from './pages/Dashboard';
import Aboutme from './pages/Aboutme';
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';
import Layout1 from './Layouts/Layout1';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      
      <Routes>
        {/* Routes with Layout1 */}
        <Route element={<Layout1 />}>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/certificate" element={<Certificates />} />
          <Route path="/dashboard" element={<Aboutme />} />
          <Route path="/aboutme" element={<Aboutme />} />
        </Route>
        
        {/* 404 Route without Layout */}
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Signup/>}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
