import { Card } from "@/components/ui/card";
import homeScreen from "@/assets/home-screen.png";
import scannerScreen from "@/assets/scanner-screen.png";
import waterScreen from "@/assets/water-screen.png";
import { Scan, Target, Droplets, BarChart3, Calendar, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Scan className="w-8 h-8" />,
      title: "AI Food Scanner",
      description: "Point your camera at any dish and get instant nutritional analysis with ingredient breakdown and portion sizes.",
      image: scannerScreen,
      highlight: "Smart Recognition",
      color: "health-primary"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision Tracking",
      description: "Track calories, macros, and nutrients with detailed breakdowns. Set personalized goals and monitor your progress.",
      image: homeScreen,
      highlight: "Complete Overview",
      color: "health-secondary"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Hydration Monitor",
      description: "Stay properly hydrated with our intuitive water tracking system. Set goals and get gentle reminders throughout the day.",
      image: waterScreen,
      highlight: "Daily Goals",
      color: "health-secondary"
    }
  ];

  const additionalFeatures = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Health Scoring",
      description: "Get instant health scores for your meals based on nutritional balance and quality."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Meal Planning",
      description: "Plan your meals in advance with our smart scheduling and recommendation system."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Quick Logging",
      description: "Log meals in seconds with our barcode scanner and vast food database."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Powerful features for
            <span className="bg-gradient-primary bg-clip-text text-transparent"> better health</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to take control of your nutrition, packed into one beautifully designed app
          </p>
        </div>

        {/* Main Features */}
        <div className="space-y-24 mb-24">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} space-y-6`}>
                <div className="space-y-4">
                  <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-${feature.color}/10 text-${feature.color}`}>
                    {feature.icon}
                    <span className="font-semibold">{feature.highlight}</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold">{feature.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} relative`}>
                <div className="relative z-10">
                  {/* iPhone Frame */}
                  <div className="relative max-w-sm mx-auto">
                    <div className="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                      <div className="bg-black rounded-[2.5rem] overflow-hidden">
                        {/* iPhone notch */}
                        <div className="relative">
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-black rounded-b-xl z-10"></div>
                          <img
                            src={feature.image}
                            alt={`${feature.title} screenshot`}
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                      {/* iPhone button */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gray-700 rounded-full"></div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className={`absolute inset-0 bg-gradient-${feature.color === 'health-primary' ? 'primary' : 'secondary'} rounded-3xl blur-3xl opacity-10 scale-110`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {additionalFeatures.map((feature) => (
            <Card key={feature.title} className="p-8 bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;