import { Shield, Users, Trophy, CheckCircle } from "lucide-react";
import { Card } from "../components/ui/card";
import Logo_Alone from "../assets/Mohana_logo_alone.png";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.3,     
  });

  const achievements = [
    {
      icon: Users,
      number: "500+",
      label: "Happy Customers",
      color: "text-blue-400",
    },
    {
      icon: CheckCircle,
      number: "5000+",
      label: "Repairs Completed",
      color: "text-green-400",
    },
    {
      icon: Trophy,
      number: "8+",
      label: "Years Experience",
      color: "text-yellow-400",
    },
    {
      icon: Shield,
      number: "100%",
      label: "Satisfaction Rate",
      color: "text-purple-400",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-4 relative overflow-hidden"
      ref={ref} // Attach the ref to the main container or achievements wrapper
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            About{" "}
            <span className="text-gradient inline-flex items-center gap-2">
              <span>Mohana AC</span>
              <img
                src={Logo_Alone}
                alt="Mohana AC Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
              />
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            With over 8 years of experience in home appliance services, we've
            built our reputation on quality workmanship, genuine parts, and
            exceptional customer service. Your satisfaction is our top priority.
          </p>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="glass-card text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="glass-light p-4 rounded-full w-fit mx-auto">
                  <achievement.icon
                    className={`w-8 h-8 ${achievement.color}`}
                  />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {inView ? (
                      <CountUp
                        start={0}
                        end={parseInt(achievement.number)}
                        duration={2}
                        suffix={achievement.number.includes("+") ? "+" : achievement.number.includes("%") ? "%" : ""}
                      />
                    ) : (
                      "0"
                    )}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {achievement.label}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* The rest of your features, mission, etc. */}
        {/* ... */}
      </div>
    </section>
  );
};

export default About;
