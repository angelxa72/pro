// All Projects data for lightbox (Projects Page - 6 projects)
const allProjectsData = {
    1: {
        title: "Downtown Office Complex",
        description: "A modern 15-story office building with sustainable features and smart technology integration. This landmark project showcases our commitment to innovative design and environmental responsibility.",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        details: [
            "Location: Downtown Business District",
            "Completion Date: June 2023",
            "Total Area: 250,000 sq ft",
            "Floors: 15",
            "Budget: $45 Million"
        ],
        features: [
            "LEED Platinum Certified",
            "Smart building automation system",
            "Solar panel installation",
            "Green roof with rainwater harvesting",
            "EV charging stations",
            "High-speed fiber optic connectivity"
        ]
    },
    2: {
        title: "Lakeside Residential Community",
        description: "A luxury residential development featuring 50 custom homes with waterfront views. Each property is designed with unique architectural elements while maintaining community cohesion.",
        image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        details: [
            "Location: Serene Lakeside Area",
            "Completion Date: August 2023",
            "Total Units: 50 custom homes",
            "Community Area: 25 acres",
            "Budget: $60 Million"
        ],
        features: [
            "Waterfront properties with private docks",
            "Community clubhouse and pool",
            "Walking trails and parks",
            "Underground utilities",
            "Smart home integration",
            "24/7 security surveillance"
        ]
    },
    3: {
        title: "Industrial Warehouse Facility",
        description: "A 100,000 sq ft warehouse with advanced logistics and distribution capabilities. This state-of-the-art facility incorporates the latest in industrial automation and efficiency.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        details: [
            "Location: Industrial Park Zone",
            "Completion Date: March 2023",
            "Total Area: 100,000 sq ft",
            "Clear Height: 32 feet",
            "Budget: $18 Million"
        ],
        features: [
            "Automated storage and retrieval system",
            "Climate-controlled sections",
            "32 loading docks with levelers",
            "Solar-powered facility",
            "Advanced fire suppression system",
            "Custom racking solutions"
        ]
    },
    4: {
        title: "City Center Mall",
        description: "A modern shopping complex with 100+ retail stores and entertainment facilities. This project transformed the city's retail landscape.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        details: [
            "Location: Central Business District",
            "Completion Date: January 2023",
            "Total Area: 500,000 sq ft",
            "Retail Stores: 120+",
            "Budget: $75 Million"
        ],
        features: [
            "Multi-level shopping complex",
            "Food court with international cuisine",
            "Cinema and entertainment zone",
            "Underground parking for 800 vehicles",
            "Central atrium with natural lighting",
            "Accessible design throughout"
        ]
    },
    5: {
        title: "Hillside Villa Development",
        description: "Luxury villas with panoramic mountain views and premium amenities. Each villa features custom architecture and premium finishes.",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        details: [
            "Location: Mountain View Area",
            "Completion Date: November 2022",
            "Total Villas: 25",
            "Plot Size: 50 acres",
            "Budget: $40 Million"
        ],
        features: [
            "Panoramic mountain views",
            "Private swimming pools",
            "Smart home automation",
            "Landscaped gardens",
            "Community clubhouse",
            "24/7 security and concierge"
        ]
    },
    6: {
        title: "Manufacturing Plant Expansion",
        description: "State-of-the-art manufacturing facility with automated production lines and advanced quality control systems.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        details: [
            "Location: Industrial Corridor",
            "Completion Date: September 2022",
            "Expansion Area: 75,000 sq ft",
            "Production Lines: 8",
            "Budget: $25 Million"
        ],
        features: [
            "Automated production lines",
            "Quality control laboratories",
            "Employee wellness center",
            "Sustainable energy systems",
            "Advanced ventilation",
            "Custom logistics solutions"
        ]
    }
};

// Mobile menu functionality for projects page
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
            if (nav) nav.classList.remove('active');
        });
    });

    // Filter functionality for projects page
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card-full');
    
    // Filter projects
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Lightbox functionality for projects page
    const lightbox = document.getElementById('projectLightbox');
    const lightboxClose = document.querySelector('.lightbox-close');
    
    // Open lightbox when project card is clicked
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            openLightbox(projectId);
        });
    });
    
    // Close lightbox when X is clicked
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    
    // Close lightbox when clicking outside content
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
    
    // Close lightbox with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
    
    function openLightbox(projectId) {
        const project = allProjectsData[projectId];
        if (!project) return;
        
        // Populate lightbox with project data
        document.getElementById('lightboxImg').src = project.image;
        document.getElementById('lightboxImg').alt = project.title;
        document.getElementById('lightboxTitle').textContent = project.title;
        document.getElementById('lightboxDescription').textContent = project.description;
        
        // Populate details
        const detailsList = document.getElementById('lightboxDetails');
        detailsList.innerHTML = '';
        project.details.forEach(detail => {
            const li = document.createElement('li');
            li.textContent = detail;
            detailsList.appendChild(li);
        });
        
        // Populate features
        const featuresList = document.getElementById('lightboxFeatures');
        featuresList.innerHTML = '';
        project.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
        
        // Show lightbox
        if (lightbox) {
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
    
    function closeLightbox() {
        if (lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
    
    // Add scroll effect to header
    // Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)'; /* Black with transparency */
            header.style.backdropFilter = 'blur(5px)';
        } else {
            header.style.backgroundColor = '#000000'; /* Solid black */
            header.style.backdropFilter = 'none';
        }
    }
});
    // Add animation to project cards on page load
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });

});
