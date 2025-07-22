const TrustedBySection = () => {
  const universities = [
    { 
      name: "Johns Hopkins University", 
      logo: "/lovable-uploads/34764785-c81c-4d6f-ba70-66a9e66b64d6.png",
      shortName: "JHU"
    },
    { 
      name: "St. John's University", 
      logo: "/lovable-uploads/43f1c889-a275-4d86-ad3d-005f332c48a9.png",
      shortName: "SJU"
    },
    { 
      name: "The City University of New York", 
      logo: "/lovable-uploads/ce22195e-0599-4271-8006-cc5c79b1945f.png",
      shortName: "CUNY"
    },
    { 
      name: "University of Miami", 
      logo: "/lovable-uploads/094f0515-e630-4ab5-a519-3e39689d74c0.png",
      shortName: "UM"
    },
    { 
      name: "New York University", 
      logo: "/lovable-uploads/9a675274-8af4-4500-81e5-5aed4a6bd9dc.png",
      shortName: "NYU"
    },
    { 
      name: "Texas Education Agency", 
      logo: "/lovable-uploads/f2756d79-9e64-4c96-b9a7-2dfbff866b53.png",
      shortName: "TEA"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-8">
            Trusted By
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {universities.map((org, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center h-20 w-full opacity-60 hover:opacity-100 transition-smooth"
            >
              <img 
                src={org.logo} 
                alt={org.name}
                className="max-h-16 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;