import { NextRequest, NextResponse } from 'next/server';
import { Post } from './models/Post';

export async function GET(req: NextRequest) {
    try {
        const posts = await Post.find().sort({createdAt: 'desc'})
        return NextResponse.json(posts);
    } catch (e) {
        console.error(e);
        return NextResponse.error();
    }
}


export async function POST(req: NextRequest) {
    const { title, content } = await req.json();
    try {
        const post = await Post.create({
            title,
            content
        })
        return NextResponse.json(post);
    } catch (e) {
        console.error(e);
        return NextResponse.error();
    }
}