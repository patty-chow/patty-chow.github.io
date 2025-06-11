"use client";
import { useState } from 'react';

export default function Docs() {
  const [currentPage, setCurrentPage] = useState('main');
  const [selectedOperator, setSelectedOperator] = useState('Accumulators');

  const operatorCategories = [
    'Accumulators',
    'Aggregation', 
    'Arithmetic Expressions',
    'Array Expressions',
    'Array Query',
    'Array Update',
    'Bitwise Operators',
    'Bitwise Query',
    'Bitwise Update',
    'Comparison Query',
    'Conditional Expressions',
    'Date Expressions',
    'Data Size',
    'Evaluation Query',
    'Geospatial',
    'Logical Query',
    'Miscellaneous',
    'Object Expressions',
    'Projection',
    'Variable Expression'
  ];

  if (currentPage === 'api-reference') {
    return (
      <div className="min-h-screen bg-neutral-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-16 right-20 w-36 h-36 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-16 w-28 h-28 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="relative flex min-h-screen">
          {/* Left Sidebar */}
          <div className="w-80 bg-neutral-800/50 backdrop-blur-sm border-r border-neutral-700/50 flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-neutral-700/50">
              <button 
                onClick={() => setCurrentPage('main')}
                className="text-blue-400 hover:text-blue-300 text-sm mb-4 flex items-center transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Documentation
              </button>
              <h1 className="text-2xl font-bold text-white">Operator Docs</h1>
            </div>

            {/* Menu Items */}
            <div className="flex-1 p-4 overflow-y-auto">
              <nav className="space-y-1">
                {operatorCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedOperator(category)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-200 ${
                      selectedOperator === category
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                        : 'text-gray-300 hover:text-white hover:bg-neutral-700/50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8">
            <div className="max-w-4xl">
              <div className="mb-8">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4">
                  {selectedOperator}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full mb-6"></div>
                <p className="text-gray-400 text-lg">
                  Comprehensive documentation for {selectedOperator.toLowerCase()} operators and their usage patterns.
                </p>
              </div>

              {/* Content based on selected operator */}
              {selectedOperator === 'Accumulators' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Accumulator Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$bottom',
                      '$bottomN',
                      '$first',
                      '$firstN',
                      '$last',
                      '$lastN',
                      '$top',
                      '$topN'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                </div>
              ) : selectedOperator === 'Aggregation' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Aggregation Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$count',
                      '$facet',
                      '$geoNear',
                      '$lookup',
                      '$match'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                </div>
              ) : selectedOperator === 'Arithmetic Expressions' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Arithmetic Expression Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$abs',
                      '$add',
                      '$ceil',
                      '$divide',
                      '$exp',
                      '$floor',
                      '$ln',
                      '$log',
                      '$log10'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                </div>
              ) : selectedOperator === 'Array Expressions' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Array Expression Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$arrayElemAt',
                      '$arrayToObject',
                      '$concatArrays',
                      '$filter',
                      '$in',
                      '$indexOfArray',
                      '$isArray',
                      '$objectToArray',
                      '$reverseArray',
                      '$map',
                      '$range',
                      '$reduce',
                      '$size',
                      '$sortArray',
                      '$zip'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                </div>
              ) : selectedOperator === 'Array Query' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Array Query Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$all',
                      '$elemMatch',
                      '$size'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                </div>
              ) : selectedOperator === 'Array Update' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Array Update Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$addToSet',
                      '$each',
                      '$pop',
                      '$pull',
                      '$pullAll',
                      '$push',
                      '$slice',
                      '$sort'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                </div>
              ) : selectedOperator === 'Bitwise Operators' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Bitwise Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$bitand',
                      '$bitnot',
                      '$bitor',
                      '$bitxnor'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                </div>
              ) : selectedOperator === 'Bitwise Query' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Bitwise Query Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$bitsAllClear',
                      '$bitsAllSet',
                      '$bitsAnyClear',
                      '$bitsAnySet'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                </div>
              ) : selectedOperator === 'Bitwise Update' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Bitwise Update Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$bit'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                </div>
              ) : selectedOperator === 'Comparison Query' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Comparison Query Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$eq',
                      '$gt',
                      '$gte',
                      '$in',
                      '$lt',
                      '$lte',
                      '$ne',
                      '$nin'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                </div>
              ) : selectedOperator === 'Conditional Expressions' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Conditional Expression Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$cond',
                      '$ifNull',
                      '$switch'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                </div>
              ) : selectedOperator === 'Date Expressions' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Date Expression Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$dateAdd',
                      '$dateDiff',
                      '$dateFromParts',
                      '$dateFromString'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                </div>
              ) : selectedOperator === 'Data Size' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Data Size Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$binarysize',
                      '$bsonsize'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                </div>
              ) : selectedOperator === 'Evaluation Query' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Evaluation Query Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$expr'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                </div>
              ) : selectedOperator === 'Geospatial' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Geospatial Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$box',
                      '$center',
                      '$centerSphere',
                      '$geoIntersects',
                      '$geoWithin',
                      '$geometry',
                      '$maxDistance',
                      '$minDistance',
                      '$near',
                      '$nearSphere',
                      '$polygon'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                </div>
              ) : selectedOperator === 'Logical Query' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Logical Query Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$and',
                      '$nor',
                      '$not',
                      '$or'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                </div>
              ) : selectedOperator === 'Miscellaneous' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Miscellaneous Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$comment',
                      '$rand'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                </div>
              ) : selectedOperator === 'Object Expressions' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Object Expression Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$mergeObjects',
                      '$objectToArray',
                      '$setField'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                </div>
              ) : selectedOperator === 'Projection' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Projection Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$elemMatch',
                      '$meta',
                      '$slice'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                </div>
              ) : selectedOperator === 'Variable Expression' ? (
                <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Variable Expression Operators</h3>
                  <div className="grid gap-3">
                    {[
                      '$let'
                    ].map((operator) => (
                      <button
                        key={operator}
                        className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20 text-left hover:border-blue-500/40 hover:bg-neutral-700/30 transition-all duration-200 group"
                      >
                        <h4 className="text-blue-300 font-mono font-medium group-hover:text-blue-200">
                          {operator}
                        </h4>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* Sample content for other operators */
                <div className="space-y-8">
                  <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Overview</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      The {selectedOperator} category provides powerful operators for document manipulation and querying. 
                      These operators are essential for building complex database operations and data transformations.
                    </p>
                    <div className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-600/30">
                      <p className="text-sm text-gray-400 mb-2">Example usage:</p>
                      <code className="text-green-400 font-mono text-sm">
                        db.collection.find({`{${selectedOperator.toLowerCase()}_operator: value}`})
                      </code>
                    </div>
                  </div>

                  <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Common Operators</h3>
                    <div className="grid gap-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-neutral-900/30 rounded-lg p-4 border border-neutral-600/20">
                          <h4 className="text-blue-300 font-medium mb-2">Operator {i}</h4>
                          <p className="text-gray-400 text-sm mb-3">
                            Description of operator {i} functionality and use cases.
                          </p>
                          <div className="bg-black/30 rounded p-3 border border-neutral-600/20">
                            <code className="text-green-400 font-mono text-xs">
                              {`{ $operator${i}: { field: "value" } }`}
                            </code>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-neutral-800/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Best Practices</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">•</span>
                        <span>Always validate input parameters before using {selectedOperator.toLowerCase()} operators</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">•</span>
                        <span>Consider performance implications when chaining multiple operators</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">•</span>
                        <span>Use appropriate indexing strategies to optimize {selectedOperator.toLowerCase()} queries</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

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
          <div className="group relative cursor-pointer">
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
          <div 
            className="group relative cursor-pointer"
            onClick={() => setCurrentPage('api-reference')}
          >
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
          <div className="group relative cursor-pointer">
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
          <div className="group relative cursor-pointer">
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
  );
}