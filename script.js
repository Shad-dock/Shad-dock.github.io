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
    'Башкирский Герц.png',
    'Герц-пчёлка-труженица.jpg',
    'Герц-ленивая пчёлка.jpg',
    'Мистический Герц.jpg',
    'Герц-забыл.jpg',
    'Герц-велосипедист.jpg',
    'Ищущий терпения Герц.jpg',
    'Татарский Герц.jpg',
    'Бонусный Герц.jpg',
    'СуперГерц.jpg',
    'Герц-уфимский шмель.jpg'
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
    spinBtn.textContent = '🙀 Крутится...';
    status.textContent = '😸 Вращаем барабан!';
    
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
/* ============================================
   МОДАЛЬНОЕ ОКНО (карточка героя)
   ============================================ */

.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(8px);
    animation: fadeIn 0.3s ease;
}

.modal.show {
    display: flex;
    align-items: center;
    justify-content: center;
}

@keyframes fadeIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
}

.modal-content {
    background: linear-gradient(145deg, #1a1a3e, #2a2a5a);
    border-radius: 24px;
    max-width: 500px;
    width: 90%;
    padding: 30px;
    position: relative;
    border: 1px solid rgba(255, 215, 0, 0.2);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
}

.modal-close {
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 2.5rem;
    color: #fff;
    cursor: pointer;
    transition: 0.3s;
    line-height: 1;
}

.modal-close:hover {
    color: #ffd700;
    transform: rotate(90deg);
}

.modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.modal-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid #ffd700;
    box-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
    flex-shrink: 0;
}

.modal-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.modal-info {
    text-align: center;
    color: #fff;
}

.modal-info h2 {
    font-size: 2rem;
    color: #ffd700;
    margin-bottom: 10px;
}

.modal-info p {
    font-size: 1.1rem;
    color: #ccc;
    line-height: 1.6;
    margin-bottom: 15px;
}

#modalTags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
}

.modal-tag {
    background: rgba(255, 215, 0, 0.15);
    padding: 4px 14px;
    border-radius: 15px;
    border: 1px solid rgba(255, 215, 0, 0.2);
    font-size: 0.8rem;
    color: #ffd700;
}

@media (max-width: 480px) {
    .modal-content {
        padding: 20px;
    }
    .modal-image {
        width: 120px;
        height: 120px;
    }
    .modal-info h2 {
        font-size: 1.5rem;
    }
}
