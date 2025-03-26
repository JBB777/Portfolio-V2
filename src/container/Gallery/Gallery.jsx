import Project from '../../components/Project/Project';
import projects from '../../datas/projects.json';
import './Gallery.scss';

function Gallery() {
  return (
    <section className="gallery" id="projets">
      <h3>Projets</h3>
      {projects.map((project) => {
        return (
          <Project
            key={project.id}
            title={project.title}
            img={project.cover}
            txtAlt={project.alt}
            technos={project.tags}
            description={project.description}
            link={project.demo}
          />
        );
      })}
    </section>
  );
}

export default Gallery;
