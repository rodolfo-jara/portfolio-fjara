import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
<div className="app-container">
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />
        {/* Aquí irán tus otras secciones como Projects, Stack, etc. */}
      </main>

      {/* Footer opcional más adelante */}
    </div>
  )
}

export default App