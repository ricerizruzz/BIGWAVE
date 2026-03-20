import React from 'react';
export default function Specialists() {
    return (
        <div className="relative h-96 bg-cover bg-center flex items-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&h=600&fit=crop")'}}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative max-w-7xl mx-auto px-4 w-full">
                <h2 className="text-4xl font-bold text-white mb-8">Especialistas em redes rádio e telecomunicações</h2>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded font-medium">Conheça os Nossos Serviços</button>
                <p className="text-white text-lg mt-8">Com foco no rigor técnico, fiabilidade operacional e soluções ajustadas a cada contexto.</p>
            </div>
        </div>
    );
}