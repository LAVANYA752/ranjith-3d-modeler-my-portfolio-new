import { Card } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  image: string;
  category?: string;
}

const ProjectCard = ({ title, image, category }: ProjectCardProps) => {
  return (
    <Card className="relative overflow-hidden bg-card border-border card-hover cursor-pointer group">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-6 w-full">
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          {category && (
            <p className="text-sm text-primary">{category}</p>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
