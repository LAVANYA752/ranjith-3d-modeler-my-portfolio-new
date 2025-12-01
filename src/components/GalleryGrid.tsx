import { useState } from "react";
import { ImageModal } from "./ImageModal";


interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  layout?: "masonry" | "grid";
}

export const GalleryGrid = ({ images, layout = "masonry" }: GalleryGridProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  if (layout === "masonry") {
    return (
      <>
        <div className="masonry-grid animate-fade-in">
          {images.map((image, index) => (
            <div
              key={index}
              className="masonry-grid-item cursor-pointer group overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(image)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative overflow-hidden rounded-lg bg-card">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto image-hover-effect"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">View Full Size</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedImage && (
          <ImageModal
            isOpen={!!selectedImage}
            onClose={() => setSelectedImage(null)}
            imageSrc={selectedImage.src}
            imageAlt={selectedImage.alt}
          />
        )}
      </>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer group overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(image)}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="relative overflow-hidden rounded-lg bg-card aspect-[4/3]">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover image-hover-effect"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium">View Full Size</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
        />
      )}
    </>
  );
};