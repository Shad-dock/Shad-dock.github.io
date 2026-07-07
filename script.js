// Список всех фотографий (автоматически загружается из папки)
// ВАЖНО: Добавьте сюда имена всех ваших фото!
const imageNames = [
    'Герц-динозаврик.jpg',
    'Герц-ведьма.jpg',
    'Герц-кухарка.jpg',
    'Герц-гонщик.jpg',
    'Герц-рыбак.png',
    'Герц-гопник.jpg',
    'Герц-авторитет.png',
    'Герц-романтик.jpg',
    'Герц-китайский фермер.jpg',
    'Герц-Сулейман.jpg',
    'Герц с пионом.png',
    'Башкирский Герц.png'
];

// Элементы DOM
const spinBtn = document.getElementById('spinBtn');
const resultImage = document.getElementById('resultImage');
const status = document.getElementById('status');
const participantList = document.getElementById('participantList');

// Показываем список участников
function displayParticipants() {
    participantList.innerHTML = '';
    imageNames.forEach(name => {
        const tag = document.createElement('span');
        tag.className = 'participant-tag';
        // Убираем расширение файла для красивого отображения
        const displayName = name.replace(/\.[^.]+$/, '');
        tag.textContent = displayName;
        participantList.appendChild(tag);
    });
}

// Функция для случайного выбора фото
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageNames.length);
    return imageNames[randomIndex];
}

// Функция вращения барабана
function spinWheel() {
    // Блокируем кнопку
    spinBtn.disabled = true;
    spinBtn.textContent = '🌀 Крутится...';
    status.textContent = '🎡 Вращаем барабан!';
    
    // Добавляем анимацию
    document.querySelector('.wheel-wrapper').classList.add('spinning');
    
    // Количество прокруток
    const spins = 15 + Math.floor(Math.random() * 10); // 15-25 раз
    
    let count = 0;
    const interval = setInterval(() => {
        // Показываем случайное фото
        const randomImage = getRandomImage();
        resultImage.src = `images/${randomImage}`;
        
        count++;
        
        // Замедляем под конец (эффект остановки)
        if (count >= spins) {
            clearInterval(interval);
            
            // Финальный выбор
            const finalImage = getRandomImage();
            resultImage.src = `images/${finalImage}`;
            
            // Красивое имя без расширения
            const displayName = finalImage.replace(/\.[^.]+$/, '');
            status.textContent = `🎉 Сегодня ты — ${displayName}!`;
            
            // Убираем анимацию
            document.querySelector('.wheel-wrapper').classList.remove('spinning');
            
            // Разблокируем кнопку
            spinBtn.disabled = false;
            spinBtn.textContent = '🔁 Крутить!';
        }
    }, 100 + (count > spins - 5 ? 50 * (count - spins + 5) : 0)); // Замедление в конце
}

// Событие на кнопку
spinBtn.addEventListener('click', spinWheel);

// Отображаем участников при загрузке
displayParticipants();

// Сообщаем о готовности
console.log('🎡 Барабан готов! Количество участников:', imageNames.length);
