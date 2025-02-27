import { useDispatch } from "react-redux";
import { logoutUser } from "@/store/auth-slice";
import { Button } from "@/components/ui/button";

function UnauthPage() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
  }
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4"
      style={{ backgroundColor: 'hsl(var(--background))', color: 'hsl(var(--foreground))' }}
    >
      <h1 
        className="text-6xl font-bold"
        style={{ color: 'hsl(var(--destructive))' }}
      >
        403
      </h1>
      <h2 
        className="text-3xl font-semibold mt-4"
        style={{ color: 'hsl(var(--foreground))' }}
      >
        Access Denied
      </h2>
      <p className="mt-2 text-center max-w-md" style={{ color: 'hsl(var(--muted-foreground))' }}>
        You don't have permission to access this page. Please log in to continue or contact the administrator.
      </p>
      <div className="mt-6 flex space-x-4">
        <Button 
          onClick={handleLogout}
          className="px-6 py-3 font-semibold rounded-lg shadow-md transition-all duration-300"
          style={{ 
            backgroundColor: 'hsl(var(--primary))', 
            color: 'hsl(var(--primary-foreground))'
          }}
        >
          Logout
        </Button>
        <a
          href="/"
          className="px-6 py-3 font-semibold rounded-lg shadow-md transition-all duration-300"
          style={{ 
            backgroundColor: 'hsl(var(--muted))', 
            color: 'hsl(var(--foreground))'
          }}
        >
          Go Home
        </a>
      </div>
    </div>
  );
}

export default UnauthPage;
