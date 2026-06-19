// 1. DYNAMIC TYPEWRITER ANIMATION FOR HERO BANNER
const targetSpan = document.getElementById("dynamic-target");
const words = ["Full-Stack Developer", "Frontend Engineer", "Web UI Designer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeAnimation() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        targetSpan.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        targetSpan.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 1500; // Pause at full word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500; // Pause before typing next word
    }

    setTimeout(typeAnimation, typeSpeed);
}

// 2. TECH MODULES DATA & TAB SWITCHER LOGIC
const stackData = {
    frontend: {
        headline: "Frontend Engineering",
        description: "Building responsive user viewports with valid HTML5 structural frameworks and modular layout styles.",
        tags: ["HTML5", "CSS3 Layouts", "JavaScript"]
    },
    backend: {
        headline: "Server-Side Logic",
        description: "Developing secure backend application data pathways, API endpoints, and microservice routines.",
        tags: ["Node.js", "Express", "NPM Modules"]
    },
    agile: {
        headline: "Agile Project Tracks",
        description: "Coordinating software development sprints, tasks workflows, and team deployment inside structured Jira spaces.",
        tags: ["Jira Software", "Scrum Workflows", "Git"]
    }
};

const displayCard = document.getElementById("displayCard");
const tabButtons = document.querySelectorAll(".tab-btn");

tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove("active"));
        // Add active class to clicked button
        button.classList.add("active");
        
        // Get stack key
        const stackKey = button.getAttribute("data-stack");
        const data = stackData[stackKey];
        
        // Update display card content with animation fade effect
        displayCard.style.opacity = 0;
        setTimeout(() => {
            displayCard.querySelector(".card-headline").textContent = data.headline;
            displayCard.querySelector(".card-description").textContent = data.description;
            
            // Rebuild tags row
            const tagsRow = displayCard.querySelector(".card-tags-row");
            tagsRow.innerHTML = data.tags.map(tag => `<span>${tag}</span>`).join("");
            
            displayCard.style.opacity = 1;
        }, 150);
    });
});

// START ALL PROTOCOLS ON LOAD
document.addEventListener("DOMContentLoaded", () => {
    // Add CSS transition for smooth tab switching
    displayCard.style.transition = "opacity 0.15s ease";
    // Initialize Typewriter
    setTimeout(typeAnimation, 1000);
});