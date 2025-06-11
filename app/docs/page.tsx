export default function Docs() {
  return (
    <div className="min-h-screen bg-neutral-900 relative overflow-hidden">
      {/* Artistic background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 right-20 w-36 h-36 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-16 w-28 h-28 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 left-1/2 w-32 h-32 bg-green-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-orange-500 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.8s'}}></div>
      </div>

      {/* Geometric shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-1/4 left-1/6 w-16 h-16 border-2 border-blue-400 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/4 right-1/6 w-12 h-12 border-2 border-purple-400 rotate-12 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
        <div className="absolute top-3/4 left-1/3 w-8 h-8 border border-green-400 rounded-full animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6">
            Documentation
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Everything you need to build with DocumentDB - from getting started guides to deep architectural insights
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Documentation Grid - Updated to 2x2 layout with 25% larger blocks */}
        <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">

          {/* Getting Started */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            <div className="relative bg-neutral-800/80 backdrop-blur-sm rounded-lg border border-neutral-700/50 hover:border-blue-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105 overflow-hidden h-40">
              <div className="p-4 h-full flex flex-col items-center justify-center text-center">
                <div className="w-10 h-10 bg-neutral-700/60 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3 border border-neutral-600/30">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors leading-tight">
                  Getting Started with DocumentDB
                </h2>
              </div>
            </div>
          </div>

          {/* API Reference */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            <div className="relative bg-neutral-800/80 backdrop-blur-sm rounded-lg border border-neutral-700/50 hover:border-blue-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105 overflow-hidden h-40">
              <div className="p-4 h-full flex flex-col items-center justify-center text-center">
                <div className="w-10 h-10 bg-neutral-700/60 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3 border border-neutral-600/30">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h2 className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors leading-tight">
                  API Reference Docs
                </h2>
              </div>
            </div>
          </div>

          {/* PostgreSQL Extension API */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            <div className="relative bg-neutral-800/80 backdrop-blur-sm rounded-lg border border-neutral-700/50 hover:border-blue-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105 overflow-hidden h-40">
              <div className="p-4 h-full flex flex-col items-center justify-center text-center">
                <div className="w-10 h-10 bg-neutral-700/60 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3 border border-neutral-600/30">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h2 className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors leading-tight">
                  Postgres Extension API Docs
                </h2>
              </div>
            </div>
          </div>

          {/* Architecture */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            <div className="relative bg-neutral-800/80 backdrop-blur-sm rounded-lg border border-neutral-700/50 hover:border-blue-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105 overflow-hidden h-40">
              <div className="p-4 h-full flex flex-col items-center justify-center text-center">
                <div className="w-10 h-10 bg-neutral-700/60 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3 border border-neutral-600/30">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h2 className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors leading-tight">
                  Architecture under the hood
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}