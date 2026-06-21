/* ==========================================================================
   PREMIUM PORTFOLIO INTERACTIVE SCRIPT - BY OSMAN AL ALI
   ========================================================================== */

(function() {
    function startInteractivity() {
        // --- 1. تشغيل وتفعيل كبسة منيو الهامبرغر للموبايل وسحبها بسلاسة ---
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

        // --- 2. تفعيل نظام كبسات أزرار التبويب الثلاثة للتنقل الفوري بين الكروت ---
        var tabButtons = document.querySelectorAll('#tabsContainer .tab-btn');
        var capabilityCards = document.querySelectorAll('.tab-content-wrapper .capability-card');

        tabButtons.forEach(function(btn) {
            var handleTab = function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // تنظيف الكلاس النشط القديم من الأزرار الثلاثة
                tabButtons.forEach(function(b) { b.classList.remove('active'); });
                btn.classList.add('active');

                // تنقل الكروت الفوري المضمون رغماً عن تعليق المتصفحات
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

    // تشغيل الدالات البرمجية فورا بأعلى سرعة وحماية من الكاش بمجرد تحميل الصفحة
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startInteractivity);
    } else {
        startInteractivity();
    }
})();
