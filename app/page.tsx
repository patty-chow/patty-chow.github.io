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
              {/* Microsoft */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative flex flex-col items-center justify-center p-8 bg-neutral-800/80 backdrop-blur-sm rounded-xl border border-neutral-700/50 hover:border-blue-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="w-20 h-20 flex items-center justify-center mb-4">
                    <svg className="w-16 h-16 text-blue-400 group-hover:text-blue-300 transition-colors" viewBox="0 0 23 23" fill="currentColor">
                      <path d="M0 0h11v11H0z"/>
                      <path d="M12 0h11v11H12z"/>
                      <path d="M0 12h11v11H0z"/>
                      <path d="M12 12h11v11H12z"/>
                    </svg>
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors mb-1">Microsoft</h3>
                    <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">Azure DocumentDB</p>
                  </div>
                </div>
              </div>

              {/* Amazon DocumentDB */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative flex flex-col items-center justify-center p-8 bg-neutral-800/80 backdrop-blur-sm rounded-xl border border-neutral-700/50 hover:border-orange-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="w-20 h-20 flex items-center justify-center mb-4">
                    <svg className="w-16 h-10 text-orange-400 group-hover:text-orange-300 transition-colors" viewBox="0 0 126 76" fill="currentColor">
                      <path d="M38.089 31.33c0 1.64.179 2.967.486 3.94.356 1.018.784 2.04 1.427 3.016.214.356.304.713.304 1.018 0 .446-.268.892-.839 1.338l-2.784 1.857c-.393.268-.785.393-1.16.393-.446 0-.892-.214-1.338-.624-.625-.66-1.16-1.374-1.606-2.085-.446-.75-.892-1.588-1.374-2.623-3.455 4.08-7.79 6.12-13.007 6.12-3.723 0-6.686-1.071-8.86-3.188-2.175-2.116-3.277-4.97-3.277-8.503 0-3.772 1.338-6.834 4.026-9.127 2.689-2.294 6.298-3.456 10.857-3.456 1.517 0 3.063.125 4.705.357 1.642.232 3.337.571 5.097.964v-3.218c0-3.366-.714-5.715-2.085-7.093-1.428-1.374-3.812-2.04-7.236-2.04-1.553 0-3.151.179-4.794.571-1.642.393-3.241.893-4.794 1.553-.714.304-1.249.5-1.553.571-.304.072-.535.143-.714.143-.625 0-.928-.446-.928-1.374v-2.175c0-.928.357-1.374 1.018-1.374.268 0 .535.054.803.143.268.089.66.268 1.106.446 1.517.66 3.151 1.196 4.884 1.553 1.767.357 3.491.535 5.276.535 2.796 0 4.973-.482 6.477-1.464 1.517-.982 2.3-2.39 2.3-4.205 0-1.249-.393-2.265-1.196-3.098-.803-.839-2.3-1.606-4.473-2.3l-6.441-2.004c-3.223-1.018-5.633-2.517-7.093-4.526-1.464-1.963-2.211-4.151-2.211-6.441 0-1.857.393-3.491 1.16-4.937.785-1.446 1.82-2.689 3.134-3.687 1.338-.982 2.85-1.731 4.616-2.211 1.767-.482 3.58-.714 5.454-.714.482 0 .982.018 1.517.054.535.036 1.053.107 1.571.179.5.072.982.143 1.464.232.482.089.928.179 1.338.304.446.179.803.357 1.071.535.268.179.482.393.66.66.179.268.268.589.268 1.018v2.085c0 .928-.357 1.41-1.018 1.41-.357 0-.928-.179-1.678-.535-2.532-1.16-5.365-1.731-8.503-1.731-2.532 0-4.509.411-5.883 1.249-1.374.821-2.085 2.122-2.085 3.955 0 1.249.446 2.3 1.338 3.134.892.839 2.517 1.678 4.884 2.444l6.298 1.999c3.187 1.018 5.49 2.444 6.869 4.259 1.374 1.82 2.04 3.901 2.04 6.191 0 1.999-.393 3.776-1.16 5.329-.785 1.553-1.857 2.921-3.241 4.026-1.374 1.106-3.063 1.963-5.061 2.552-2.032.607-4.169.91-6.352.91z"/>
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
                    <svg className="w-16 h-16 text-blue-400 group-hover:text-blue-300 transition-colors" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                      <path d="M20 50L50 20L80 50L50 80L20 50Z" strokeWidth="4"/>
                      <path d="M35 50L50 35L65 50L50 65L35 50Z" strokeWidth="4" fill="currentColor"/>
                      <path d="M20 50H80" strokeWidth="2"/>
                      <path d="M50 20V80" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors mb-1">YugabyteDB</h3>
                    <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">Partner</p>
                  </div>
                </div>
              </div>

              {/* Google Firestore */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-red-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative flex flex-col items-center justify-center p-8 bg-neutral-800/80 backdrop-blur-sm rounded-xl border border-neutral-700/50 hover:border-yellow-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="w-20 h-20 flex items-center justify-center mb-4">
                    <svg className="w-14 h-14" viewBox="0 0 100 100">
                      <path d="M50 10L30 30v40l20 10 20-10V30L50 10z" fill="#4285f4" opacity="0.2" stroke="#4285f4" strokeWidth="3"/>
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

              {/* Oracle */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative flex flex-col items-center justify-center p-8 bg-neutral-800/80 backdrop-blur-sm rounded-xl border border-neutral-700/50 hover:border-red-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="w-20 h-20 flex items-center justify-center mb-4">
                    <svg className="w-16 h-8 text-red-400 group-hover:text-red-300 transition-colors" viewBox="0 0 100 40">
                      <path d="M50 0C22.4 0 0 8.9 0 20s22.4 20 50 20 50-8.9 50-20S77.6 0 50 0zm0 30c-13.8 0-25-4.5-25-10s11.2-10 25-10 25 4.5 25 10-11.2 10-25 10z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm font-bold text-white group-hover:text-red-300 transition-colors mb-1">Oracle</h3>
                    <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">Database</p>
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