const TrustedBySection = () => {
  const universities = [
    { name: "Johns Hopkins University", logo: "JHU" },
    { name: "St. John's University", logo: "SJU" }, 
    { name: "The City University of New York", logo: "CUNY" },
    { name: "University of Houston", logo: "UH" },
    { name: "University of Miami", logo: "UM" },
    { name: "New York University", logo: "NYU" },
    { name: "Samsung", logo: "SAMSUNG" },
    { name: "Fragomen", logo: "FRAG" },
    { name: "Sidley", logo: "SIDLEY" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-8">
            Trusted By
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {universities.map((org, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center h-16 w-full opacity-60 hover:opacity-100 transition-smooth"
            >
              <div className="text-center">
                <div className="font-bold text-lg text-primary">
                  {org.logo}
                </div>
                <div className="text-xs text-muted-foreground mt-1 leading-tight">
                  {org.name.length > 15 ? org.name.split(' ').slice(0, 2).join(' ') : org.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;