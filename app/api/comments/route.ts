import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import Anthropic from '@anthropic-ai/sdk'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! })

async function moderateComment(content: string): Promise<boolean> {
  try {
    const response = await anthropic.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 10,
      system: `You are a content moderator for a dating stories platform.
Flag content as inappropriate if it contains: hate speech, explicit sexual content, personal attacks, spam, doxxing, or harassment.
Respond with only "FLAG" or "OK".`,
      messages: [{ role: 'user', content }],
    })
    const verdict = (response.content[0] as { type: 'text'; text: string }).text.trim()
    return verdict === 'FLAG'
  } catch (err) {
    console.error('Moderation check failed:', err)
    return false // fail open
  }
}

// GET /api/comments?story_id=xxx&session_id=yyy
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const storyId = searchParams.get('story_id')
  const sessionId = searchParams.get('session_id') || ''

  if (!storyId) {
    return NextResponse.json({ error: 'story_id is required' }, { status: 400 })
  }

  // Fetch approved comments with reaction counts
  const { data: comments, error } = await supabase
    .from('comments')
    .select(`
      id, author_name, content, created_at,
      comment_reactions (reaction, session_id)
    `)
    .eq('story_id', storyId)
    .eq('is_approved', true)
    .order('created_at', { ascending: true })

  if (error) {
    console.error('Error fetching comments:', error)
    return NextResponse.json({ error: 'Failed to fetch comments' }, { status: 500 })
  }

  // Shape reaction data: counts + current session's vote
  const shaped = (comments || []).map((c: any) => {
    const reactions = c.comment_reactions || []
    return {
      id: c.id,
      author_name: c.author_name,
      content: c.content,
      created_at: c.created_at,
      likes: reactions.filter((r: any) => r.reaction === 'like').length,
      dislikes: reactions.filter((r: any) => r.reaction === 'dislike').length,
      my_reaction: sessionId
        ? (reactions.find((r: any) => r.session_id === sessionId)?.reaction ?? null)
        : null,
    }
  })

  return NextResponse.json({ comments: shaped })
}

// POST /api/comments
export async function POST(request: NextRequest) {
  const body = await request.json()
  const { story_id, author_name, content } = body

  if (!story_id || !content) {
    return NextResponse.json({ error: 'story_id and content are required' }, { status: 400 })
  }

  if (content.trim().length < 3) {
    return NextResponse.json({ error: 'Comment is too short' }, { status: 400 })
  }

  if (content.trim().length > 1000) {
    return NextResponse.json({ error: 'Comment must be under 1000 characters' }, { status: 400 })
  }

  const isFlagged = await moderateComment(content.trim())

  const { data, error } = await supabase
    .from('comments')
    .insert({
      story_id,
      author_name: author_name?.trim() || 'Anonymous',
      content: content.trim(),
      is_approved: true,
      is_flagged: isFlagged,
    })
    .select('id, author_name, content, created_at')
    .single()

  if (error) {
    console.error('Error inserting comment:', error)
    return NextResponse.json({ error: 'Failed to submit comment' }, { status: 500 })
  }

  return NextResponse.json(
    { comment: { ...data, likes: 0, dislikes: 0, my_reaction: null }, message: 'Comment posted!' },
    { status: 201 }
  )
}
