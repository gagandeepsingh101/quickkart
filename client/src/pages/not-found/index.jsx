function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white p-4"
      style={{ backgroundColor: 'hsl(var(--background))', color: 'hsl(var(--foreground))' }}
    >
      <h1
        className="text-7xl font-bold"
        style={{ color: 'hsl(var(--destructive))' }}
      >
        404
      </h1>
      <h2
        className="text-3xl font-semibold mt-4"
        style={{ color: 'hsl(var(--foreground))' }}
      >
        Page Not Found
      </h2>
      <p
        className="mt-2 text-center max-w-md"
        style={{ color: 'hsl(var(--muted-foreground))' }}
      >
        The page you are looking for does not exist. It might have been removed or the link may be incorrect.
      </p>
      <div className="mt-6 flex space-x-4">
        <a
          href="/"
          className="px-6 py-3 font-semibold rounded-lg shadow-md transition-all duration-300"
          style={{
            backgroundColor: 'hsl(var(--primary))',
            color: 'hsl(var(--primary-foreground))'
          }}
        >
          Go Home
        </a>
      </div>
    </div>
  );
}

export default NotFound;
