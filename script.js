
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
