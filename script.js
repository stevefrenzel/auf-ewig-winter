(function () {
    'use strict';

    console.log("%cAUF EWIG WINTER", "color: #ec1e2e; font-size:30px; font-family:monospace;");
    
    const video = document.querySelector('#video');
    const gridContainer = document.querySelector('.grid-container');
    const artistLink = document.querySelector('#artist-link');
    const legalNoticeLink = document.querySelector('#legal-notice-link');
    const artistModal = document.querySelector('#artist-modal');
    const legalNoticeModal = document.querySelector('#legal-notice-modal');

    const addBlur = () => { gridContainer.classList.add('blur'); };

    const removeBlur = () => { gridContainer.classList.remove('blur'); };

    const pauseVideo = () => { video.pause(); };

    const playVideo = () => { video.play(); };

    artistLink.addEventListener('click', () => {
        pauseVideo();
        addBlur();
        artistModal.classList.remove('hidden');
        artistModal.classList.add('z-index');
    });

    legalNoticeLink.addEventListener('click', () => {
        pauseVideo();
        addBlur();
        legalNoticeModal.classList.remove('hidden');
        legalNoticeModal.classList.add('z-index');
    });

    artistModal.addEventListener('click', () => {
        playVideo();
        removeBlur();
        artistModal.classList.add('hidden');
        artistModal.classList.remove('z-index');
    });

    legalNoticeModal.addEventListener('click', () => {
        playVideo();
        removeBlur();
        legalNoticeModal.classList.add('hidden');
        legalNoticeModal.classList.remove('z-index');
    });

})();