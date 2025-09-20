import { NavLink } from "react-router-dom";
import { 
  Upload, 
  LayoutDashboard, 
  BarChart3, 
  AlertTriangle, 
  FileDown,
  Brain
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/upload", label: "Upload", icon: Upload },
  { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { path: "/analytics", label: "Analytics", icon: BarChart3 },
  { path: "/review", label: "Review", icon: AlertTriangle },
  { path: "/reports", label: "Reports", icon: FileDown },
];

export function Navigation() {
  return (
    <nav className="bg-card/50 backdrop-blur-lg border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="p-2 bg-gradient-to-br from-primary to-primary-glow rounded-xl text-primary-foreground">
              <Brain className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">OMR Evaluator</h1>
              <p className="text-xs text-muted-foreground">Empowering Evaluators with Instant Insights</p>
            </div>
          </NavLink>

          {/* Navigation Links */}
          <div className="flex space-x-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <NavLink
                key={path}
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  cn(
                    "flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )
                }
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}