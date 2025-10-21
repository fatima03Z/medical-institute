// components/Footer.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0D3C54] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        
        {/* Logo & Contact Button */}
        <div className="flex flex-col items-start gap-4">
          <Image
            src="/images/Education.jpg"
            alt="London Medical Academy"
            width={180}
            height={80}
            className="object-contain"
            priority
          />
          <Link
            href="/contact"
            className="mt-2 px-4 py-2 bg-[#25B0F0] text-white text-sm font-semibold rounded hover:bg-[#1999d4] transition"
          >
            CONTACT US
          </Link>
        </div>

        {/* Contact Details */}
        <div className="text-sm flex flex-col gap-3">
          <div className="flex items-start gap-2">
            <Phone className="w-4 h-4 mt-1 text-gray-300" />
            <div>
              <p className="text-gray-300">Need help?</p>
              <p className="text-lg font-semibold text-white">(000) 111–1100</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Mail className="w-4 h-4 mt-1 text-gray-300" />
            <p className="text-gray-300">
              Address: Training Venue : 344–354 Gray’s Inn Road 
            </p>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gray-300" />
            <Link href="/directions" className="text-white hover:underline">
              Get Directions
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          {[
            ['Home', '/'],
            ['About', '/about'],
            ['Courses', '/courses'],
            ['Location', '/location'],
            ['Jobs', '/jobs'],
            ['Consulting', '/consulting'],
            ['Blogs', '/blogs'],
            ['Team staff', '/team'],
            ['Board of advisers', '/board'],
            ['Academy service', '/services'],
            ['External training Wala', '/external-training'],
            ['Cooperate service Wala', '/cooperate-service'],
            ['Terms of use', '/terms'],
            ['Privacy policy', '/privacy'],
            ['Work area', '/work-area'],
          ].map(([label, href], i) => (
            <Link
              key={i}
              href={href}
              className="text-gray-300 hover:text-white transition"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
