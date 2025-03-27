
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';
import BeginnerResources from '@/pages/BeginnerResources';
import AIMasterclass from '@/pages/AIMasterclass';
import Layout from '@/components/Layout';
import { Toaster } from '@/components/ui/toaster';
import '@/App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/resources" element={<BeginnerResources />} />
          <Route path="/ai-masterclass" element={<AIMasterclass />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <Toaster />
    </Router>
  );
}

export default App;
