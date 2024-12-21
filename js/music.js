const musicButton = document.getElementById('musicButton');
const audio = document.getElementById('jingleBells');

musicButton.addEventListener('click', () => {
  if (audio.paused) {
    // Проверяем, остановлено ли воспроизведение
    audio.play();
    musicButton.textContent = 'Пауза'; // Меняем текст кнопки на "Пауза"
  } else {
    audio.pause();
    musicButton.textContent = 'Нажми, чтобы увидеть Деда Мороза'; // Возвращаем исходный текст
  }
});
