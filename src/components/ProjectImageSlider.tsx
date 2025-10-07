import { useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ExternalLink, Play, Pause } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

interface ProjectImageSliderProps {
  projectTitle: string;
  images?: string[];
}

const ProjectImageSlider = ({ projectTitle, images = [] }: ProjectImageSliderProps) => {
  // Auto-play plugin with 3 second intervals
  const autoplayPlugin = Autoplay({ delay: 3000, stopOnInteraction: true });
  
  // Placeholder images for demo (you can replace with actual project images later)
  const placeholderImages = [
    {
      id: 1,
      title: "Main Interface",
      description: "Primary dashboard view"
    },
    {
      id: 2, 
      title: "Feature Overview",
      description: "Key functionality showcase"
    },
    {
      id: 3,
      title: "Mobile View",
      description: "Responsive design demo"
    }
  ];

  const displayImages = images.length > 0 ? images : placeholderImages;

  return (
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[autoplayPlugin]}
        className="w-full"
      >
        <CarouselContent>
          {displayImages.map((image, index) => (
            <CarouselItem key={typeof image === 'string' ? index : image.id}>
              <div className="aspect-video rounded-lg bg-muted/50 border border-muted-foreground/20 group-hover:border-primary/30 transition-smooth relative overflow-hidden">
                {typeof image === 'string' ? (
                  // Real image
                  <img
                    src={image}
                    alt={`${projectTitle} screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  // Placeholder content
                  <div className="text-center text-muted-foreground p-6 flex flex-col items-center justify-center h-full">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                      <ExternalLink className="w-8 h-8" />
                    </div>
                    <p className="text-sm font-medium">{image.title}</p>
                    <p className="text-xs mt-1">{image.description}</p>
                  </div>
                )}
                
                {/* Auto-play indicator */}
                <div className="absolute bottom-3 left-3 flex items-center gap-2 px-2 py-1 rounded-md bg-background/80 backdrop-blur-sm text-xs">
                  <Play className="w-3 h-3 animate-pulse" />
                  <span>Auto</span>
                </div>
                
                {/* Slide indicator */}
                <div className="absolute bottom-3 right-3 px-2 py-1 rounded-md bg-background/80 backdrop-blur-sm text-xs">
                  {index + 1} / {displayImages.length}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Auto-play status indicator */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-md bg-background/80 backdrop-blur-sm text-xs">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span>Live</span>
        </div>
      </Carousel>
    </div>
  );
};

export default ProjectImageSlider;