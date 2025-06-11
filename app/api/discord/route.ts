import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://discord.com/api/v10/guilds/YOUR_SERVER_ID', {
      headers: {
        Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch Discord data');
    }

    const data = await response.json();

    // Get channel information
    const channelsResponse = await fetch('https://discord.com/api/v10/guilds/YOUR_SERVER_ID/channels', {
      headers: {
        Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
      },
    });

    if (!channelsResponse.ok) {
      throw new Error('Failed to fetch Discord channels');
    }

    const channels = await channelsResponse.json();

    // Filter text channels and get their member counts
    const textChannels = channels
      .filter((channel: any) => channel.type === 0) // 0 is text channel
      .map((channel: any) => ({
        name: channel.name,
        membersOnline: Math.floor(Math.random() * 1000) // This is a mock value since Discord API doesn't provide this directly
      }))
      .slice(0, 5);

    return NextResponse.json({
      totalMembers: data.approximate_member_count || 3240, // Fallback to mock data
      channels: textChannels,
      recentDiscussions: [
        {
          author: 'NoSQL_Ninja',
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
          message: 'Has anyone implemented time-series collections with DocumentDB? Looking for performance tips.'
        },
        {
          author: 'CloudArch_Pro',
          timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 24 hours ago
          message: 'Just migrated a large MongoDB cluster to DocumentDB. The performance is impressive!'
        }
      ]
    });
  } catch (error) {
    console.error('Error fetching Discord data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Discord data' },
      { status: 500 }
    );
  }
} 