"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("rahma@rahma-cc.org");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };
   
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const programs = [
    {
      title: "Special Needs Support",
      description: "Culturally competent support services tailored to individuals with developmental or physical disabilities.",
      icon: "🤝",
    },
    {
      title: "Family Resource Navigation",
      description: "Assisting families in navigating complex healthcare, education, and government assistance systems.",
      icon: "🗺️",
    },
    {
      title: "Inclusive Education",
      description: "Educational workshops and programming designed for individuals with special needs and their families.",
      icon: "📚",
    },
    {
      title: "Community Integration",
      description: "Social and recreational activities that promote inclusion, skill development, and social connections.",
      icon: "🌍",
    },
    {
      title: "Caregiver Support",
      description: "Mental health resources, support groups, and respite care referrals for families and caregivers.",
      icon: "❤️",
    },
    {
      title: "Advocacy & Referrals",
      description: "Connecting marginalized families with the essential resources and networks they need to thrive.",
      icon: "📢",
    },
  ];

  const galleryImages = [
    { src: "/Rahma Community/1.png", alt: "Community members engaging in activities" },
    { src: "/Rahma Community/IMG_5918.jpg", alt: "Educational workshop session" },
    { src: "/Rahma Community/IMG_5919.jpg", alt: "Inclusive social event" },
    { src: "/Rahma Community/IMG_5920.jpg", alt: "Family support gathering" },
    { src: "/Rahma Community/IMG_5921.jpg", alt: "Community integration activity" },
    { src: "/Rahma Community/IMG_5922.jpg", alt: "Special needs support session" },
    { src: "/Rahma Community/IMG_5925.png", alt: "Community outreach event" },
    { src: "/Rahma Community/IMG_5926.jpg", alt: "Special needs advocacy workshop" },
    { src: "/Rahma Community/IMG_5923.jpg", alt: "Inclusive community program" },
    { src: "/Rahma Community/IMG_5924.jpg", alt: "Social skills development group" },
    {src: "/Rahma Community/logo.png", alt: "Non profit logo" }
,
  ];

  return (
    <div className="flex flex-col min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-amber-200 selection:text-stone-900">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image 
              src="/Rahma Community/logo.png" 
              alt="Non profit logo" 
              width={40} 
              height={40} 
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
            />
            <span className="text-2xl font-bold tracking-tight text-blue-900">RAHMA</span>
            <span className="text-sm font-medium text-stone-500 uppercase tracking-widest hidden sm:block">Community Center</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">About</a>
            <a href="#programs" className="text-sm font-medium hover:text-blue-600 transition-colors">Programs</a>
            <a href="#gallery" className="text-sm font-medium hover:text-blue-600 transition-colors">Gallery</a>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="px-5 py-2.5 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-shadow shadow-sm hover:shadow-md"
            >
              Get Involved
            </button>
          </nav>
          <button 
            className="md:hidden p-2 text-stone-600 hover:bg-stone-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-stone-200 shadow-xl animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col p-4 gap-2">
              <a 
                href="#about" 
                className="p-4 text-lg font-semibold text-stone-800 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#programs" 
                className="p-4 text-lg font-semibold text-stone-800 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Programs
              </a>
              <a 
                href="#gallery" 
                className="p-4 text-lg font-semibold text-stone-800 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </a>
              <button 
                className="m-2 px-6 py-4 bg-blue-600 text-white rounded-2xl text-center font-bold hover:bg-blue-700 transition-all active:scale-95"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsContactModalOpen(true);
                }}
              >
                Get Involved
              </button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center overflow-hidden">
          <div data-aos="zoom-out" data-aos-duration="2000" className="absolute inset-0 z-0">
            <Image
              src="/Rahma Community/IMG_5918.jpg"
              alt="Rahma Community Center Hero"
              fill
              className="object-cover brightness-[0.4] scale-105"
              priority
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-3xl space-y-8">
              <div className="mb-6" data-aos="fade-down" data-aos-duration="1200">
                <Image 
                  src="/Rahma Community/logo.png" 
                  alt="Rahma Community Center Logo" 
                  width={120} 
                  height={120} 
                  className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-2xl"
                  priority
                />
              </div>
              <span data-aos="fade-right" data-aos-delay="300" className="inline-block px-4 py-1.5 bg-amber-500/90 text-amber-950 text-xs font-bold uppercase tracking-widest rounded-full">
                Special Needs & Inclusive Initiative
              </span>
              <h1 data-aos="fade-up" data-aos-delay="500" className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
                Empowering Families, <br />
                <span className="text-blue-400">Building Inclusion.</span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="700" className="text-lg md:text-xl text-stone-200 leading-relaxed max-w-2xl">
                We are committed to building a community where all individuals, regardless of ability or background, have the opportunity to thrive through culturally competent support and resources.
              </p>
              <div data-aos="fade-up" data-aos-delay="900" className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#programs" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-center transition-all shadow-lg shadow-blue-900/20 active:scale-95">
                  Explore Our Programs
                </a>
                <a href="#about" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/30 rounded-xl font-bold text-center transition-all active:scale-95">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About/Statement of Need */}
        <section id="about" className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6" data-aos="fade-right">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
                  Bridging the Gap for Underserved Communities
                </h2>
                <div className="w-20 h-1.5 bg-amber-500 rounded-full"></div>
                <p className="text-lg text-stone-600 leading-relaxed">
                  Many families in marginalized communities face significant barriers in accessing disability services, including language barriers, lack of awareness, and financial constraints.
                </p>
                <p className="text-lg text-stone-600 leading-relaxed">
                 Located in Roxbury, Rahma Community Center’s program serves as a <strong>trusted community hub</strong> connecting families with the resources, services, and support networks necessary to improve their quality of life.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="p-4 bg-stone-50 rounded-2xl border border-stone-100" data-aos="zoom-in" data-aos-delay="200">
                    <span className="block text-3xl font-bold text-blue-600">200+</span>
                    <span className="text-sm font-medium text-stone-500">Families Served Annually</span>
                  </div>
                  <div className="p-4 bg-stone-50 rounded-2xl border border-stone-100" data-aos="zoom-in" data-aos-delay="400">
                    <span className="block text-3xl font-bold text-blue-600">Multi</span>
                    <span className="text-sm font-medium text-stone-500">lingual Support Services</span>
                  </div>
                </div>
              </div>
              <div data-aos="fade-left" className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/Rahma Community/2.jpg"
                  alt="About Rahma Community"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section id="programs" className="py-24 bg-stone-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" data-aos="fade-up">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Our Impact</span>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900">Programs Designed for You</h2>
              <p className="text-stone-500 text-lg">We provide a comprehensive range of services designed to empower individuals with special needs and their caregivers.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, idx) => (
                <div key={idx} 
                  data-aos="fade-up" 
                  data-aos-delay={idx * 100}
                  className="group p-8 bg-white rounded-3xl border border-stone-200 hover:border-blue-200 transition-all hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-blue-50 text-3xl flex items-center justify-center rounded-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-blue-700 transition-colors">{program.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{program.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Gallery */}
        <section id="gallery" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-stone-900 mb-12" data-aos="fade-up">Our Community in Action</h2>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {galleryImages.map((img, idx) => (
                <div key={idx} 
                  data-aos="zoom-in" 
                  data-aos-delay={(idx % 6) * 100}
                  className="break-inside-avoid relative overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-blue-900 rounded-[3rem] overflow-hidden p-12 md:p-24 text-center text-white" data-aos="zoom-in-up">
              <div className="absolute inset-0 opacity-20">
                <Image
                  src="/Rahma Community/2.jpg"
                  alt="Call to action background"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                <h2 className="text-4xl md:text-6xl font-bold leading-tight">Ready to Make a Difference?</h2>
                <p className="text-xl text-blue-100">
                  Whether you are seeking support or looking to contribute, we welcome you to join our inclusive community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => setIsContactModalOpen(true)}
                    className="px-10 py-5 bg-amber-500 hover:bg-amber-600 text-amber-950 font-black rounded-2xl transition-all shadow-xl shadow-amber-950/20 text-center"
                  >
                    Get Support Now
                  </button>
                  <button 
                    onClick={() => setIsContactModalOpen(true)}
                    className="px-10 py-5 bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md font-bold rounded-2xl transition-all text-center"
                  >
                    Volunteer With Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2 space-y-6">
              <div className="flex items-center gap-2 text-white">
                <span className="text-2xl font-bold tracking-tight">RAHMA</span>
                <span className="text-xs font-medium uppercase tracking-[0.2em] opacity-60">Community Center</span>
              </div>
              <p className="max-w-sm leading-relaxed text-sm">
                A community-based nonprofit organization committed to supporting underserved families through educational programs, social services, and community engagement initiatives.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Navigation</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#programs" className="hover:text-blue-400 transition-colors">Our Programs</a></li>
                <li><a href="#gallery" className="hover:text-blue-400 transition-colors">Gallery</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Contact</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li className="flex items-start gap-3">
                  <span className="font-bold italic">Address:</span>
                  <span>259 Roxbury St, Roxbury, MA 02119</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold italic">Email:</span>
                  <a href="mailto:rahma@rahma-cc.org" className="hover:text-blue-400 transition-colors">rahma@rahma-cc.org</a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold italic">Phone:</span>
                  <span>(617) 888-5514</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-stone-800 flex flex-col md:row justify-between items-center gap-6 text-xs uppercase tracking-widest font-bold">
            <p>&copy; {new Date().getFullYear()} Rahma Community Center.</p>
            <p className="text-center">All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div 
            className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-blue-900">Contact Us</h3>
                <button 
                  onClick={() => setIsContactModalOpen(false)}
                  className="p-2 hover:bg-stone-100 rounded-full transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-stone-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-2xl space-y-2">
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">Email Address</p>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-lg font-medium text-stone-800 break-all">rahma@rahma-cc.org</span>
                    <button 
                      onClick={copyToClipboard}
                      className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                        copied 
                        ? "bg-green-500 text-white" 
                        : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                      }`}
                    >
                      {copied ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-stone-50 rounded-2xl space-y-2">
                  <p className="text-xs font-bold text-stone-500 uppercase tracking-wider">Phone Number</p>
                  <p className="text-lg font-medium text-stone-800">(617) 888-5514</p>
                </div>
              </div>

              <div className="pt-2">
                <a 
                  href="mailto:rahma@rahma-cc.org"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-200 active:scale-[0.98]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  Send Email Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
