
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';
import BeginnerResources from '@/pages/BeginnerResources';
import AIMasterclass from '@/pages/AIMasterclass';
import '@/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/resources" element={<BeginnerResources />} />
        <Route path="/ai-masterclass" element={<AIMasterclass />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
