import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Star, Users, Smartphone } from "lucide-react";

const CallToAction = () => {
  const stats = [
    { icon: <Download className="w-5 h-5" />, value: "100K+", label: "Downloads" },
    { icon: <Star className="w-5 h-5" />, value: "4.9", label: "App Store Rating" },
    { icon: <Users className="w-5 h-5" />, value: "50K+", label: "Active Users" },
    { icon: <Smartphone className="w-5 h-5" />, value: "iOS & Android", label: "Available On" }
  ];

  return (
    <section id="download" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <div className="space-y-8 mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold">
              Start your
              <span className="bg-gradient-primary bg-clip-text text-transparent"> healthy journey</span>
              <br />
              today
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of users who have transformed their relationship with food. Download CalorieTracker and take the first step towards better health.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="gradient" className="text-lg px-8 py-6">
                <Download className="w-5 h-5 mr-2" />
                Download for iOS
              </Button>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 border-border hover:bg-secondary/80 transition-all duration-300">
                <Download className="w-5 h-5 mr-2" />
                Download for Android
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <Card key={stat.label} className="p-6 bg-gradient-card border-border/50 text-center">
                <div className="space-y-2">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground mx-auto">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;