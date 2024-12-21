const galleryList = document.querySelector('.gallery-list');
const items = document.querySelectorAll('.gallery-item');

// Клонируем элементы для бесконечного эффекта
items.forEach(item => {
  const clone = item.cloneNode(true);
  galleryList.appendChild(clone);
});

let scrollPosition = 0;

function autoScroll() {
  scrollPosition += 2; // Скорость прокрутки
  if (scrollPosition >= galleryList.scrollWidth / 2) {
    scrollPosition = 0; // Сбрасываем на начало
  }
  galleryList.scrollTo({
    left: scrollPosition,
    behavior: 'smooth', // Плавная прокрутка
  });

  requestAnimationFrame(autoScroll); // Рекурсивный вызов
}

// Запуск бесконечного скроллинга
autoScroll();
