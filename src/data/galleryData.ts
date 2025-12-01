// Portfolio gallery data structure
export interface GalleryImage {
  src: string;
  alt: string;
  category: "interior" | "exterior" | "beauty-shots" | "level-design";
}

// Sample data - replace these URLs with your actual project images
export const galleryImages: GalleryImage[] = [
  // Interior images
  { src: "/assets/interior/interior-img1.jpg", alt: "Modern Interior Design 1", category: "interior" },
  { src: "/assets/interior/interior-img2.jpg", alt: "Modern Interior Design 2", category: "interior" },
  { src: "/assets/interior/interior-img3.jpg", alt: "Contemporary Interior 3", category: "interior" },
  { src: "/assets/interior/interior-img4.jpg", alt: "Luxury Interior 4", category: "interior" },
  { src: "/assets/interior/interior-img5.jpg", alt: "Minimal Interior 5", category: "interior" },
  { src: "/assets/interior/interior-img6.jpg", alt: "Elegant Interior 6", category: "interior" },
  
  // Exterior images
  { src: "/assets/exterior/interior-img1.jpg", alt: "Modern Architecture Exterior 1", category: "exterior" },
  { src: "/assets/exterior/interior-img2.jpg", alt: "Contemporary Building 2", category: "exterior" },
  { src: "/assets/exterior/interior-img3.jpg", alt: "Architectural Exterior 3", category: "exterior" },
  { src: "/assets/exterior/interior-img4.jpg", alt: "Urban Exterior 4", category: "exterior" },
  { src: "/assets/exterior/interior-img5.jpg", alt: "Building Facade 5", category: "exterior" },
  { src: "/assets/exterior/interior-img6.jpg", alt: "Modern Exterior 6", category: "exterior" },
  
  // Beauty Shots
  { src: "/assets/beauty/interior-img1.jpg", alt: "Modern Architecture Exterior 1", category: "beauty-shots" },
  { src: "/assets/beauty/interior-img2.jpg", alt: "Contemporary Building 2", category: "beauty-shots" },
  { src: "/assets/beauty/interior-img3.jpg", alt: "Architectural Exterior 3", category: "beauty-shots" },
  { src: "/assets/beauty/interior-img4.jpg", alt: "Urban Exterior 4", category: "beauty-shots" },
  { src: "/assets/beauty/interior-img5.jpg", alt: "Building Facade 5", category: "beauty-shots" },
  { src: "/assets/beauty/interior-img6.jpg", alt: "Modern Exterior 6", category: "beauty-shots" },
  
  // Level Design
{ src: "/assets/beauty/interior-img1.jpg", alt: "Modern Architecture Exterior 1", category: "level-design" },
  { src: "/assets/beauty/interior-img2.jpg", alt: "Contemporary Building 2", category: "level-design" },
  { src: "/assets/beauty/interior-img3.jpg", alt: "Architectural Exterior 3", category: "level-design" },
  { src: "/assets/beauty/interior-img4.jpg", alt: "Urban Exterior 4", category: "level-design" },
  { src: "/assets/beauty/interior-img5.jpg", alt: "Building Facade 5", category: "level-design" },
  { src: "/assets/beauty/interior-img6.jpg", alt: "Modern Exterior 6", category: "level-design" },
];

export const getCategoryImages = (category: string) => {
  return galleryImages.filter(img => img.category === category);
};

export const getCategoryPreview = (category: string, limit: number = 5) => {
  return getCategoryImages(category).slice(0, limit);
};