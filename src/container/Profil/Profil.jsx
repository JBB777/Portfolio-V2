import './Profil.scss';
import Navbar from '../../components/Navbar/Navbar';
import Networks from '../../components/Networks/Networks';

function Profil() {
  return (
    <section className="profil">
      <div className="profil__head">
        <h1>Jean-Baptiste Besançon</h1>
        <h2>Développeur Front-end</h2>
        <p>
          Passionné par les technologies, toujours en quête d'améliorations,
          exigeant envers mon travail, je cherche à élargir mes compétences pour
          concevoir des solutions toujours plus performantes.
        </p>
      </div>
      <Navbar />
      <Networks />
    </section>
  );
}

export default Profil;
