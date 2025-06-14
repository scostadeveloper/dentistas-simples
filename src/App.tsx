import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { HelmetProvider } from 'react-helmet-async';
import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';

function App() {
  return (
    <HelmetProvider>
      <TooltipProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        <Toaster position="top-right" />
      </TooltipProvider>
    </HelmetProvider>
  );
}

export default App;
