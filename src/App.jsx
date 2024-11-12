import { Routes, Route } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Skills from './pages/Skills';
import NotFound from './pages/NotFound';
import Layout1 from './Layouts/Layout1';
import Dashboard from './pages/Dashboard';

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
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        
        {/* 404 Route without Layout */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
