document.addEventListener("DOMContentLoaded", () => {
    const thumb = document.querySelector('.thumb');
    const modal = document.getElementById('imgModal');
    const modalImg = modal.querySelector('.modal-img');
    const closeBtn = modal.querySelector('.modal-close');

    thumb.addEventListener('click', () => {
        const imgEl = thumb.querySelector('img');
        modalImg.src = imgEl.dataset.full || imgEl.src;
        modal.style.display = 'flex';
    });


    // 2) Close handlers
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    modal.addEventListener('click', e => {
        if (e.target === modal) modal.style.display = 'none';
    });
});