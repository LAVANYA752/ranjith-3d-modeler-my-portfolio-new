import { Link } from "react-router-dom";
import { GalleryGrid } from "@/components/GalleryGrid";
import { getCategoryPreview } from "@/data/galleryData";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const categories = [
  { name: "Interior", slug: "interior", description: "Residential & commercial interior visualizations" },
  { name: "Exterior", slug: "exterior", description: "Architectural exterior renders & facades" },
  { name: "Beauty Shots", slug: "beauty-shots", description: "Cinematic showcase renders" },
  { name: "Level Design", slug: "level-design", description: "Game environments & world building" },
];

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-20 text-center animate-fade-in">
        <h1 className="text-3xl font-bold mb-4 tracking-tight">
          Ranjith Kumar
        </h1>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-gradient-to-r from-primary to-amber-600 bg-clip-text text-transparent">
          3D Visualizer & Environment Artist
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Crafting immersive 3D environments and photorealistic visualizations that bring imagination to life
        </p>
      </section>
      

      {/* Category Sections */}
      {categories.map((category, index) => {
        const previewImages = getCategoryPreview(category.slug, 3);
        
        return (
          <section 
            key={category.slug} 
            className="mb-20 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between mb-8 gap-1">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">
                  {category.name}
                </h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
              <Button 
                asChild
                variant="outline"
                className="group hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              >
                <Link to={`/category/${category.slug}`}>
                  View All
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <GalleryGrid images={previewImages} layout="grid" />
          </section>
        );
      })}
    </div>
  );
};

export default Home;