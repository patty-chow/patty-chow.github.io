import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400 text-lg mb-3">
          Copyright DocumentDB a Series of LF Projects, LLC and its contributors
        </p>
        <p className="text-gray-400 text-base">
          For web site terms of use, trademark policy and other project policies please see{' '}
          <a
            href="https://lfprojects.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            https://lfprojects.org
          </a>
        </p>
      </div>
    </footer>
  );
} 