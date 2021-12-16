const modal = document.getElementById('modal-container');

function showModal() {
    modal.style.display = 'block';
};

function closeModal() {
    modal.style.display = 'none';
};

function initModal() {
    document.getElementById('close').addEventListener('click', closeModal);
};

initModal();