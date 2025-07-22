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
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
            <img 
              src="/lovable-uploads/3a07cd3c-5a47-42c6-b31d-420f744667c2.png" 
              alt="TEC - The Evaluation Company" 
              className="h-12 w-auto"
            />
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
            <Button asChild className="btn-primary">
              <Link to="/application">Apply Online</Link>
            </Button>
            <Button className="btn-outline-success">Request Demo</Button>
            <Button className="btn-outline-success">Request Copies</Button>
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
                  <Button asChild className="btn-primary">
                    <Link to="/application">Apply Online</Link>
                  </Button>
                  <Button className="btn-outline-success">Request Demo</Button>
                  <Button className="btn-outline-success">Request Copies</Button>
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