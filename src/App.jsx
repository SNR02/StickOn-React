import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect, useState } from 'react';
import Home from './pages/HomePage';
import Project from './pages/ProjectPage';
import Contact from './pages/ContactPage';

function ScrollToTop({ children }) {
  const { pathname } = useLocation();
  const [isReady, setIsReady] = useState(false);

  // Use useLayoutEffect to scroll to the top before the render
  useLayoutEffect(() => {
    // Scroll to top and then allow rendering of the new route
    window.scrollTo(0, 0);
    setIsReady(true);
  }, [pathname]);

  // Render children only when scrolling to top is complete
  if (!isReady) {
    return null;  // or you can show a loading spinner
  }

  return children;  // Render the actual component once ready
}

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:projectName" element={<Project />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
