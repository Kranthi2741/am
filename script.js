document.getElementById('viewGalleryBtn').addEventListener('click', function () {
    document.querySelector('.greeting-screen').classList.add('hidden');
    document.querySelector('.gallery-screen').classList.remove('hidden');

    const bgMusic = document.getElementById('bgMusic');
    bgMusic.play().catch(error => {
        console.log('Autoplay was prevented. User interaction is required to play the audio.');
    });
});
