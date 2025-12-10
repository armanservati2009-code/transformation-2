import React, { useState } from 'react';
import { QrCode } from 'lucide-react';
import QRConfigurator from './components/QRConfigurator';
import QRCodeCanvas from './components/QRCodeCanvas';
import ChatBot from './components/ChatBot';
import { QRConfig, QRType } from './types';

const App: React.FC = () => {
  const [config, setConfig] = useState<QRConfig>({
    type: QRType.URL,
    value: 'https://example.com',
    fgColor: '#000000',
    bgColor: '#ffffff',
    level: 'M',
    dotType: 'square',
    cornerSquareType: 'square',
    cornerDotType: 'square',
    logoUrl: ''
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-md">
              <QrCode size={24} />
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">GenQR <span className="text-indigo-600 font-light">Studio</span></h1>
          </div>
          <div className="text-sm font-medium text-slate-500 hidden sm:block">
            AI-Powered Generator
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Configurator */}
          <div className="lg:col-span-8 space-y-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-2">
                Create your QR Code
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl">
                Choose a type, customize the style, and generate high-quality QR codes in seconds. Ask our AI for help with content!
              </p>
            </div>
            
            <QRConfigurator onUpdate={setConfig} />
          </div>

          {/* Right Column: Preview (Sticky) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="space-y-4">
               <div className="uppercase tracking-wide text-xs font-bold text-slate-500 mb-1 ml-1">Live Preview</div>
               <QRCodeCanvas config={config} />
               
               <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4">
                  <h4 className="text-indigo-900 font-semibold mb-1 text-sm">Pro Tip</h4>
                  <p className="text-indigo-800 text-xs leading-relaxed">
                    Make sure your foreground color contrasts well with the background. Dark on light is best for scanner compatibility.
                  </p>
               </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-8">
        <div className="max-w-5xl mx-auto px-4 text-center text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} GenQR Studio. Powered by Gemini.
        </div>
      </footer>

      {/* AI Chatbot Overlay */}
      <ChatBot />
    </div>
  );
};

export default App;