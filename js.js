function showSection(sectionId) {
    // Esconde todas as seções
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Exibe apenas a seção correspondente
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}

// Exibe a primeira seção ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    showSection('sobre');
});