import { Button } from "@/components/ui/button";
import heroMockup from "@/assets/hero-mockup.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-health-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-health-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent leading-tight">
                Healthy habits
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  made easy
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Transform your nutrition journey with AI-powered food scanning, precise calorie tracking, and personalized insights. Your path to better health starts here.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="gradient" className="text-lg px-8 py-6">
                Download for iOS
              </Button>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 border-border hover:bg-secondary/80 transition-all duration-300">
                Download for Android
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-health-success rounded-full"></div>
                <span>Free to download</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-health-secondary rounded-full"></div>
                <span>No ads</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-health-primary rounded-full"></div>
                <span>Privacy focused</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroMockup} 
                alt="CalorieTracker app in action showing food scanning feature" 
                className="w-full max-w-md mx-auto drop-shadow-hero"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-2xl blur-sm opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-secondary rounded-full blur-sm opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;