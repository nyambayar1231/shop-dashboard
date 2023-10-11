export async function Get(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const res = await fetch(`https://data.mongodb-api.com/products/${id}`, {
    headers: {
      'Content-type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
  });
  const product = await res.json();

  // typescript < 5.2 use NextResponse.json()
  return Response.json({ product });
}
