import CommunitySection from './components/CommunitySection';

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
                    Microsoft's new DocumentDB rethinks NoSQL on PostgreSQL
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
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
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

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
              {/* Amazon DocumentDB */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative flex flex-col items-center justify-center p-8 bg-neutral-800/80 backdrop-blur-sm rounded-xl border border-neutral-700/50 hover:border-orange-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="w-20 h-20 flex items-center justify-center mb-4">
                    {/* Official AWS Logo */}
                    <svg className="w-16 h-10 text-orange-400 group-hover:text-orange-300 transition-colors" fill="currentColor" viewBox="0 0 304 182">
                      <path d="M86.4 66.4c0 3.7.4 6.7 1.1 8.9.8 2.3 1.8 4.6 3.2 6.8.5.8.7 1.6.7 2.3 0 1-.6 2-1.9 3l-6.3 4.2c-.9.6-1.8.9-2.6.9-1 0-2-.5-3-1.4-1.4-1.5-2.6-3.1-3.6-4.7-1-1.7-2-3.6-3.1-5.9-7.8 9.2-17.6 13.8-29.4 13.8-8.4 0-15.1-2.4-20-7.2s-7.4-11.2-7.4-19.2c0-8.5 3-15.4 9.1-20.6s14.2-7.8 24.5-7.8c3.4 0 6.9.3 10.6.8 3.7.5 7.5 1.3 11.5 2.2v-7.3c0-7.6-1.6-12.9-4.7-16-3.2-3.1-8.6-4.6-16.3-4.6-3.5 0-7.1.4-10.8 1.3s-7.3 2-10.8 3.5c-1.6.7-2.8 1.1-3.5 1.3s-1.2.3-1.6.3c-1.4 0-2.1-1-2.1-3.1v-4.9c0-1.6.2-2.8.7-3.5s1.4-1.4 2.8-2.1c3.5-1.8 7.7-3.3 12.6-4.5 4.9-1.3 10.1-1.9 15.6-1.9 11.9 0 20.6 2.7 26.2 8.1 5.5 5.4 8.3 13.6 8.3 24.6v32.4zm-40.6 15.2c3.3 0 6.7-.6 10.3-1.8s6.8-3.4 9.5-6.4c1.6-1.9 2.8-4 3.4-6.4s1-5.3 1-8.7v-4.2c-2.9-.7-6-1.3-9.2-1.7s-6.3-.6-9.4-.6c-6.7 0-11.6 1.3-14.9 4s-4.9 6.5-4.9 11.5c0 4.7 1.2 8.2 3.7 10.6 2.4 2.5 5.9 3.7 10.5 3.7zm80.3 10.8c-1.8 0-3-.3-3.8-1-.8-.6-1.5-2-2.1-4.1L96.6 27.9c-.6-2-.9-3.3-.9-4 0-1.6.8-2.5 2.4-2.5h9.8c1.9 0 3.2.3 3.9 1 .8.6 1.4 2 2 4.1l16.8 66.2 15.6-66.2c.5-2 1.1-3.4 1.9-4.1.8-.7 2.2-1 4.1-1h8c1.9 0 3.2.3 4.1 1 .8.6 1.5 2 1.9 4.1L181 87.5l17.3-66.2c.6-2 1.3-3.4 2-4.1.8-.7 2.1-1 3.9-1h9.3c1.6 0 2.5.8 2.5 2.5 0 .5-.1 1-.2 1.6s-.3 1.4-.7 2.5l-24.1 77.3c-.6 2-1.3 3.4-2.1 4.1-.8.7-2.1 1-3.8 1h-8.6c-1.9 0-3.2-.3-4.1-1s-1.5-2-1.9-4.1L144.4 50.8 129.3 91.2c-.5 2-1.1 3.4-1.9 4.1-.8.7-2.2 1-4.1 1h-8.6zm128.5 2.7c-5.2 0-10.4-.6-15.4-1.8s-8.9-2.5-11.5-4c-1.6-.9-2.7-1.9-3.1-2.8s-.6-1.9-.6-3v-5.1c0-2.1.8-3.1 2.3-3.1.6 0 1.2.1 1.8.3s1.5.6 2.5 1c3.4 1.5 7.1 2.7 11 3.5 4 .8 7.9 1.2 11.9 1.2 6.3 0 11.2-1.1 14.6-3.3s5.2-5.4 5.2-9.5c0-2.8-.9-5.1-2.7-7s-5.2-3.6-10.1-5.2l-14.5-4.5c-7.3-2.3-12.7-5.7-16-10.2s-5-9.7-5-15.4c0-4.4.9-8.3 2.6-11.6 1.8-3.4 4.2-6.2 7.3-8.4 3.1-2.3 6.8-4 11.1-5.2 4.3-1.2 9-1.7 14-1.7 2.1 0 4.3.1 6.6.4 2.3.2 4.5.6 6.7 1 2.1.4 4.1.9 6 1.5s3.5 1.2 4.6 1.9c1.4.8 2.4 1.6 3 2.5s.9 2.2.9 3.6v4.7c0 2.1-.8 3.2-2.3 3.2-.8 0-2.1-.4-3.8-1.2-5.7-2.6-12.1-3.9-19.2-3.9-5.7 0-10.2.9-13.3 2.8s-4.7 4.8-4.7 8.9c0 2.8 1 5.2 3 7.1s5.7 3.8 11 5.5l14.2 4.5c7.2 2.3 12.4 5.5 15.5 9.6s4.6 8.8 4.6 14c0 4.5-.9 8.5-2.6 12s-4.2 6.6-7.3 9.1c-3.1 2.5-6.9 4.5-11.4 5.8-4.5 1.4-9.2 2.1-14.3 2.1z"/>
                      <path d="M273.5 143.7c-32.9 24.3-80.7 37.2-121.8 37.2-57.6 0-109.5-21.3-148.7-56.7-3.1-2.8-.3-6.6 3.4-4.4 42.4 24.6 94.7 39.5 148.8 39.5 36.5 0 76.6-7.6 113.5-23.2 5.5-2.5 10.2 3.6 4.8 7.6z"/>
                      <path d="M287.2 128.1c-4.2-5.4-27.8-2.6-38.5-1.3-3.2.4-3.7-2.4-.8-4.5 18.8-13.2 49.7-9.4 53.3-5 3.6 4.5-1 35.4-18.6 50.2-2.7 2.3-5.3 1.1-4.1-1.9 4-9.9 12.9-32.2 8.7-37.5z"/>
                    </svg>
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm font-bold text-white group-hover:text-orange-300 transition-colors mb-1">Amazon</h3>
                    <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">DocumentDB</p>
                  </div>
                </div>
              </div>

              {/* YugabyteDB */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative flex flex-col items-center justify-center p-8 bg-neutral-800/80 backdrop-blur-sm rounded-xl border border-neutral-700/50 hover:border-blue-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="w-20 h-20 flex items-center justify-center mb-4">
                    {/* Official Yugabyte Logo - Text with distinctive styling */}
                    <svg className="w-16 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" fill="currentColor" viewBox="0 0 240 40">
                      <path d="M8 8L20 20L8 32V8Z" fill="currentColor"/>
                      <path d="M20 20L32 8V32L20 20Z" fill="currentColor" opacity="0.7"/>
                      <path d="M45 8v8l8 4-8 4v8l16-12L45 8z" fill="currentColor"/>
                      <path d="M75 8v24h4V20h8c6 0 10-4 10-10s-4-6-10-6H75zm4 4h8c2 0 4 1 4 3s-2 3-4 3h-8v-6z" fill="currentColor"/>
                      <path d="M110 8c-8 0-14 6-14 14s6 14 14 14c4 0 8-2 10-5l-3-2c-1 2-4 3-7 3-5 0-9-4-9-10s4-10 9-10c3 0 6 1 7 3l3-2c-2-3-6-5-10-5z" fill="currentColor"/>
                      <path d="M135 8v24h4V20h12v-4h-12v-4h14V8h-18z" fill="currentColor"/>
                      <path d="M165 8v24h4V20h8c6 0 10-4 10-10s-4-6-10-6h-12zm4 4h8c2 0 4 1 4 3s-2 3-4 3h-8v-6z" fill="currentColor"/>
                      <path d="M195 8v24h18v-4h-14v-6h12v-4h-12v-6h14V8h-18z" fill="currentColor"/>
                      <path d="M225 8v4h6v20h4V12h6V8h-16z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors mb-1">YugabyteDB</h3>
                    <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">Distributed SQL</p>
                  </div>
                </div>
              </div>


              {/* Neon */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative flex flex-col items-center justify-center p-8 bg-neutral-800/80 backdrop-blur-sm rounded-xl border border-neutral-700/50 hover:border-green-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="w-20 h-20 flex items-center justify-center mb-4">
                    {/* Official Neon Logo */}
                    <svg className="w-14 h-14 text-green-400 group-hover:text-green-300 transition-colors" fill="currentColor" viewBox="0 0 100 100">
                      <defs>
                        <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#00ff88"/>
                          <stop offset="100%" stopColor="#00d166"/>
                        </linearGradient>
                      </defs>
                      <path d="M20 20v60h8V35l24 45h8V20h-8v45L28 20h-8z" fill="url(#neonGradient)"/>
                      <circle cx="75" cy="25" r="4" fill="#00ff88">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
                      </circle>
                      <rect x="70" y="15" width="10" height="3" rx="1.5" fill="#00ff88">
                        <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite"/>
                      </rect>
                    </svg>
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm font-bold text-white group-hover:text-green-300 transition-colors mb-1">Neon</h3>
                    <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">Serverless Postgres</p>
                  </div>
                </div>
              </div>

              {/* Oracle */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative flex flex-col items-center justify-center p-8 bg-neutral-800/80 backdrop-blur-sm rounded-xl border border-neutral-700/50 hover:border-red-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="w-20 h-20 flex items-center justify-center mb-4">
                    {/* Oracle Logo - Text-based */}
                    <svg className="w-16 h-8 text-red-400 group-hover:text-red-300 transition-colors" fill="currentColor" viewBox="0 0 200 60">
                      <path d="M30 15C18 15 8 23 8 32.5S18 50 30 50s22-8 22-17.5S42 15 30 15zm0 28c-8 0-14-5-14-10.5S22 22 30 22s14 5 14 10.5S38 43 30 43z"/>
                      <path d="M70 15c-6 0-11 2-15 5v-4h-8v33h8V31c2-3 6-5 10-5 6 0 9 3 9 8v15h8V33c0-10-5-18-12-18z"/>
                      <path d="M105 15c-8 0-15 3-20 8l5 5c3-3 8-5 13-5 6 0 10 2 10 6v2c-3-1-7-2-11-2-9 0-16 4-16 12s7 12 16 12c4 0 8-1 11-3v2h8V30c0-9-7-15-16-15zm5 26c-2 2-5 3-8 3-4 0-7-2-7-5s3-5 7-5c3 0 6 1 8 2v5z"/>
                      <path d="M145 15c-10 0-18 8-18 17.5s8 17.5 18 17.5c6 0 11-3 14-7l-6-4c-2 2-5 3-8 3-6 0-10-4-10-9.5s4-9.5 10-9.5c3 0 6 1 8 3l6-4c-3-4-8-7-14-7z"/>
                      <path d="M175 15v34h8V15h-8z"/>
                      <path d="M192 35c0 8 6 14 14 14s14-6 14-14V15h-8v20c0 4-2 6-6 6s-6-2-6-6V15h-8v20z"/>
                    </svg>
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm font-bold text-white group-hover:text-red-300 transition-colors mb-1">Oracle</h3>
                    <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">Database</p>
                  </div>
                </div>
              </div>

            {/* Google Firestore */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-red-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative flex flex-col items-center justify-center p-8 bg-neutral-800/80 backdrop-blur-sm rounded-xl border border-neutral-700/50 hover:border-yellow-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                <div className="w-20 h-20 flex items-center justify-center mb-4">
                  {/* Google Firestore Logo - Google colors with document/fire theme */}
                  <svg className="w-14 h-14 text-yellow-400 group-hover:text-yellow-300 transition-colors" fill="none" viewBox="0 0 100 100">
                    <path d="M50 10L30 30v40l20 10 20-10V30L50 10z" stroke="currentColor" strokeWidth="3" fill="currentColor" opacity="0.2"/>
                    <path d="M30 30h40" stroke="#4285f4" strokeWidth="2"/>
                    <path d="M35 40h30" stroke="#ea4335" strokeWidth="2"/>
                    <path d="M35 50h25" stroke="#34a853" strokeWidth="2"/>
                    <path d="M35 60h20" stroke="#fbbc04" strokeWidth="2"/>
                    <circle cx="50" cy="25" r="3" fill="#ea4335"/>
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="text-sm font-bold text-white group-hover:text-yellow-300 transition-colors mb-1">Google</h3>
                  <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">Firestore</p>
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