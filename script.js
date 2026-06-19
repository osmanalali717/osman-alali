// Database Dictionary holding information matrix blocks for instant loading sequences
const infoMatrix = {
    frontend: {
        title: "Frontend Systems",
        desc: "React Framework ecosystem featuring optimized layout hooks and fluid responsive state workflows.",
        tags: ["SPAs", "State Logs", "Components"]
    },
    backend: {
        title: "Backend Runtime",
        desc: "High-concurrency systems engineered with Node.js servers, real-time sync endpoints, and API design frameworks.",
        tags: ["Node.js", "REST APIs", "Sockets"]
    },
    architecture: {
        title: "Data Clusters",
        desc: "Robust storage strategies featuring structured SQL pipelines paired with optimized NoSQL document caches.",
        tags: ["MongoDB", "MySQL", "Indexing"]
    }
};

const controlNodes = document.querySelectorAll('.control-node');
const cardTitle = document.querySelector('.card-title');
const cardDesc = document.querySelector('.card-desc');
const cardTagsContainer = document.querySelector('.card-footer-tags');
const displayCard = document.getElementById('displayCard');

controlNodes.forEach(node => {
    node.addEventListener('click', () => {
        // Drop any active markers from selection collections array
        controlNodes.forEach(btn => btn.classList.remove('active'));
        node.classList.add('active');
        
        const key = node.getAttribute('data-stack');
        
        if (infoMatrix[key]) {
            // Re-trigger clean CSS keyframe animation entry on data load
            displayCard.style.animation = 'none';
            displayCard.offsetHeight; // Forces DOM element reflow update
            displayCard.style.animation = 'slideUpAnimation 0.4s ease-out';

            // Inject targeted text contents updates
            cardTitle.textContent = infoMatrix[key].title;
            cardDesc.textContent = infoMatrix[key].desc;
            
            // Build the clean array list tag collection dynamically inside loop passes
            cardTagsContainer.innerHTML = '';
            infoMatrix[key].tags.forEach(tagText => {
                const spanTag = document.createElement('span');
                spanTag.textContent = tagText;
                cardTagsContainer.appendChild(spanTag);
            });
        }
    });
});
