'use client';

import { Mail, Twitter, Github, Linkedin, ExternalLink, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Achievements from '@/components/Achievements';
import Work from '@/components/Works';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import WordMagnifier from '@/components/WordMagnifier';

export default function Home() {
  return (
    <main className="min-h-screen text-white cursor-none" style={{ backgroundColor: 'oklch(14.1% 0.005 285.823)' }}>
      <CustomCursor />
      {/* <WordMagnifier /> */}
      <Header />
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Hero />
        <Work />
        <div className="w-full h-px border-t border-dotted border-gray-700 my-12"></div>
        <Skills />
        <div className="w-full h-px border-t border-dotted border-gray-700 my-12"></div>
        <Achievements />
        <div className="w-full h-px border-t border-dotted border-gray-700 my-12"></div>
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
