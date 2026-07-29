import { useState, useRef, useEffect } from 'react';
import { Download, Plus, Trash2, ArrowLeft, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InvoiceGenerator() {
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains('dark-theme');
  });

  // Pour s'assurer que le body est adapté
  useEffect(() => {
    // On force un background clair pour l'impression
    return () => {};
  }, []);

  const [invoice, setInvoice] = useState({
    number: 'INV-2026-001',
    date: new Date().toISOString().split('T')[0],
    dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    clientName: 'Nom du Client',
    clientAddress: 'Adresse du client\nCode Postal, Ville',
    freelanceName: 'Mathias KOWOE',
    freelanceAddress: 'Ton Adresse\nCode Postal, Ville',
    freelanceEmail: 'contact@mathiaskowoe.com',
    items: [
      { id: 1, description: 'Développement Web (Prestation)', quantity: 1, rate: 450 }
    ],
    taxRate: 0,
    notes: 'TVA non applicable, art. 293 B du CGI.',
    billingType: 'forfait',
    currency: '€'
  });

  const handleItemChange = (id, field, value) => {
    setInvoice(prev => ({
      ...prev,
      items: prev.items.map(item => item.id === id ? { ...item, [field]: value } : item)
    }));
  };

  const addItem = () => {
    setInvoice(prev => ({
      ...prev,
      items: [...prev.items, { id: Date.now(), description: 'Nouvelle ligne', quantity: 1, rate: 0 }]
    }));
  };

  const removeItem = (id) => {
    setInvoice(prev => ({
      ...prev,
      items: prev.items.filter(item => item.id !== id)
    }));
  };

  const calculateSubtotal = () => {
    return invoice.items.reduce((sum, item) => sum + (item.quantity * item.rate), 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    return subtotal + (subtotal * (invoice.taxRate / 100));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-main)] transition-colors duration-500 pb-20">
      {/* Navbar simplifiée (Non imprimée) */}
      <nav className="p-6 flex justify-between items-center print:hidden border-b border-[var(--border-card)] bg-[var(--bg-card)] backdrop-blur-md sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-2 text-[var(--text-muted)] hover:text-accent transition-colors font-medium">
          <ArrowLeft size={20} /> Retour au CV
        </Link>
        <h1 className="text-xl font-serif italic hidden md:block">Générateur de Factures</h1>
        <button 
          onClick={handlePrint}
          className="bg-accent text-white px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-accent/90 hover:shadow-lg transition-all"
        >
          <Printer size={18} /> Imprimer / PDF
        </button>
      </nav>

      <div className="max-w-7xl mx-auto px-4 mt-8 flex flex-col lg:flex-row gap-8">
        
        {/* Panneau de configuration (Caché à l'impression) */}
        <div className="lg:w-1/3 print:hidden space-y-6">
          <div className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-3xl p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-6">Paramètres de la facture</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-[var(--text-muted)] mb-1">Numéro de facture</label>
                <input 
                  type="text" 
                  value={invoice.number} 
                  onChange={(e) => setInvoice({...invoice, number: e.target.value})}
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-card)] rounded-xl px-4 py-2 focus:outline-none focus:border-accent text-[var(--text-main)]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[var(--text-muted)] mb-1">Date</label>
                  <input 
                    type="date" 
                    value={invoice.date} 
                    onChange={(e) => setInvoice({...invoice, date: e.target.value})}
                    className="w-full bg-[var(--bg-primary)] border border-[var(--border-card)] rounded-xl px-4 py-2 focus:outline-none focus:border-accent text-[var(--text-main)]"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[var(--text-muted)] mb-1">Échéance</label>
                  <input 
                    type="date" 
                    value={invoice.dueDate} 
                    onChange={(e) => setInvoice({...invoice, dueDate: e.target.value})}
                    className="w-full bg-[var(--bg-primary)] border border-[var(--border-card)] rounded-xl px-4 py-2 focus:outline-none focus:border-accent text-[var(--text-main)]"
                  />
                </div>
              </div>

              <hr className="border-[var(--border-card)] my-4" />

              <div>
                <label className="block text-sm text-[var(--text-muted)] mb-1">Mon Nom / Entreprise</label>
                <input 
                  type="text" 
                  value={invoice.freelanceName} 
                  onChange={(e) => setInvoice({...invoice, freelanceName: e.target.value})}
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-card)] rounded-xl px-4 py-2 focus:outline-none focus:border-accent text-[var(--text-main)]"
                />
              </div>
              <div>
                <label className="block text-sm text-[var(--text-muted)] mb-1">Mon Adresse</label>
                <textarea 
                  value={invoice.freelanceAddress} 
                  onChange={(e) => setInvoice({...invoice, freelanceAddress: e.target.value})}
                  rows="2"
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-card)] rounded-xl px-4 py-2 focus:outline-none focus:border-accent text-[var(--text-main)] resize-none"
                />
              </div>
              <div>
                <label className="block text-sm text-[var(--text-muted)] mb-1">Mon Email / Contact</label>
                <input 
                  type="text" 
                  value={invoice.freelanceEmail} 
                  onChange={(e) => setInvoice({...invoice, freelanceEmail: e.target.value})}
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-card)] rounded-xl px-4 py-2 focus:outline-none focus:border-accent text-[var(--text-main)]"
                />
              </div>

              <hr className="border-[var(--border-card)] my-4" />

              <div>
                <label className="block text-sm text-[var(--text-muted)] mb-1">Nom du Client</label>
                <input 
                  type="text" 
                  value={invoice.clientName} 
                  onChange={(e) => setInvoice({...invoice, clientName: e.target.value})}
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-card)] rounded-xl px-4 py-2 focus:outline-none focus:border-accent text-[var(--text-main)]"
                />
              </div>
              <div>
                <label className="block text-sm text-[var(--text-muted)] mb-1">Adresse du Client</label>
                <textarea 
                  value={invoice.clientAddress} 
                  onChange={(e) => setInvoice({...invoice, clientAddress: e.target.value})}
                  rows="3"
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-card)] rounded-xl px-4 py-2 focus:outline-none focus:border-accent text-[var(--text-main)] resize-none"
                />
              </div>

              <hr className="border-[var(--border-card)] my-4" />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[var(--text-muted)] mb-1">Type de facture</label>
                  <select 
                    value={invoice.billingType}
                    onChange={(e) => setInvoice({...invoice, billingType: e.target.value})}
                    className="w-full bg-[var(--bg-primary)] border border-[var(--border-card)] rounded-xl px-4 py-2 focus:outline-none focus:border-accent text-[var(--text-main)]"
                  >
                    <option value="forfait">Forfaitaire (Qté x Prix)</option>
                    <option value="horaire">Taux horaire (Heures x Taux)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-[var(--text-muted)] mb-1">Devise</label>
                  <select 
                    value={invoice.currency}
                    onChange={(e) => setInvoice({...invoice, currency: e.target.value})}
                    className="w-full bg-[var(--bg-primary)] border border-[var(--border-card)] rounded-xl px-4 py-2 focus:outline-none focus:border-accent text-[var(--text-main)]"
                  >
                    <option value="€">Euro (€)</option>
                    <option value="$">Dollar ($)</option>
                    <option value="CFA">Franc CFA (CFA)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-[var(--text-muted)] mb-1">Taux de TVA (%)</label>
                <select 
                  value={invoice.taxRate}
                  onChange={(e) => setInvoice({...invoice, taxRate: parseFloat(e.target.value)})}
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-card)] rounded-xl px-4 py-2 focus:outline-none focus:border-accent text-[var(--text-main)]"
                >
                  <option value={0}>0% (Auto-entrepreneur)</option>
                  <option value={5.5}>5.5% (Réduit)</option>
                  <option value={10}>10% (Intermédiaire)</option>
                  <option value={20}>20% (Standard)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-[var(--text-muted)] mb-1">Notes (Mentions légales)</label>
                <textarea 
                  value={invoice.notes} 
                  onChange={(e) => setInvoice({...invoice, notes: e.target.value})}
                  rows="3"
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-card)] rounded-xl px-4 py-2 focus:outline-none focus:border-accent text-[var(--text-main)] resize-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Aperçu de la facture (Format A4 pour impression) */}
        {/* On s'assure que cet élément prenne toute la page lors de l'impression */}
        <div className="lg:w-2/3 print:w-full print:absolute print:top-0 print:left-0 print:m-0 print:p-0">
          <div className="bg-white text-black min-h-[1056px] w-full max-w-[800px] mx-auto shadow-2xl print:shadow-none print:max-w-none p-12 md:p-16 rounded-2xl print:rounded-none relative">
            
            {/* Header de la facture */}
            <div className="flex justify-between items-start mb-16">
              <div>
                <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">{invoice.freelanceName}</h1>
                <p className="text-gray-500 text-sm whitespace-pre-line">{invoice.freelanceAddress}</p>
                <p className="text-gray-500 text-sm">{invoice.freelanceEmail}</p>
              </div>
              <div className="text-right">
                <h2 className="text-5xl font-black text-gray-200 uppercase tracking-wider mb-4">Facture</h2>
                <div className="text-sm">
                  <p className="text-gray-500"><span className="font-semibold text-gray-700">N° :</span> {invoice.number}</p>
                  <p className="text-gray-500"><span className="font-semibold text-gray-700">Date :</span> {invoice.date}</p>
                  <p className="text-gray-500"><span className="font-semibold text-gray-700">Échéance :</span> {invoice.dueDate}</p>
                </div>
              </div>
            </div>

            {/* Facturé à */}
            <div className="mb-16">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Facturé à</h3>
              <p className="text-lg font-semibold text-gray-800">{invoice.clientName}</p>
              <p className="text-gray-600 whitespace-pre-line">{invoice.clientAddress}</p>
            </div>

            {/* Tableau des prestations */}
            <div className="mb-12">
              <div className="flex text-xs font-bold text-gray-400 uppercase tracking-widest border-b-2 border-gray-100 pb-3 mb-4">
                <div className="w-1/2">Description</div>
                <div className="w-1/6 text-center">{invoice.billingType === 'horaire' ? 'Heures' : 'Qté'}</div>
                <div className="w-1/6 text-right">{invoice.billingType === 'horaire' ? 'Taux' : 'Prix Unitaire'}</div>
                <div className="w-1/6 text-right">Montant</div>
              </div>

              {invoice.items.map((item, index) => (
                <div key={item.id} className="flex items-center text-sm py-4 border-b border-gray-50 group">
                  <div className="w-1/2 pr-4">
                    <input 
                      type="text" 
                      value={item.description}
                      onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                      className="w-full bg-transparent border-none focus:outline-none focus:ring-1 focus:ring-accent/30 rounded p-1 print:p-0 font-medium text-gray-800"
                    />
                  </div>
                  <div className="w-1/6">
                    <input 
                      type="number" 
                      value={item.quantity}
                      onChange={(e) => handleItemChange(item.id, 'quantity', parseFloat(e.target.value))}
                      className="w-full bg-transparent border-none focus:outline-none focus:ring-1 focus:ring-accent/30 rounded p-1 print:p-0 text-center"
                    />
                  </div>
                  <div className="w-1/6">
                    <input 
                      type="number" 
                      value={item.rate}
                      onChange={(e) => handleItemChange(item.id, 'rate', parseFloat(e.target.value))}
                      className="w-full bg-transparent border-none focus:outline-none focus:ring-1 focus:ring-accent/30 rounded p-1 print:p-0 text-right"
                    />
                  </div>
                  <div className="w-1/6 text-right font-medium text-gray-800 whitespace-nowrap">
                    {((item.quantity || 0) * (item.rate || 0)).toFixed(2)} {invoice.currency}
                  </div>
                  
                  {/* Bouton supprimer (caché à l'impression) */}
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="ml-2 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity print:hidden absolute -right-6"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
              
              {/* Bouton ajouter (caché à l'impression) */}
              <button 
                onClick={addItem}
                className="mt-4 text-xs font-medium text-accent hover:text-accent/80 flex items-center gap-1 print:hidden"
              >
                <Plus size={14} /> Ajouter une ligne
              </button>
            </div>

            {/* Totaux */}
            <div className="flex justify-end mb-24">
              <div className="w-1/2 max-w-sm">
                <div className="flex justify-between py-2 text-sm text-gray-600">
                  <span>Sous-total HT</span>
                  <span>{calculateSubtotal().toFixed(2)} {invoice.currency}</span>
                </div>
                {invoice.taxRate > 0 && (
                  <div className="flex justify-between py-2 text-sm text-gray-600">
                    <span>TVA ({invoice.taxRate}%)</span>
                    <span>{(calculateSubtotal() * (invoice.taxRate / 100)).toFixed(2)} {invoice.currency}</span>
                  </div>
                )}
                <div className="flex justify-between py-4 mt-2 border-t-2 border-gray-900 text-lg font-bold text-gray-900">
                  <span>Total {invoice.taxRate > 0 ? 'TTC' : 'HT'}</span>
                  <span>{calculateTotal().toFixed(2)} {invoice.currency}</span>
                </div>
              </div>
            </div>

            {/* Footer de la facture */}
            <div className="absolute bottom-12 left-12 right-12 border-t border-gray-100 pt-8">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Informations de paiement & Mentions légales</h4>
              <p className="text-xs text-gray-500 whitespace-pre-line leading-relaxed max-w-2xl">
                {invoice.notes}
              </p>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
}
