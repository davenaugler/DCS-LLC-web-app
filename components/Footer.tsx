import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const services = [
  { name: "Commercial Construction", href: "/services#commercial" },
  { name: "Renovation Services", href: "/services#renovation" },
  { name: "Residential Construction", href: "/services#residential" },
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Location",
    content: ["201 S. Commercial Ave", "New Meadows, ID 83654"],
  },
  {
    icon: Phone,
    title: "Phone",
    content: ["Joe Dalrymple: (208) 283-9165", "Kim Dalrymple: (208) 473-0895"],
  },
  {
    icon: Mail,
    title: "Email",
    content: ["info@dcsllcmccall.com"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Company Info - Takes more space */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-3">
            <h2 className="text-xl font-bold lg:text-2xl">Dalrymple Construction Services</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Over 20 years of excellence in construction, delivering quality projects and building trust with our communities.
            </p>
          </div>

          {/* Services - Smaller column */}
          <div className="space-y-4 lg:col-span-2 lg:col-start-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href} 
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links - Smaller column */}
          <div className="space-y-4 lg:col-span-2 lg:col-start-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Takes more space */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-3 lg:col-start-10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.title} className="flex items-start gap-3">
                    <Icon className="h-5 w-5 mt-0.5 text-gray-400 flex-shrink-0" />
                    <div className="space-y-1">
                      <p className="font-medium text-white text-sm">{item.title}</p>
                      {item.content.map((line, index) => (
                        <p key={index} className="text-gray-400 text-sm">
                          {line}
                        </p>
                      ))}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Dalrymple Construction Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}