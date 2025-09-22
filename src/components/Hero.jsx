import { ArrowRight, Star, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';

const Hero = () => {
  const stats = [
    { icon: Star, label: '5000+ Repairs', color: 'text-yellow-400' },
    { icon: Shield, label: '100% Guaranteed', color: 'text-green-400' },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="space-y-8 animate-slide-in">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Professional{' '}
              <span className="text-gradient">Home Appliance</span>{' '}
              Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Expert repair, installation, and maintenance for all your home appliances. 
              Quick, reliable, and affordable services for AC, refrigerator, washing machine, and more.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="btn-primary group"
              onClick={() =>
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              View Our Services
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Button>

            <Button asChild variant="outline" className="btn-glass">
              <a href="tel:+917338965589" className="flex items-center">
                Call Now: +91 73389 65589
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 pt-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card flex items-center space-x-3 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'both' }}
              >
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
                <span className="font-semibold text-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Element */}
        <div className="lg:flex justify-center animate-fade-in">
          <div className="relative">
            {/* Main glass card */}
            <div className="glass-strong p-8 rounded-3xl glow-accent float">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gradient mb-2">
                    Quick Service Booking
                  </h3>
                  <p className="text-muted-foreground">
                    Get instant quotes & same-day service
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="glass-light p-4 rounded-xl">
                    <h4 className="font-semibold text-primary mb-2">✓ Free Diagnosis</h4>
                    <p className="text-sm text-muted-foreground">
                      Complete appliance inspection at no cost
                    </p>
                  </div>

                  <div className="glass-light p-4 rounded-xl">
                    <h4 className="font-semibold text-accent mb-2">✓ Genuine Parts</h4>
                    <p className="text-sm text-muted-foreground">
                      Only authentic components used
                    </p>
                  </div>

                  <div className="glass-light p-4 rounded-xl">
                    <h4 className="font-semibold text-primary-glow mb-2">✓ Warranty</h4>
                    <p className="text-sm text-muted-foreground">
                      Based on the service
                    </p>
                  </div>
                </div>

                <Button
                  className="w-full btn-primary"
                  onClick={() =>
                    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Book Service Now
                </Button>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full blur-md opacity-60 animate-glow"></div>
            <div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-accent to-primary-glow rounded-full blur-sm opacity-40 animate-glow"
              style={{ animationDelay: '1.5s' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
