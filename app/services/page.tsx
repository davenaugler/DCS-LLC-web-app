import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "commercial",
    title: "Commercial Construction",
    description: "Creating functional and impressive commercial spaces for businesses.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    features: [
      "Office buildings",
      "Retail spaces",
      "Industrial facilities",
      "Warehouses",
    ],
  },
  {
    id: "renovation",
    title: "Renovation Services",
    description: "Transforming existing spaces into modern, functional environments.",
    image: "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?auto=format&fit=crop&q=80",
    features: [
      "Complete home renovations",
      "Commercial renovations",
      "Historic building restoration",
      "Structural upgrades",
    ],
  },
  {
    id: "residential",
    title: "Residential Construction",
    description: "Building dream homes that reflect your personality and meet your needs.",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80",
    features: [
      "Custom home building",
      "Home renovations",
      "Additions and extensions",
      "Kitchen and bathroom remodeling",
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Our Services</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive construction solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 gap-16 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="relative h-96 lg:h-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="text-3xl font-bold tracking-tight">{service.title}</h2>
                  <p className="mt-6 text-lg text-gray-600">{service.description}</p>
                  <ul className="mt-8 space-y-4">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10">
                    <Button
                      className="bg-white text-black hover:bg-white/90 border-white"
                      asChild
                    >
                      <Link href="/contact">Request Service</Link>
                    </Button>
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
              Contact us today to discuss your construction needs and get a free quote.
            </p>
            <div className="mt-10">
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
    </>
  );
}