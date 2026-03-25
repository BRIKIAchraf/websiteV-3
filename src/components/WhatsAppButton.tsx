import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '393922437748';
  const message = 'Bonjour, je serais intéressé par vos services de développement web et design.';

  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\s/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-8 right-8 z-40">
      {isOpen && (
        <div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-xl p-4 min-w-64 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="mb-4">
            <h3 className="font-bold text-on-surface mb-2">Besoin d'aide ?</h3>
            <p className="text-sm text-on-surface-variant mb-4">
              Contactez-moi directement via WhatsApp pour discuter de votre projet.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-500 text-white rounded-lg py-2 px-4 font-medium text-center hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-all shadow-lg hover:shadow-xl hover:scale-110 active:scale-95"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
}
