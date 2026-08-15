import React, { useState, useRef, useEffect } from 'react';

const InteractiveTerminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    'Bienvenue dans le terminal de Nathan.',
    'Tapez "help" pour voir les commandes disponibles.',
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let output = `Commande inconnue : ${trimmed}. Tapez "help" pour de l'aide.`;

    switch (trimmed) {
      case 'help':
        output = 'Commandes : whoami, projects, contact, clear';
        break;
      case 'whoami':
        output = 'Nathan Chapuis, Étudiant en Data & Cybersécurité.';
        break;
      case 'projects':
        output = 'Consultez la section Projets ci-dessous ou sur mon GitHub.';
        break;
      case 'contact':
        output = 'Email : nathanchapuis15@gmail.com';
        break;
      case 'clear':
        setHistory([]);
        return;
    }

    setHistory((prev) => [...prev, `> ${cmd}`, output]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <div className="bg-gray-900 border border-green-500/30 rounded-lg p-4 font-mono text-sm text-green-500 h-64 overflow-y-auto shadow-xl">
      {history.map((line, i) => (
        <div key={i} className="mb-1">{line}</div>
      ))}
      <div className="flex items-center">
        <span className="mr-2">user@natdu15:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent border-none outline-none flex-1 text-white"
          autoFocus
        />
      </div>
      <div ref={bottomRef} />
    </div>
  );
};

export default InteractiveTerminal;
