import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="CalorieTracker Logo" className="w-8 h-8" />
            <span className="text-xl font-bold">CalorieTracker</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#download" className="text-muted-foreground hover:text-foreground transition-colors">
              Download
            </a>
            <a href="#support" className="text-muted-foreground hover:text-foreground transition-colors">
              Support
            </a>
          </nav>

          {/* CTA Button */}
          <Button variant="gradient">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;