import { BrowserRouter as Router } from 'react-router';
import './index.css';
import Profil from './container/Profil/Profil';
import Gallery from './container/Gallery/Gallery';
import About from './components/About/About';

function App() {
  return (
    <>
      <Router>
        <main>
          <Profil />
          <div>
            <About />
            <Gallery />
          </div>
        </main>
      </Router>
    </>
  );
}

export default App;
