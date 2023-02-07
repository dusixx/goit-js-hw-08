import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const THROTTLE_PERIOD = 1000;
const playerRef = document.querySelector('#vimeo-player');
const player = new Player(playerRef);

// ставим текущую позицию воспроизведения
const playerCurrentTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(playerCurrentTime || 0);

player.on(
  'timeupdate',
  throttle(data => {
    // раз в секунду сохраняем текущую позицию воспроизведения
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, THROTTLE_PERIOD)
);
