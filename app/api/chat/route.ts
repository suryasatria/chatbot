import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // Di sini Anda bisa menghubungkan ke OpenAI, Claude, atau Gemini API.
    // Untuk template ini, kita mengembalikan respon statis.
    const mockReply = `Ini adalah balasan simulasi untuk pesan: "${message}". Integrasikan dengan LLM nyata di app/api/chat/route.ts!`;

    return NextResponse.json({ reply: mockReply });
  } catch (error) {
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat memproses permintaan.' },
      { status: 500 }
    );
  }
}
