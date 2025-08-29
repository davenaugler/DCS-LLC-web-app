import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&q=80"
            alt="Construction site"
            fill
            className="object-cover brightness-50"
            priority
            sizes="100vw"
            quality={85}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Building Your Vision, Creating Your Future
            </h1>
            <p className="mt-6 text-lg leading-8">
              With over 20 years of excellence in construction, we bring your dreams to life through innovative design and exceptional craftsmanship.
            </p>
            <div className="mt-10 flex gap-x-6">
              <Button 
                size="lg" 
                className="bg-primary text-white hover:bg-primary/90"
                asChild
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-black hover:bg-white/90 border-white" 
                asChild
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Our Services</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive construction solutions tailored to your needs
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: "Commercial Construction",
                description: "Modern commercial spaces designed for success.",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
              },
              {
                title: "Renovation Services",
                description: "Transforming existing spaces into modern masterpieces.",
                image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80",
              },
              {
                title: "Residential Construction",
                description: "Custom homes and renovations that bring your dreams to life.",
                image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80",
              },
            ].map((service, index) => (
              <div key={index} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="mt-3 text-gray-600">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Ready to Start Your Project?
            </h2>
            <p className="mt-6 text-lg leading-8">
              Let's discuss your vision and create something extraordinary together.
            </p>
            <div className="mt-10">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-black hover:bg-white/90 border-white"
                asChild
              >
                <Link href="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}