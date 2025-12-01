import { useParams, Navigate } from "react-router-dom";
import { GalleryGrid } from "@/components/GalleryGrid";
import { getCategoryImages } from "@/data/galleryData";

const categoryInfo = {
  interior: {
    title: "Interior Design",
    description: "Photorealistic interior visualizations showcasing residential and commercial spaces with meticulous attention to lighting, materials, and atmosphere.",
  },
  exterior: {
    title: "Exterior Architecture",
    description: "Architectural exterior renders featuring modern facades, landscapes, and building designs that capture the essence of contemporary architecture.",
  },
  "beauty-shots": {
    title: "Beauty Shots",
    description: "Cinematic showcase renders highlighting the artistry and technical excellence of 3D visualization, perfect for portfolio and client presentations.",
  },
  "level-design": {
    title: "Level Design",
    description: "Game environment designs and world-building showcasing immersive 3D spaces crafted for interactive experiences and virtual worlds.",
  },
};

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  
  if (!category || !(category in categoryInfo)) {
    return <Navigate to="/" replace />;
  }

  const images = getCategoryImages(category);
  const info = categoryInfo[category as keyof typeof categoryInfo];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-amber-600 bg-clip-text text-transparent">
          {info.title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          {info.description}
        </p>
        <div className="mt-4 text-sm text-muted-foreground">
          {images.length} {images.length === 1 ? 'image' : 'images'}
        </div>
      </div>

      <GalleryGrid images={images} layout="masonry" />
    </div>
  );
};

export default CategoryPage;