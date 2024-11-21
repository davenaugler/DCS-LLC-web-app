import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold">Dalrymple Construction</h2>
            <p className="mt-4 text-gray-400">
              Over 20 years of excellence in construction, delivering quality projects and building trust with our communities.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Our Services</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/services#commercial" className="text-gray-400 hover:text-white transition-colors">
                  Commercial Construction
                </Link>
              </li>
              <li>
                <Link href="/services#renovation" className="text-gray-400 hover:text-white transition-colors">
                  Renovation Services
                </Link>
              </li>
              <li>
                <Link href="/services#residential" className="text-gray-400 hover:text-white transition-colors">
                  Residential Construction
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact Us</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="h-5 w-5" />
                <p>123 Construction Ave<br />McCall, ID 83638</p>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="h-5 w-5" />
                <p>(208) 283-9165</p>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5" />
                <p>info@builddalrymple.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Dalrymple Construction Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}