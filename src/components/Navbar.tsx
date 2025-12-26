import { Link, useLocation } from "react-router-dom";
import { Code2, Terminal } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Terminal className="h-5 w-5 text-primary" />
            </div>
            <span className="font-mono font-bold text-lg">DevBlog</span>
          </Link>

          <div className="flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                isActive("/")
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              Home
            </Link>
            <Link
              to="/blog"
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                isActive("/blog")
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
