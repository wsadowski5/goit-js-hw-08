import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const localStorageKey = 'videoplayer-current-time'

player.on('timeupdate', throttle((event) => {
    const currentTime = event.seconds;
    localStorage.setItem(localStorageKey, currentTime);
}, 1000)
)

const getCurrentTime = localStorage.getItem(localStorageKey)

console.log(getCurrentTime)

player.setCurrentTime(getCurrentTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

