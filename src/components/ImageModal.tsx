import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export const ImageModal = ({ isOpen, onClose, imageSrc, imageAlt }: ImageModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-0 bg-transparent overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-w-full max-h-[95vh] object-contain animate-scale-in"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};