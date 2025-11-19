import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Interior",
    image: "https://ranjith-render-realm.lovable.app/assets/foyer-C5WH04FO.jpg",
    category: "Architectural Visualization"
  },
  {
    title: "Exterior",
    image: "https://ranjith-render-realm.lovable.app/assets/exterior-SgGwaHbH.jpg",
    category: "Architectural Visualization"
  },
  {
    title: "Beauty Shots",
    image: "https://ranjith-render-realm.lovable.app/assets/beauty-C9Bbvatg.jpg",
    category: "Product Rendering"
  },
  {
    title: "Level Design",
    image: "https://ranjith-render-realm.lovable.app/assets/level-design-CLeXD2R6.jpg",
    category: "Game Environment"
  },
  {
    title: "Game Development",
    image: "https://ranjith-render-realm.lovable.app/assets/game-dev-DP1_eEoa.jpg",
    category: "Game Assets"
  }
];

const ProjectGallery = () => {
  return (
    <section className="px-4 py-12 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            category={project.category}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;
