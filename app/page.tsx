'use client';

import { Mail, Twitter, Github, Linkedin, ExternalLink, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Achievements from '@/components/Achievements';
import Work from '@/components/Works';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import WordMagnifier from '@/components/WordMagnifier';
import ThemeShutter from '@/components/ThemeShutter';

export default function Home() {
  return (
    <main className="min-h-screen text-foreground cursor-none">
      <ThemeShutter />
      <CustomCursor />
      {/* <WordMagnifier /> */}
      <Header />
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Hero />
        <Work />
        <Projects />
        <Skills />
        <Services />
        <Achievements />
        <Footer />
      </div>
    </main>
  );
}
