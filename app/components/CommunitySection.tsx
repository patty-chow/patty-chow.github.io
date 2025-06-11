'use client';

import { useEffect, useState } from 'react';

interface GitHubData {
  stars: number;
  openIssues: number;
  pullRequests: number;
  contributors: number;
  recentCommits: Array<{
    message: string;
    author: string;
    date: string;
  }>;
}

interface DiscordData {
  totalMembers: number;
  channels: Array<{
    name: string;
    membersOnline: number;
  }>;
  recentDiscussions: Array<{
    author: string;
    timestamp: string;
    message: string;
  }>;
}

export default function CommunitySection() {
  const [githubData, setGithubData] = useState<GitHubData | null>(null);
  const [discordData, setDiscordData] = useState<DiscordData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [githubResponse, discordResponse] = await Promise.all([
          fetch('/api/github'),
          fetch('/api/discord')
        ]);

        if (githubResponse.ok && discordResponse.ok) {
          const [github, discord] = await Promise.all([
            githubResponse.json(),
            discordResponse.json()
          ]);

          setGithubData(github);
          setDiscordData(discord);
        }
      } catch (error) {
        console.error('Error fetching community data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-neutral-800 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-neutral-800 rounded max-w-2xl mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Connect with developers, contribute to the project, and get help from the DocumentDB community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* GitHub Activity */}
          <div className="bg-neutral-800/80 backdrop-blur-sm rounded-xl border border-neutral-700/50 p-8">
            <div className="flex items-center mb-6">
              <svg className="w-8 h-8 text-white mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <h3 className="text-xl font-bold text-white">GitHub Activity</h3>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-neutral-700/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-1">{githubData?.openIssues || 0}</div>
                <div className="text-sm text-gray-400">Open Issues</div>
              </div>
              <div className="bg-neutral-700/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-1">{githubData?.pullRequests || 0}</div>
                <div className="text-sm text-gray-400">Pull Requests</div>
              </div>
              <div className="bg-neutral-700/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-1">{githubData?.contributors || 0}</div>
                <div className="text-sm text-gray-400">Contributors</div>
              </div>
              <div className="bg-neutral-700/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-1">{githubData?.stars || 0}</div>
                <div className="text-sm text-gray-400">Stars</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white mb-2">Recent Commits</h4>
              {githubData?.recentCommits.map((commit, index) => (
                <div key={index} className="bg-neutral-700/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-green-400 text-sm">{commit.message}</span>
                    <span className="text-gray-500 text-xs">
                      {new Date(commit.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="text-gray-400 text-xs">by {commit.author}</div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <a 
                href="https://github.com/microsoft/documentdb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-white text-black rounded-md hover:bg-gray-100 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                View on GitHub
              </a>
            </div>
          </div>

          {/* Discord Community */}
          <div className="bg-neutral-800/80 backdrop-blur-sm rounded-xl border border-neutral-700/50 p-8">
            <div className="flex items-center mb-6">
              <svg className="w-8 h-8 text-[#5865F2] mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              <h3 className="text-xl font-bold text-white">Discord Community</h3>
            </div>

            <div className="bg-neutral-700/30 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white font-semibold">Active Channels</span>
                <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">
                  {discordData?.totalMembers || 0} members
                </span>
              </div>
              <div className="space-y-3">
                {discordData?.channels.map((channel, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-2">#</span>
                      <span className="text-white">{channel.name}</span>
                    </div>
                    <span className="text-gray-500 text-sm">{channel.membersOnline} online</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white mb-2">Recent Discussions</h4>
              {discordData?.recentDiscussions.map((discussion, index) => (
                <div key={index} className="bg-neutral-700/30 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-white text-sm font-medium">{discussion.author}</span>
                        <span className="text-gray-500 text-xs">
                          {new Date(discussion.timestamp).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">{discussion.message}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <a 
                href="https://discord.gg/documentdb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-[#5865F2] text-white rounded-md hover:bg-[#4752C4] transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Join Discord Server
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 