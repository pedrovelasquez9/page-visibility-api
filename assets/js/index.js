const pageIsHidden = document.visibilityState;
const mediaObject = document.getElementById('video-player');

console.log(pageIsHidden);

document.addEventListener('visibilitychange', () => {
    console.log(document.visibilityState);
    if(document.hidden){
        mediaObject.pause();
    }
});