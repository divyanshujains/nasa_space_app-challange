import { ArrowRight, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import abinnav from '../assets/Abhinav - Organiser.png'
import anand from '../assets/Anand - Media.png'
import avis from '../assets/Avis - Media.png'
import akshat from '../assets/Akshat - Graphic.png'
import ayush from '../assets/ayush - Graphic.png'
import chetna from '../assets/Chetna - Women in Command.png'
import div from '../assets/Divyanshu - WebDev.png'
import Lekansh from '../assets/Lekhansh-Co Lead.png'
import omendra from '../assets/Omendra - Organizer.png'
import revat from '../assets/Revat - Manager.png'
import Ritesh from '../assets/Ritesh - Organiser.png'
import sid from '../assets/Siddharth - Lead.png'


const projects = [
  {
    id: 1,
    title: "SaaS Landing Page",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Orbit Analytics Dashboard",
    description:
      "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

const galleryImages = [
  {
    id: 1,
    url: sid,
    alt: "Space Technology"
  },
  {
    id: 2,
    url: Lekansh,
    alt: "Earth from Space"
  },
  {
    id: 3,
    url: akshat,
    alt: "Coding Challenge"
  },
  {
    id: 4,
    url: ayush,
    alt: "Team Collaboration"
  },
  {
    id: 5,
    url: avis,
    alt: "Galaxy View"
  },
  {
    id: 6,
    url: chetna,
    alt: "Milky Way"
  },
  {
    id: 7,
    url: div,
    alt: "Stars and Space"
  },
  {
    id: 8,
    url: omendra,
    alt: "Hackathon Team"
  },
  {
    id: 9,
    url: revat,
    alt: "Rocket Launch"
  },
  {
    id: 10,
    url: Ritesh,
    alt: "Space Exploration"
  }
];

export const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);

  const slidesPerView = 4;
  const maxIndex = Math.max(0, galleryImages.length - slidesPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 3000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Gallery Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The NASA Space <span className="text-blue-600">Apps Community</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-400 mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our students loved the experience. They
consistently praised the exceptional organization, our
robust information system, and the quality of the
resources provided. They felt empowered, creative,
and truly engaged throughout the challenge. Seeing
them beaming with excitement at the closing ceremony
was a highlight.
Personally, I find this to be the type of educational
movement I am most passionate about. You can
absolutely count on our entire team of volunteers,
teachers, mentors, judges, and partners from Bhopal
to return for the 2025 event.” - Local Lead Siddharth
            </p>
          </div>

          {/* Swiper Container */}
          <div 
            className="relative overflow-hidden mb-8"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="flex transition-transform duration-500 ease-out gap-8"
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
              }}
            >
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="swiper-slide flex-shrink-0 rounded-lg overflow-hidden shadow-lg card-hover"
                  style={{ width: `calc(${100 / slidesPerView}% - 12px)` }}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-110 object-contain transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-10 opacity-90 hover:opacity-100"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-10 opacity-90 hover:opacity-100"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mb-8">
            {[...Array(maxIndex + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-blue-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

  

        {/* Responsive Styles */}
        <style jsx>{`
          @media (max-width: 1024px) {
            .swiper-slide {
              width: calc(50% - 8px) !important;
            }
          }
          @media (max-width: 640px) {
            .swiper-slide {
              width: calc(100% - 16px) !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};