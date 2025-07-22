const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border border-primary-foreground rounded-full"></div>
              </div>
              <div className="text-sm font-bold">
                <div>TEC</div>
                <div className="text-xs opacity-80">The Evaluation Company</div>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Professional credential evaluation services trusted by institutions worldwide since 1982.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Academic Evaluation</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Professional Licensure</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Document Verification</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Certified Translation</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Resources</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Status Checker</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Request Copies</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Pricing</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">FAQs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="text-sm text-primary-foreground/80 space-y-2">
              <p>1-555-EVAL-NOW</p>
              <p>info@evalcompany.com</p>
              <p>Monday - Friday<br />9:00 AM - 5:00 PM EST</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              © 2024 The Evaluation Company. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-primary-foreground transition-smooth">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground transition-smooth">Terms of Service</a>
              <a href="#" className="hover:text-primary-foreground transition-smooth">NACES Member</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;