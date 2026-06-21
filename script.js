
(function() {
    function startInteractivity() {
        var menuTrigger = document.getElementById('mobileMenuTrigger');
        var leftWing = document.getElementById('navWingLeft');
        var rightWing = document.getElementById('navWingRight');
        
        if (menuTrigger && leftWing && rightWing) {
            var toggleMenu = function(e) {
                e.preventDefault();
                e.stopPropagation();
                leftWing.classList.toggle('active');
                rightWing.classList.toggle('active');
            };
            menuTrigger.addEventListener('click', toggleMenu);
            menuTrigger.addEventListener('touchstart', toggleMenu, { passive: false });
        }

        var tabButtons = document.querySelectorAll('#tabsContainer .tab-btn');
        var capabilityCards = document.querySelectorAll('.tab-content-wrapper .capability-card');

        tabButtons.forEach(function(btn) {
            var handleTab = function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                tabButtons.forEach(function(b) { b.classList.remove('active'); });
                btn.classList.add('active');

                var selectedTab = 'tab-' + btn.getAttribute('data-tab');
                capabilityCards.forEach(function(card) {
                    if (card.id === selectedTab) {
                        card.classList.add('active');
                        card.style.setProperty('display', 'block', 'important');
                    } else {
                        card.classList.remove('active');
                        card.style.setProperty('display', 'none', 'important');
                    }
                });
            };

            btn.addEventListener('click', handleTab);
            btn.addEventListener('touchstart', handleTab, { passive: false });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startInteractivity);
    } else {
        startInteractivity();
    }
})();
const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "06629a63-bacc-4de0-8caf-cad58568107b");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});
