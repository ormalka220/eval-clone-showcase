import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const servicesItems = [
    "Academic Credential Evaluation",
    "Professional Licensure Credential Evaluation", 
    "Document Verification Services",
    "Certified Translation",
    "Custom Application"
  ];

  const institutionsItems = [
    "Higher Education",
    "Professional Licensure", 
    "Military Recruitment"
  ];

  const toolsItems = [
    "Status Checker",
    "Request Copies",
    "Verification Pricing",
    "Resource Center",
    "FAQs"
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-primary-foreground rounded-full relative">
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary-foreground rounded-full"></div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary-foreground rounded-full"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary-foreground rounded-full"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary-foreground rounded-full"></div>
              </div>
            </div>
            <div className="text-lg font-bold">
              <span className="text-primary">TEC</span>
              <div className="text-sm text-muted-foreground leading-tight">
                The<br />
                Evaluation<br />
                Company
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="nav-link flex items-center space-x-1">
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'services' && (
                <div className="nav-dropdown">
                  {servicesItems.map((item, index) => (
                    <a key={index} href="#" className="block px-4 py-2 text-sm hover:bg-muted">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Institutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('institutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="nav-link flex items-center space-x-1">
                <span>Institutions</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'institutions' && (
                <div className="nav-dropdown">
                  {institutionsItems.map((item, index) => (
                    <a key={index} href="#" className="block px-4 py-2 text-sm hover:bg-muted">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#" className="nav-link">About Us</a>
            <a href="#" className="nav-link">Pricing</a>

            {/* Tools & FAQs Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('tools')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="nav-link flex items-center space-x-1">
                <span>Tools & FAQs</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'tools' && (
                <div className="nav-dropdown">
                  {toolsItems.map((item, index) => (
                    <a key={index} href="#" className="block px-4 py-2 text-sm hover:bg-muted">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#" className="nav-link">Contact</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button asChild className="btn-success">
              <Link to="/application">Apply Online</Link>
            </Button>
            <Button variant="outline" className="btn-outline-success">Request Demo</Button>
            <Button variant="outline" className="btn-outline-success">Request Copies</Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="nav-link">Services</a>
              <a href="#" className="nav-link">Institutions</a>
              <a href="#" className="nav-link">About Us</a>
              <a href="#" className="nav-link">Pricing</a>
              <a href="#" className="nav-link">Tools & FAQs</a>
              <a href="#" className="nav-link">Contact</a>
              <div className="pt-4 border-t border-border">
                <div className="flex flex-col space-y-2">
                  <Button asChild className="btn-success">
                    <Link to="/application">Apply Online</Link>
                  </Button>
                  <Button variant="outline" className="btn-outline-success">Request Demo</Button>
                  <Button variant="outline" className="btn-outline-success">Request Copies</Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;