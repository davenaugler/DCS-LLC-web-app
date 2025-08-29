import Image from "next/image";
import { CircleDot } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
  {
    title: "Luxury Residential Complex",
    category: "Residential",
    description: "A modern residential complex featuring premium amenities and sustainable design. This project showcases our commitment to creating luxurious living spaces that blend comfort with sophistication.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    year: "2023",
    highlights: [
      "AI-powered smart home automation throughout",
      "Net-zero energy consumption design",
      "Modular construction techniques for faster completion",
    ],
  },
  {
    title: "Downtown Business Center",
    category: "Commercial",
    description: "A state-of-the-art business center featuring modern office spaces, meeting rooms, and collaborative areas designed for the future of work.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    year: "2021",
    highlights: [
      "LEED Platinum certification achieved",
      "Integrated smart building systems",
      "Flexible workspace solutions",
    ],
  },
  {
    title: "Historic Building Renovation",
    category: "Renovation",
    description: "Careful restoration of a century-old building, preserving its historic character while modernizing its functionality for contemporary use.",
    image: "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&q=80",
    year: "2020",
    highlights: [
      "Historical facade preservation",
      "Modern infrastructure integration",
      "Seismic retrofitting",
    ],
  },
  {
    title: "Sustainable Community Development",
    category: "Residential",
    description: "A community-focused development featuring energy-efficient homes, shared spaces, and sustainable infrastructure.",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=80",
    year: "2018",
    highlights: [
      "Solar power integration",
      "Rainwater harvesting systems",
      "Community garden spaces",
    ],
  },
  {
    title: "Medical Center Complex",
    category: "Commercial",
    description: "A comprehensive medical facility designed to provide state-of-the-art healthcare services with emphasis on patient comfort and staff efficiency.",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80",
    year: "2016",
    highlights: [
      "Advanced medical equipment integration",
      "Specialized ventilation systems",
      "Healing garden implementation",
    ],
  },
  {
    title: "Mountain Resort Renovation",
    category: "Commercial",
    description: "Complete renovation of a mountain resort, enhancing guest experiences while preserving the natural environment.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80",
    year: "2014",
    highlights: [
      "Eco-friendly materials used",
      "Enhanced thermal efficiency",
      "Natural landscape integration",
    ],
  },
  {
    title: "Urban Mixed-Use Development",
    category: "Commercial",
    description: "A vibrant mixed-use development combining retail, office, and residential spaces in the heart of downtown.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80",
    year: "2013",
    highlights: [
      "Vertical integration of spaces",
      "Public plaza creation",
      "Green roof implementation",
    ],
  },
  {
    title: "Waterfront Residential Project",
    category: "Residential",
    description: "Luxury waterfront homes designed to maximize views while ensuring environmental protection and sustainability.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
    year: "2012",
    highlights: [
      "Shoreline preservation measures",
      "Storm-resistant construction",
      "Energy-efficient design",
    ],
  },
  {
    title: "Educational Campus Development",
    category: "Commercial",
    description: "A modern educational campus featuring innovative learning spaces and sustainable design principles.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80",
    year: "2010",
    highlights: [
      "Flexible learning spaces",
      "Sustainable materials used",
      "Natural lighting optimization",
    ],
  },
];

export default function Portfolio() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Our Portfolio</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Two decades of excellence in construction, showcasing our evolution and innovation
            </p>
          </div>
        </div>
      </section>

       {/* Projects Timeline */}
       <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div>
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`md:py-24 ${
                  index % 2 === 0 ? 'bg-white md:bg-gray-50' : 'bg-gray-50 md:bg-gray-50'
                }`}
              >
                <div className="py-12 md:py-0 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_2fr] gap-6 md:gap-8 items-start">
                    {/* Year and Highlights */}
                    <div className="space-y-4 md:space-y-6">
                      <div className="md:sticky md:top-24">
                        <span className="text-5xl md:text-7xl font-bold text-primary block mb-4 md:mb-8">
                          {project.year}
                        </span>
                        <div className="space-y-3">
                          {project.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-3 text-sm text-muted-foreground pl-2">
                              <CircleDot className="h-4 w-4 flex-shrink-0 text-primary mt-1" />
                              <span className="leading-relaxed">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="relative aspect-[4/3] md:h-[300px] overflow-hidden rounded-xl shadow-lg">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 30vw"
                        loading={index === 0 ? "eager" : "lazy"}
                        quality={80}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Project Details */}
                    <div className="space-y-4 md:space-y-6 md:pl-6">
                      <div className="space-y-2">
                        <span className="text-sm font-medium text-primary/80 uppercase tracking-wider">
                          {project.category}
                        </span>
                        <h3 className="text-2xl font-bold leading-tight">{project.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-12 md:py-24 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Ready to Start Your Project?
            </h2>
            <p className="mt-6 text-lg leading-8">
              Contact us today to discuss your construction needs.
            </p>
            <div className="mt-10">
              <Button
                size="lg"
                variant="outline"
                className="bg-background text-foreground hover:bg-background/90 border-background"
                asChild
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


//   {
//     title: "Luxury Residential Complex",
//     category: "Residential",
//     description: "A modern residential complex featuring premium amenities and sustainable design. This project showcases our commitment to creating luxurious living spaces that blend comfort with sophistication.",
//     image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
//     year: "2023",
//     highlights: [
//       "AI-powered smart home automation throughout",
//       "Net-zero energy consumption design",
//       "Modular construction techniques for faster completion",
//     ],
//   },
//   {
//     title: "Downtown Business Center",
//     category: "Commercial",
//     description: "A state-of-the-art business center featuring modern office spaces, meeting rooms, and collaborative areas designed for the future of work.",
//     image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
//     year: "2021",
//     highlights: [
//       "LEED Platinum certification achieved",
//       "Integrated smart building systems",
//       "Flexible workspace solutions",
//     ],
//   },
//   {
//     title: "Historic Building Renovation",
//     category: "Renovation",
//     description: "Careful restoration of a century-old building, preserving its historic character while modernizing its functionality for contemporary use.",
//     image: "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&q=80",
//     year: "2020",
//     highlights: [
//       "Historical facade preservation",
//       "Modern infrastructure integration",
//       "Seismic retrofitting",
//     ],
//   },
//   {
//     title: "Sustainable Community Development",
//     category: "Residential",
//     description: "A community-focused development featuring energy-efficient homes, shared spaces, and sustainable infrastructure.",
//     image: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=80",
//     year: "2018",
//     highlights: [
//       "Solar power integration",
//       "Rainwater harvesting systems",
//       "Community garden spaces",
//     ],
//   },
//   {
//     title: "Medical Center Complex",
//     category: "Commercial",
//     description: "A comprehensive medical facility designed to provide state-of-the-art healthcare services with emphasis on patient comfort and staff efficiency.",
//     image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80",
//     year: "2016",
//     highlights: [
//       "Advanced medical equipment integration",
//       "Specialized ventilation systems",
//       "Healing garden implementation",
//     ],
//   },
//   {
//     title: "Mountain Resort Renovation",
//     category: "Commercial",
//     description: "Complete renovation of a mountain resort, enhancing guest experiences while preserving the natural environment.",
//     image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80",
//     year: "2014",
//     highlights: [
//       "Eco-friendly materials used",
//       "Enhanced thermal efficiency",
//       "Natural landscape integration",
//     ],
//   },
//   {
//     title: "Urban Mixed-Use Development",
//     category: "Commercial",
//     description: "A vibrant mixed-use development combining retail, office, and residential spaces in the heart of downtown.",
//     image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80",
//     year: "2013",
//     highlights: [
//       "Vertical integration of spaces",
//       "Public plaza creation",
//       "Green roof implementation",
//     ],
//   },
//   {
//     title: "Waterfront Residential Project",
//     category: "Residential",
//     description: "Luxury waterfront homes designed to maximize views while ensuring environmental protection and sustainability.",
//     image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
//     year: "2012",
//     highlights: [
//       "Shoreline preservation measures",
//       "Storm-resistant construction",
//       "Energy-efficient design",
//     ],
//   },
//   {
//     title: "Educational Campus Development",
//     category: "Commercial",
//     description: "A modern educational campus featuring innovative learning spaces and sustainable design principles.",
//     image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80",
//     year: "2010",
//     highlights: [
//       "Flexible learning spaces",
//       "Sustainable materials used",
//       "Natural lighting optimization",
//     ],
//   },
