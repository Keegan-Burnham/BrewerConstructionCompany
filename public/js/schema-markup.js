document.addEventListener('DOMContentLoaded', function() {
    var organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Brewer Construction Co.",
        "url": "https://brewerconstructionco.com/",
        "logo": "https://brewerconstructionco.com/company/logo/BrewerConCoLogo.png",
        "description": "At Brewer Construction Company, we specialize in remodeling, construction, and repairs in Dawsonville, Dahlonega, Cumming, and Gainesville, GA. Our motto, 'Trustworthy Craftsmanship,' reflects our commitment to delivering high-quality, reliable services for every project. Contact us for expert solutions that exceed your expectations.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "144 Bears Den Drive",
            "addressLocality": "Dawsonville",
            "addressRegion": "GA",
            "postalCode": "30534",
            "addressCountry": "US"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-770-744-1421",
            "contactType": "Customer Service",
            "email": "Jamie@BrewerConstructionCo.com",
            "areaServed": "US",
            "availableLanguage": "English"
        },
        "sameAs": [
            "https://www.facebook.com/profile.php?id=61550938054742",
            "https://www.instagram.com/brewerconstructionco/"
        ]
    };

    var serviceSchemas = [
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Construction",
            "provider": {
                "@type": "Organization",
                "name": "Brewer Construction Co."
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Remodeling",
            "provider": {
                "@type": "Organization",
                "name": "Brewer Construction Co."
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Repair",
            "provider": {
                "@type": "Organization",
                "name": "Brewer Construction Co."
            }
        }
    ];

    var script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(organizationSchema);
    document.head.appendChild(script);

    serviceSchemas.forEach(function(schema) {
        var serviceScript = document.createElement('script');
        serviceScript.type = 'application/ld+json';
        serviceScript.text = JSON.stringify(schema);
        document.head.appendChild(serviceScript);
    });
});