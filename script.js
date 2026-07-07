// Список всех фотографий (автоматически загружается из папки)
// ВАЖНО: Добавьте сюда имена всех ваших фото!
const imageNames = [
    'Герц-динозаврик.png',
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
    
    // Выбираем финальное фото заранее
    const finalImage = getRandomImage();
    
    // Количество прокруток (увеличим для красоты)
    const totalSpins = 20 + Math.floor(Math.random() * 10); // 20-30 раз
    
    let currentStep = 0;
    
    // Функция одного "тика" анимации
    function tick() {
        // Показываем случайное фото
        const randomImage = getRandomImage();
        resultImage.src = `images/${randomImage}`;
        
        currentStep++;
        
        // Вычисляем задержку с плавным замедлением
        let delay;
        if (currentStep < totalSpins - 5) {
            // Первая часть - быстрая прокрутка
            delay = 80 + Math.random() * 30;
        } else if (currentStep < totalSpins - 2) {
            // Средняя часть - замедление
            const progress = (currentStep - (totalSpins - 5)) / 3;
            delay = 100 + progress * 150;
        } else {
            // Последние 2 шага - очень медленно
            delay = 300 + (currentStep - (totalSpins - 2)) * 200;
        }
        
        // Если ещё не дошли до конца - продолжаем
        if (currentStep < totalSpins) {
            setTimeout(tick, delay);
        } else {
            // ФИНАЛ - показываем заранее выбранное фото
            resultImage.src = `images/${finalImage}`;
            
            // Красивое имя без расширения
            const displayName = finalImage.replace(/\.[^.]+$/, '');
            status.textContent = `🐈 Сегодня ты — ${displayName}!`;
            
            // Убираем анимацию
            document.querySelector('.wheel-wrapper').classList.remove('spinning');
            
            // Разблокируем кнопку
            spinBtn.disabled = false;
            spinBtn.textContent = 'Крутить!';
        }
    }
    
    // Запускаем анимацию
    tick();
}

// Событие на кнопку
spinBtn.addEventListener('click', spinWheel);

// Отображаем участников при загрузке
displayParticipants();

console.log('🐈‍⬛ Барабан готов! Количество участников:', imageNames.length);
