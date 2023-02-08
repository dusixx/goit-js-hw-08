import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const THROTTLE_PERIOD = 1000;
const CURRENT_TIME_KEY = 'videoplayer-current-time';

// Player instance
const player = new Player(document.querySelector('#vimeo-player'));

// восстанавливаем текущую позицию воспроизведения
player.setCurrentTime(localStorage.getItem(CURRENT_TIME_KEY) || 0);

player.on(
  'timeupdate',
  throttle(
    // сохраняем текущую позицию воспроизведения
    ({ seconds }) => localStorage.setItem(CURRENT_TIME_KEY, seconds),
    THROTTLE_PERIOD
  )
);
