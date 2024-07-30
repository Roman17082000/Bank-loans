document.addEventListener('DOMContentLoaded', () => {
    const applyButtons = document.querySelectorAll('.apply-btn');
    const applyButtonsMedia = document.querySelectorAll('.apply-btn-media');
    const tableRows = document.querySelectorAll('.table-row'); // Исправление здесь
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    const form = document.getElementById('application-form');

    const openModal = () => {
        modal.classList.add('show');
        const modalContent = modal.querySelector('.modal-content');
        modalContent.classList.add('show');
    };

    applyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            openModal();
        });
    });

    applyButtonsMedia.forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            openModal();
        });
    });

    tableRows.forEach(row => {
        row.addEventListener('click', () => {
            openModal();
        });
    });

    closeBtn.addEventListener('click', () => {
        const modalContent = modal.querySelector('.modal-content');
        modalContent.classList.remove('show');
        setTimeout(() => modal.classList.remove('show'), 300);
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            const modalContent = modal.querySelector('.modal-content');
            modalContent.classList.remove('show');
            setTimeout(() => modal.classList.remove('show'), 300);
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const contact = document.getElementById('contact').value;
        console.log('Имя:', name);
        console.log('Контактная информация:', contact);
        const modalContent = modal.querySelector('.modal-content');
        modalContent.classList.remove('show');
        setTimeout(() => modal.classList.remove('show'), 300);
    });
});
