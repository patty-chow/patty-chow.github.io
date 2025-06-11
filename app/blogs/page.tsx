export default function Blogs() {
  return (
    <div className="min-h-screen bg-neutral-900 relative overflow-hidden">
      {/* Artistic background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-500 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-36 h-36 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-purple-400 rounded-full opacity-40 animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-green-400 rounded-full opacity-50 animate-bounce" style={{animationDelay: '2s', animationDuration: '2.5s'}}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6">
            Latest from our Blog
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Insights, updates, and deep dives into the world of document databases and open-source innovation
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

          {/* Featured Blog - Microsoft Open Source Announcement */}
          <div className="lg:col-span-2">
            <article className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-neutral-700/50 hover:border-blue-500/50 transition-all duration-500 group-hover:transform group-hover:scale-[1.02] overflow-hidden">

                {/* Featured badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    Featured
                  </span>
                </div>

                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                      </svg>
                    </div>
                    <div>
                      <span className="text-blue-400 text-sm font-medium">Microsoft Open Source Blog</span>
                      <p className="text-gray-500 text-xs">January 23, 2025</p>
                    </div>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    DocumentDB: Open-Source Announcement
                  </h2>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    We are excited to announce the official release of DocumentDB—an open-source document database platform and the engine powering the vCore-based Azure Cosmos DB for MongoDB, built on PostgreSQL. This marks a significant milestone in creating an interoperable, portable, and fully supported production-ready document data store.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium">Open Source</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-medium">PostgreSQL</span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">MIT License</span>
                  </div>

                  <a 
                    href="https://opensource.microsoft.com/blog/2025/01/23/documentdb-open-source-announcement/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  >
                    Read full article
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* Blog 2 - DocumentDB Gaining Momentum */}
          <article className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            <div className="relative bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-neutral-700/50 hover:border-purple-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105 overflow-hidden h-full">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-purple-400 text-sm font-medium">Azure Cosmos DB Blog</span>
                    <p className="text-gray-500 text-xs">Recent</p>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  DocumentDB is Gaining Momentum in the Open-Source Database World
                </h2>

                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  DocumentDB has quickly caught the attention of major tech publications and earned significant community engagement. In just under a week, our project earned 1000 GitHub stars, nearly 50 forks, and multiple pull requests.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs">Community</span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">Growth</span>
                </div>

                <a 
                  href="https://devblogs.microsoft.com/cosmosdb/documentdb-is-gaining-momentum-in-the-open-source-database-world/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium text-sm"
                >
                  Read more
                  <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </article>

          {/* Blog 3 - YugabyteDB MongoDB API */}
          <article className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            <div className="relative bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-neutral-700/50 hover:border-green-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105 overflow-hidden h-full">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-green-400 text-sm font-medium">YugabyteDB Blog</span>
                    <p className="text-gray-500 text-xs">Partner Content</p>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
                  MongoDB API in YugabyteDB
                </h2>

                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  Learn how YugabyteDB now offers a MongoDB-compatible API with the support of the DocumentDB PostgreSQL extension, providing developers with an open source alternative for MongoDB workloads.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">MongoDB API</span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">Distributed</span>
                </div>

                <a 
                  href="https://www.yugabyte.com/blog/mongodb-api-in-yugabytedb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors font-medium text-sm"
                >
                  Read more
                  <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-8 bg-gradient-to-r from-neutral-800/80 to-neutral-700/80 backdrop-blur-sm rounded-2xl border border-neutral-600/50">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-400 mb-4">Follow our journey and get the latest updates on DocumentDB</p>
              <a 
                href="https://github.com/microsoft/documentdb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                Follow on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
