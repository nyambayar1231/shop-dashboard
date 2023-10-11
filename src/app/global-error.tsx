'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { disgest: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
