import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const THROTTLE_PERIOD = 1000;
const CURRENT_TIME_KEY = 'videoplayer-current-time';

const playerRef = document.querySelector('#vimeo-player');
const player = new Player(playerRef);

// ставим текущую позицию воспроизведения
const playerCurrentTime = localStorage.getItem(CURRENT_TIME_KEY);
player.setCurrentTime(playerCurrentTime || 0);

player.on(
  'timeupdate',
  throttle(
    // сохраняем текущую позицию воспроизведения
    data => localStorage.setItem(CURRENT_TIME_KEY, data.seconds),
    THROTTLE_PERIOD
  )
);
