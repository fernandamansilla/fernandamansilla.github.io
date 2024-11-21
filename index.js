
        function showSection(sectionId) {
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                section.classList.remove('active');
            });

            const selectedSection = document.getElementById(sectionId);
            if (selectedSection) {
                selectedSection.classList.add('active');
            }
        }

        function scrollToExampleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const menuHeight = document.querySelector('.example-buttons-container').offsetHeight;
    const headerHeight = 60; // Adjust this value based on your header height

    if (section) {
        const topOffset = section.getBoundingClientRect().top + window.pageYOffset - menuHeight - headerHeight;
        window.scrollTo({top: topOffset, behavior: 'smooth'});
    }
}

        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // General function for text-based sections
        function toggleReasoning(link) {
    var section = link.closest('.toggle-section');
    var reasonings = section.querySelectorAll('.reasoning');
    var isHidden = reasonings[0].style.display === 'none';
    
    reasonings.forEach(function(reasoning) {
        reasoning.style.display = isHidden ? 'block' : 'none';
    });
    
    link.textContent = isHidden ? 'Hide reasoning' : 'Show reasoning';
}

// Keep the specific function for the figures section
function toggleNestedReasoning() {
    var reasonings = document.querySelectorAll('#nested-entities-examples .reasoning');
    var link = document.getElementById('toggle-nested-reasoning');
    var isHidden = reasonings[0].style.display === 'none';
    
    reasonings.forEach(function(reasoning) {
        reasoning.style.display = isHidden ? 'block' : 'none';
    });
    
    link.textContent = isHidden ? 'Hide reasoning' : 'Show reasoning';
}