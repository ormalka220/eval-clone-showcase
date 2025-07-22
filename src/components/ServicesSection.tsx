import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, FileText, Shield, Languages } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Academic Credential Evaluation",
      description: "Convert your foreign educational credentials to U.S. equivalents for university admissions and employment.",
      features: ["Degree equivalency analysis", "GPA calculation", "Official reports"]
    },
    {
      icon: FileText,
      title: "Document Verification",
      description: "Verify the authenticity of your academic documents through our comprehensive verification process.",
      features: ["Institution contact", "Authenticity confirmation", "Detailed reports"]
    },
    {
      icon: Shield,
      title: "Professional Licensure",
      description: "Specialized evaluations for professional licensing boards in healthcare, engineering, and more.",
      features: ["Board-specific formats", "Professional requirements", "Fast processing"]
    },
    {
      icon: Languages,
      title: "Certified Translation",
      description: "Professional translations of academic and official documents by certified translators.",
      features: ["Certified translations", "Multiple languages", "Official certification"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional evaluation services trusted by universities, employers, and licensing boards worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-lg transition-smooth">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-success rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;