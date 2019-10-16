(function () {
    'use strict';

    console.log("%cAUF EWIG WINTER", "color: #ec1e2e; font-size:30px; font-family:monospace;");
    
    const video = document.querySelector('#video');
    const gridContainer = document.querySelector('.grid-container');
    const artistLink = document.querySelector('#artist-link');
    const legalNoticeLink = document.querySelector('#legal-notice-link');
    const artistModal = document.querySelector('#artist-modal');
    const legalNoticeModal = document.querySelector('#legal-notice-modal');

    // EFFECTS

    const addBlur = () => {
        gridContainer.classList.add('blur');
    };

    const removeBlur = () => {
        gridContainer.classList.remove('blur');
    };

    const pauseVideo = () => {
        video.pause();
    };

    const playVideo = () => {
        video.play();
    };

    // LINKS

    artistLink.addEventListener('click', () => {
        pauseVideo();
        addBlur();
        artistModal.classList.remove('low-z-index');
        artistModal.classList.add('high-z-index');
    });

    legalNoticeLink.addEventListener('click', () => {
        pauseVideo();
        addBlur();
        legalNoticeModal.classList.remove('low-z-index');
        legalNoticeModal.classList.add('high-z-index');
    });

    // MODALS

    artistModal.addEventListener('click', () => {
        playVideo();
        removeBlur();
        artistModal.classList.remove('high-z-index');
        artistModal.classList.add('low-z-index');
    });

    legalNoticeModal.addEventListener('click', () => {
        playVideo();
        removeBlur();
        legalNoticeModal.classList.remove('high-z-index');
        legalNoticeModal.classList.add('low-z-index');
    });

})();