import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const THROTTLE_PERIOD = 1000;
const CURRENT_TIME_KEY = 'videoplayer-current-time';
const player = new Player(document.querySelector('#vimeo-player'));

// ставим текущую позицию воспроизведения
const playerCurrentTime = localStorage.getItem(CURRENT_TIME_KEY);
player.setCurrentTime(playerCurrentTime || 0);

player.on(
  'timeupdate',
  throttle(
    // сохраняем текущую позицию воспроизведения
    ({ seconds }) => localStorage.setItem(CURRENT_TIME_KEY, seconds),
    THROTTLE_PERIOD
  )
);
