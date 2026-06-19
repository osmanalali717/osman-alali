document.addEventListener('DOMContentLoaded', () => {
    // ==== 1. كود تشغيل أزرار الـ TABS للـ MODULES ====
    const tabButtons = document.querySelectorAll('.selector-tabs-grid .tab-btn');
    const displayCard = document.getElementById('displayCard');

    const stackData = {
        frontend: {
            headline: "Frontend Engineering",
            description: "Building responsive user viewports with valid HTML5 structural frameworks and modular layout styles.",
            tags: ["HTML5", "CSS3 Layouts", "JavaScript"]
        },
        backend: {
            headline: "Server Logic",
            description: "Building secure backend data pathways, asynchronous server routines, and optimizing database environments.",
            tags: ["Node.js", "Express", "APIs", "Databases"]
        },
        agile: {
            headline: "Agile Tracks",
            description: "Coordinating software engineering sprints, task workflows, and managing project deployment timelines.",
            tags: ["Jira Software", "Sprints", "Workflows"]
        }
    };

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const currentStack = button.getAttribute('data-stack');
            const data = stackData[currentStack];
            
            if (data) {
                displayCard.querySelector('.card-headline').textContent = data.headline;
                displayCard.querySelector('.card-description').textContent = data.description;
                
                const tagsRow = displayCard.querySelector('.card-tags-row');
                tagsRow.innerHTML = '';
                
                data.tags.forEach(tag => {
                    const span = document.createElement('span');
                    span.textContent = tag;
                    tagsRow.appendChild(span);
                });
            }
        });
    });

    // ==== 2. كود تشغيل منيو الموبايل (HAMBURGER MENU) ====
    const mobileMenuTrigger = document.getElementById('mobileMenuTrigger');
    const mobileOverlayMenu = document.getElementById('mobileOverlayMenu');
    const overlayAnchors = document.querySelectorAll('.overlay-anchor');

    if (mobileMenuTrigger && mobileOverlayMenu) {
        // فتح وقفل المنيو عند كبس الزر
        mobileMenuTrigger.addEventListener('click', () => {
            mobileOverlayMenu.classList.toggle('active');
            mobileMenuTrigger.classList.toggle('open');
        });

        // قفل المنيو تلقائياً بس تكبس على أي رابط بقلبه
        overlayAnchors.forEach(anchor => {
            anchor.addEventListener('click', () => {
                mobileOverlayMenu.classList.remove('active');
                mobileMenuTrigger.classList.remove('open');
            });
        });
    }
});
