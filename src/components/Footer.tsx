import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="CalorieTracker Logo" className="w-8 h-8" />
              <span className="text-xl font-bold">CalorieTracker</span>
            </div>
            <p className="text-muted-foreground">
              Making healthy eating simple, smart, and sustainable for everyone.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Download</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Premium</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Updates</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Bug Reports</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Feature Requests</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 CalorieTracker. All rights reserved. Made with ❤️ for healthier living.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;