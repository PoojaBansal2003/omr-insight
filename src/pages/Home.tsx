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
  Zap,
  PieChart
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
      <section className="relative py-24 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary-glow/10 rounded-3xl" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center space-x-3 bg-primary/10 text-primary rounded-full px-6 py-3 mb-8 border border-primary/20">
              <Brain className="h-5 w-5" />
              <span className="text-sm font-medium">
                ✨ Next-Generation OMR Processing
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-8xl font-bold text-foreground mb-8 leading-tight">
              Empowering Evaluators with
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent block">
                Instant Insights
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed font-light">
              Transform your evaluation process with AI-powered OMR sheet processing that delivers 
              <span className="text-primary font-semibold"> professional results</span> in seconds, not hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild size="lg" className="text-lg px-12 py-7 btn-hero shadow-2xl hover:shadow-primary/25 transition-all duration-500">
                <Link to="/upload">
                  <Upload className="mr-3 h-6 w-6" />
                  Start Evaluating
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-12 py-7 border-2 hover:bg-accent/50 transition-all duration-300 hover:scale-105">
                <Link to="/dashboard" className="flex items-center">
                  <BarChart3 className="mr-3 h-6 w-6" />
                  View Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-primary-glow/5 to-primary/10 rounded-3xl border border-primary/10 mx-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Trusted by Educators Worldwide
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of institutions already revolutionizing their evaluation process
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Choose Our OMR System?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Built for educators, by educators. Experience the future of automated evaluation with cutting-edge technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="group p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-card to-muted/30 hover-glow">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Simple 3-Step Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get started in minutes, not hours. Our streamlined workflow gets you professional results fast.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
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
                <div key={index} className="text-center group">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-glow rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary-glow rounded-full flex items-center justify-center text-primary-foreground text-lg font-bold shadow-lg">
                      {item.step}
                    </div>
                    {index < 2 && (
                      <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Card className="p-16 bg-gradient-to-br from-primary/10 via-primary-glow/5 to-primary/10 border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary-glow/5" />
            <div className="relative">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Ready to Transform Your Evaluation Process?
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                Join thousands of educators who have already made the switch to intelligent OMR evaluation. 
                Experience the future today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button asChild size="lg" className="text-lg px-12 py-7 btn-hero shadow-2xl hover:shadow-primary/25 transition-all duration-500">
                  <Link to="/upload">
                    <Upload className="mr-3 h-6 w-6" />
                    Start Your First Evaluation
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-12 py-7 border-2 hover:bg-accent/50 transition-all duration-300">
                  <Link to="/analytics" className="flex items-center">
                    <PieChart className="mr-3 h-6 w-6" />
                    See Analytics Demo
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}