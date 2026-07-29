import { Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import InvoiceGenerator from './pages/InvoiceGenerator';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/facture" element={<InvoiceGenerator />} />
    </Routes>
  );
}
