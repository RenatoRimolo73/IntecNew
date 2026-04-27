import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ServiceDetails } from './pages/ServiceDetails';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-950 text-zinc-300 selection:bg-brand/30 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servico/:id" element={<ServiceDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
