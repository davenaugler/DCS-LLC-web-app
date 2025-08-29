"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    });
  }, [formData]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Contact Us</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get in touch to discuss your next construction project
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
              <p className="mt-6 text-lg text-gray-600">
                We're here to help bring your construction vision to life. Contact us to discuss your project or ask any questions.
              </p>

              <div className="mt-12 space-y-8">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-4">
                      <Icon className="h-6 w-6 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <div className="mt-1">
                          {item.content.map((line, index) => (
                            <p key={index} className="text-gray-600">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <Label htmlFor="name">Name</Label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone</Label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                />
              </div>

              <div>
                <Label htmlFor="projectType">Project Type</Label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="">Select a project type</option>
                  <option value="commercial">Commercial Construction</option>
                  <option value="renovation">Renovation Services</option>
                  <option value="residential">Residential Construction</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="mt-2 flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}