import { NextResponse } from 'next/server';
import axios from 'axios';



export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {data} = await axios.post('http://localhost:3000/login', body);
    if(data) return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}






// import { NextResponse } from 'next/server';
// import axios from 'axios';



// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const response = await fetch('http://localhost:3000/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(body),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       return NextResponse.json(errorData, { status: response.status });
//     }

//     const data = await response.json();
//     return NextResponse.json(data, { status: 200 });
//   } catch (error) {
//     console.error('Login error:', error);
//     return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
//   }
// }