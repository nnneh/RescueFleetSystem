import { NextResponse } from 'next/server';
import axios from 'axios';



export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {data} = await axios.post('http://localhost:9000/login', body);
    if(data) return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}