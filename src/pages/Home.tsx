import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Upload, 
  BarChart3, 
  AlertTriangle, 
  FileDown, 
  Brain,
  CheckCircle,
  Clock,
  Shield,
  Zap
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Upload,
      title: "Smart Upload",
      description: "Drag & drop OMR sheets with instant processing and progress tracking"
    },
    {
      icon: Brain,
      title: "AI-Powered Recognition",
      description: "Advanced bubble detection with 99.9% accuracy and ambiguity flagging"
    },
    {
      icon: BarChart3,
      title: "Instant Analytics",
      description: "Real-time insights with subject-wise performance and trend analysis"
    },
    {
      icon: AlertTriangle,
      title: "Smart Review",
      description: "Flagged sheets review with overlay visualization for quality assurance"
    },
    {
      icon: FileDown,
      title: "Export Reports",
      description: "Generate comprehensive reports in multiple formats and languages"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 100% data privacy protection"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Accuracy Rate" },
    { number: "10x", label: "Faster Processing" },
    { number: "50K+", label: "Sheets Processed" },
    { number: "24/7", label: "System Uptime" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-6 py-3 mb-8">
              <Brain className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Next-Generation OMR Evaluation System
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Empowering Evaluators with
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                {" "}Instant Insights
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform your evaluation process with AI-powered OMR sheet processing. 
              Get accurate results in seconds, not hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link to="/upload">
                  <Upload className="mr-2 h-5 w-5" />
                  Start Evaluating
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link to="/dashboard">
                  View Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose Our OMR System?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for educators, by educators. Experience the future of automated evaluation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Simple 3-Step Process
            </h2>
            <p className="text-xl text-muted-foreground">
              From upload to insights in minutes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Upload OMR Sheets",
                description: "Drag and drop your OMR sheets or click to upload. Supports multiple formats including PDF and images.",
                icon: Upload
              },
              {
                step: "02", 
                title: "AI Processing",
                description: "Our advanced AI algorithms process your sheets with industry-leading accuracy and speed.",
                icon: Zap
              },
              {
                step: "03",
                title: "Get Insights",
                description: "View detailed analytics, export reports, and review flagged sheets for quality assurance.",
                icon: CheckCircle
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-glow rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Card className="p-12 bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/20">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Evaluation Process?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of educators who have already made the switch to intelligent OMR evaluation.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link to="/upload">
                <Upload className="mr-2 h-5 w-5" />
                Start Your First Evaluation
              </Link>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}