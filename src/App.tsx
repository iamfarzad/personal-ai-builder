
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@/layout';
import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';
import BeginnerResources from '@/pages/BeginnerResources';
import AIMasterclass from '@/pages/AIMasterclass';
import AIGlossary from '@/pages/AIGlossary';
import PromptLibrary from '@/pages/PromptLibrary';
import CaseStudies from '@/pages/CaseStudies';
import LiteratureDatabase from '@/pages/LiteratureDatabase';
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
          <Route path="/ai-glossary" element={<AIGlossary />} />
          <Route path="/prompt-library" element={<PromptLibrary />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/literature" element={<LiteratureDatabase />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <Toaster />
    </Router>
  );
}

export default App;
