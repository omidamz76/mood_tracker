import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, mood, note } = body;

    const dailyLog = await prisma.dailyLog.create({
      data: {
        userId: parseInt(userId),
        mood,
        note: note || null,
      },
    });

    return NextResponse.json({ success: true, data: dailyLog });
  } catch (error) {
    console.error('Error creating daily log:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create daily log' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const dailyLogs = await prisma.dailyLog.findMany({
      include: {
        user: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json({ success: true, data: dailyLogs });
  } catch (error) {
    console.error('Error fetching daily logs:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch daily logs' },
      { status: 500 }
    );
  }
}