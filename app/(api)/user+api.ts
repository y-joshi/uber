import { neon } from '@neondatabase/serverless';

export async function POST(request: Request) {
  try {
    console.log('Processing user creation request');
    const sql = neon(`${process.env.DATABASE_URL}`);
    const { name, email, clerkId } = await request.json();
    console.log('Received user data:', { name, email, clerkId });
    if (!name || !email || !clerkId) {
      return new Response('Missing required fields', { status: 400 });
    }
    const response = await sql`
    INSERT INTO users (name, email, clerk_id)
    VALUES (${name}, ${email}, ${clerkId});
  `;

    return new Response(JSON.stringify(response), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error }), { status: 500 });
  }
}
