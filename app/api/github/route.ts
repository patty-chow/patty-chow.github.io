import { NextResponse } from 'next/server';
import { Octokit } from '@octokit/rest';
import type { components } from '@octokit/openapi-types';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

export async function GET() {
  try {
    const [repo, commits] = await Promise.all([
      octokit.repos.get({
        owner: 'microsoft',
        repo: 'documentdb'
      }),
      octokit.repos.listCommits({
        owner: 'microsoft',
        repo: 'documentdb',
        per_page: 2
      })
    ]);

    const [issues, pullRequests, contributors] = await Promise.all([
      octokit.issues.listForRepo({
        owner: 'microsoft',
        repo: 'documentdb',
        state: 'open',
        per_page: 1
      }),
      octokit.pulls.list({
        owner: 'microsoft',
        repo: 'documentdb',
        state: 'open',
        per_page: 1
      }),
      octokit.repos.listContributors({
        owner: 'microsoft',
        repo: 'documentdb',
        per_page: 1
      })
    ]);

    return NextResponse.json({
      stars: repo.data.stargazers_count,
      openIssues: repo.data.open_issues_count,
      pullRequests: pullRequests.data.length,
      contributors: contributors.data.length,
      recentCommits: commits.data.map((commit: components['schemas']['commit']) => ({
        message: commit.commit.message,
        author: commit.commit.author?.name || 'Unknown',
        date: commit.commit.author?.date
      }))
    });
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub data' },
      { status: 500 }
    );
  }
} 