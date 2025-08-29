import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Our Story</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Two decades of excellence in construction, building trust and delivering quality
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="relative h-96 lg:h-full">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
                alt="Company history"
                fill
                className="rounded-lg object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                quality={80}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Our Journey</h2>
              <p className="mt-6 text-lg text-gray-600">
                Founded in 2000, Dalrymple Construction began with a simple mission: to deliver exceptional construction services with integrity and innovation. Over the past two decades, we've grown from a small local contractor to one of the region's most trusted construction companies.
              </p>
              <p className="mt-6 text-lg text-gray-600">
                Our journey has been marked by countless successful projects, lasting client relationships, and a commitment to excellence that continues to drive us forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Our Values</h2>
            <p className="mt-6 text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: "Quality",
                description: "We never compromise on the quality of our work, using only the finest materials and latest techniques.",
              },
              {
                title: "Integrity",
                description: "Honesty and transparency are at the core of every project we undertake.",
              },
              {
                title: "Innovation",
                description: "We constantly evolve, embracing new technologies and methods to deliver better results.",
              },
            ].map((value, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="h-6 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                </div>
                <p className="mt-4 text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Our Leadership Team</h2>
            <p className="mt-6 text-lg text-gray-600">
              Meet the experts behind our success
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-12 sm:mt-20 lg:max-w-none lg:grid-cols-2">
            {[
              {
                name: "Joe Dalrymple",
                role: "Owner/Operator",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
              },
              {
                name: "Kim Dalrymple",
                role: "Chief Operations Officer",
                image: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?auto=format&fit=crop&q=80",
              },
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative h-64 w-64 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="256px"
                    loading="lazy"
                    quality={80}
                  />
                </div>
                <h3 className="mt-6 text-2xl font-semibold">{member.name}</h3>
                <p className="text-lg text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}