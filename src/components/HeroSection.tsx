import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  return (
    <section className="gradient-hero text-primary-foreground py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Unlocking<br />
                Opportunities<br />
                <span className="text-accent">Worldwide</span>
              </h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/90 font-light">
                Credential Evaluations. Verifications. Translations.
              </p>
            </div>
            
            <Button asChild className="btn-hero text-lg px-10 py-4 h-auto">
              <Link to="/application">Apply Now</Link>
            </Button>
            
            {/* NACES Badge */}
            <div className="flex items-center space-x-4 pt-8">
              <div className="text-sm text-primary-foreground/80">
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">NACES</span>
                  </div>
                  <div>
                    <div className="font-semibold">Member</div>
                    <div className="text-xs">Company</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Professional credential evaluation illustration" 
                className="w-full h-auto rounded-2xl shadow-hero"
              />
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl transform rotate-3"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/10 rounded-2xl transform -rotate-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;