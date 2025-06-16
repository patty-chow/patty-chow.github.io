import CommunitySection from './components/CommunitySection';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-neutral-800 via-neutral-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              DocumentDB
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              A powerful, scalable open-source document database built for modern applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://github.com/microsoft/documentdb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 transition-colors duration-200"
              >
                Get Started
              </a>
              <a 
                href="/docs"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-black transition-colors duration-200"
              >
                View Docs
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Mission Statement Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built on the principles of transparency, freedom, and standardization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-800 rounded-full shadow-lg p-8 hover:shadow-xl hover:bg-neutral-700 transition-all duration-300 text-center aspect-square flex flex-col justify-center border border-neutral-700">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Visibility</h3>
              <p className="text-gray-400">
                We want to ensure developers have full visibility into the underlying architecture of the engine
              </p>
            </div>

            <div className="bg-neutral-800 rounded-full shadow-lg p-8 hover:shadow-xl hover:bg-neutral-700 transition-all duration-300 text-center aspect-square flex flex-col justify-center border border-neutral-700">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Developer Freedom</h3>
              <p className="text-gray-400">
                With the MIT license, users have complete freedom to use the project as they please with no restrictions
              </p>
            </div>

            <div className="bg-neutral-800 rounded-full shadow-lg p-8 hover:shadow-xl hover:bg-neutral-700 transition-all duration-300 text-center aspect-square flex flex-col justify-center border border-neutral-700">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Open Standard</h3>
              <p className="text-gray-400">
                Eventually, we want to create an open standard for document databases for a universally accepted implementation standard
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* In the Press Section */}
      <section className="py-20 bg-neutral-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              In the Press
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              What the industry is saying about DocumentDB
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* InfoWorld Article */}
            <a 
              href="https://www.infoworld.com/article/3812630/microsofts-new-documentdb-rethinks-nosql-on-postgresql.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-neutral-800 rounded-lg shadow-lg p-4 hover:shadow-xl hover:bg-neutral-700 transition-all duration-300 border border-neutral-700 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-500/20 text-orange-400 mb-3">
                    InfoWorld
                  </span>
                  <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors line-clamp-3">
                    Microsoft&apos;s new DocumentDB rethinks NoSQL on PostgreSQL
                  </h3>
                  <p className="text-gray-400 text-xs mb-3 line-clamp-2">
                    Open-source alternative to MongoDB
                  </p>
                  <div className="flex items-center text-orange-400 group-hover:text-orange-300 transition-colors mt-auto">
                    <span className="text-xs font-medium">Read</span>
                    <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>

            {/* The Register Article */}
            <a 
              href="https://www.theregister.com/2025/01/27/microsoft_builds_open_source_document/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-neutral-800 rounded-lg shadow-lg p-4 hover:shadow-xl hover:bg-neutral-700 transition-all duration-300 border border-neutral-700 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-400 mb-3">
                    The Register
                  </span>
                  <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-red-400 transition-colors line-clamp-3">
                    Microsoft builds open source document database
                  </h3>
                  <p className="text-gray-400 text-xs mb-3 line-clamp-2">
                    PostgreSQL-powered platform
                  </p>
                  <div className="flex items-center text-red-400 group-hover:text-red-300 transition-colors mt-auto">
                    <span className="text-xs font-medium">Read</span>
                    <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>

            {/* Hacker News Discussion */}
            <a 
              href="https://news.ycombinator.com/item?id=42807210"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-neutral-800 rounded-lg shadow-lg p-4 hover:shadow-xl hover:bg-neutral-700 transition-all duration-300 border border-neutral-700 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4zm-5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                    </svg>
                  </div>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-500/20 text-orange-400 mb-3">
                    Hacker News
                  </span>
                  <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors line-clamp-3">
                    DocumentDB Open-Source Discussion
                  </h3>
                  <p className="text-gray-400 text-xs mb-3 line-clamp-2">
                    Community discussion
                  </p>
                  <div className="flex items-center text-orange-400 group-hover:text-orange-300 transition-colors mt-auto">
                    <span className="text-xs font-medium">Join</span>
                    <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>

            {/* Phoronix Article */}
            <a 
              href="https://www.phoronix.com/news/Microsoft-OpenSource-DocumentDB"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-neutral-800 rounded-lg shadow-lg p-4 hover:shadow-xl hover:bg-neutral-700 transition-all duration-300 border border-neutral-700 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                    </svg>
                  </div>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 mb-3">
                    Phoronix
                  </span>
                  <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-3">
                    Microsoft Announces Open-Source DocumentDB
                  </h3>
                  <p className="text-gray-400 text-xs mb-3 line-clamp-2">
                    NoSQL database on PostgreSQL
                  </p>
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors mt-auto">
                    <span className="text-xs font-medium">Read</span>
                    <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>

            {/* Business Wire Article */}
            <a 
              href="https://www.businesswire.com/news/home/20250520124276/en/YugabyteDB-Extends-Support-for-Document-Databases-With-Postgres-Extension-DocumentDB"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-neutral-800 rounded-lg shadow-lg p-4 hover:shadow-xl hover:bg-neutral-700 transition-all duration-300 border border-neutral-700 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 8V7l-3 2-3-2v1l3 2 3-2zM1 12v-1l3 2 3-2v1l-3 2-3-2zM21 16l-3 2-3-2v1l3 2 3-2v-1zM7 12l3 2 3-2v1l-3 2-3-2v-1z"/>
                    </svg>
                  </div>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-indigo-500/20 text-indigo-400 mb-3">
                    Business Wire
                  </span>
                  <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors line-clamp-3">
                    YugabyteDB Extends Support for DocumentDB
                  </h3>
                  <p className="text-gray-400 text-xs mb-3 line-clamp-2">
                    PostgreSQL extension integration
                  </p>
                  <div className="flex items-center text-indigo-400 group-hover:text-indigo-300 transition-colors mt-auto">
                    <span className="text-xs font-medium">Read</span>
                    <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Our Trusted Partners Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Artistic background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-green-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Collaborating with industry leaders to advance the document database ecosystem
            </p>
            <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Amazon DocumentDB */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative flex flex-col items-center justify-center p-8 bg-neutral-800/80 backdrop-blur-sm rounded-xl border border-neutral-700/50 hover:border-orange-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="w-20 h-20 flex items-center justify-center mb-4">
                    {/* TODO: Paste Amazon DocumentDB SVG logo here */}
                    <div className="w-16 h-16 flex items-center justify-center text-orange-400">
                    <Image src="/aws-logo.svg" alt="AWS Logo" width={64} height={64} className="w-16 h-16 object-contain" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm font-bold text-white group-hover:text-orange-300 transition-colors mb-1">Amazon</h3>
                    <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">DocumentDB</p>
                  </div>
                </div>
              </div>

              {/* YugabyteDB */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative flex flex-col items-center justify-center p-8 bg-neutral-800/80 backdrop-blur-sm rounded-xl border border-neutral-700/50 hover:border-purple-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="w-20 h-20 flex items-center justify-center mb-4">
                    <Image src="/yugabyte.svg" alt="YugabyteDB Logo" width={64} height={64} className="w-16 h-16 object-contain" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors mb-1">YugabyteDB</h3>
                    <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">Distributed SQL</p>
                  </div>
                </div>
              </div>

              {/* Microsoft Azure */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative flex flex-col items-center justify-center p-8 bg-neutral-800/80 backdrop-blur-sm rounded-xl border border-neutral-700/50 hover:border-blue-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="w-20 h-20 flex items-center justify-center mb-4">
                    {/* TODO: Paste Microsoft Azure SVG logo here */}
                    <div className="w-16 h-16 flex items-center justify-center text-blue-500">
                    <Image src="/azure-logo.svg" alt="Azure Logo" width={64} height={64} className="w-16 h-16 object-contain" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors mb-1">Microsoft</h3>
                    <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">Azure</p>
                  </div>
                </div>
              </div>
            </div>

          {/* Artistic connection lines */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <svg className="w-full h-full opacity-20" viewBox="0 0 800 400">
              <path d="M150 200 Q400 100 650 200" stroke="url(#gradient1)" strokeWidth="1" fill="none"/>
              <path d="M150 200 Q400 300 650 200" stroke="url(#gradient2)" strokeWidth="1" fill="none"/>
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0"/>
                  <stop offset="50%" stopColor="#8B5CF6" stopOpacity="1"/>
                  <stop offset="100%" stopColor="#EF4444" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0"/>
                  <stop offset="50%" stopColor="#F59E0B" stopOpacity="1"/>
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <CommunitySection />
    </div>
  )
}