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
    'Герц-уфимский шмель.jpg',
    'Герц-милашка.jpg',
    'Косячный Герц.jpg'
];

// Элементы DOM
const spinBtn = document.getElementById('spinBtn');
const resultImage = document.getElementById('resultImage');
const status = document.getElementById('status');
const participantList = document.getElementById('participantList');
const heroDescription = document.getElementById('heroDescription');

const shareBtn = document.getElementById('shareBtn');
let currentHero = null; // Храним текущего героя для шаринга

// Отладка кнопки
console.log('🔍 shareBtn найден:', shareBtn);
if (shareBtn) {
    console.log('✅ Кнопка существует');
    shareBtn.addEventListener('click', function() {
        console.log('🖱️ Клик по кнопке!');
        console.log('📦 currentHero:', currentHero);
    });
} else {
    console.error('❌ Кнопка не найдена! Проверь id="shareBtn" в index.html');
}

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
    heroDescription.classList.remove('show');
    heroDescription.textContent = '';
    
    spinBtn.disabled = true;
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

            const hero = heroes.find(h => h.name === displayName);
            if (hero) {
                currentHero = hero; // ⬅️ СОХРАНЯЕМ ГЕРОЯ
                console.log('✅ currentHero сохранён:', currentHero.name);
                
                heroDescription.textContent = `💭 ${hero.description}`;
                heroDescription.classList.add('show');

                shareBtn.style.display = 'inline-block';
                shareBtn.textContent = '📤 Поделиться результатом';
                shareBtn.className = 'share-btn';
            } else {
                heroDescription.textContent = '';
                heroDescription.classList.remove('show');
                shareBtn.style.display = 'none';
            }

            if (typeof fireConfetti === 'function') {
                fireConfetti();
                console.log('🎊 Конфетти вызваны из spinWheel!');
            } else {
                console.warn('⚠️ fireConfetti не найдена. Проверь подключение heroes.js');
            }
            
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

// ================================================================
//  ФУНКЦИИ ШАРИНГА
// ================================================================

// Копирование в буфер обмена + генерация картинки
shareBtn.addEventListener('click', async function() {
    if (!currentHero) return;
    
    // 1. Копируем текст в буфер обмена
    const shareText = `🐈 Сегодня ты — ${currentHero.name}! 💭 ${currentHero.description}`;
    
    try {
        await navigator.clipboard.writeText(shareText);
        shareBtn.textContent = '✅ Скопировано!';
        shareBtn.classList.add('copied');
        setTimeout(() => {
            shareBtn.textContent = '📤 Поделиться результатом';
            shareBtn.classList.remove('copied');
        }, 2000);
    } catch (err) {
        console.warn('Не удалось скопировать текст:', err);
        // Альтернативный способ
        const textarea = document.createElement('textarea');
        textarea.value = shareText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
        shareBtn.textContent = '✅ Скопировано!';
        shareBtn.classList.add('copied');
        setTimeout(() => {
            shareBtn.textContent = '📤 Поделиться результатом';
            shareBtn.classList.remove('copied');
        }, 2000);
    }
    
    // 2. Генерируем картинку для скачивания
    try {
        shareBtn.textContent = '🖼️ Генерируем картинку...';
        shareBtn.classList.add('downloading');
        
        const imageUrl = await generateHeroImage(currentHero);
        
        // Скачиваем картинку
        const link = document.createElement('a');
        link.download = `${currentHero.name}.png`;
        link.href = imageUrl;
        link.click();
        
        shareBtn.textContent = '📥 Скачано!';
        setTimeout(() => {
            shareBtn.textContent = '📤 Поделиться результатом';
            shareBtn.classList.remove('downloading');
        }, 2000);
        
    } catch (err) {
        console.error('Ошибка при создании картинки:', err);
        shareBtn.textContent = '❌ Ошибка';
        setTimeout(() => {
            shareBtn.textContent = '📤 Поделиться результатом';
            shareBtn.classList.remove('downloading');
        }, 2000);
    }
});

// ================================================================
//  ГЕНЕРАЦИЯ КАРТИНКИ (исправленная)
// ================================================================

function generateHeroImage(hero) {
    return new Promise((resolve, reject) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 800;
        canvas.height = 600;
        
        // 1. Фон (градиент)
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#1a1a2e');
        gradient.addColorStop(0.5, '#16213e');
        gradient.addColorStop(1, '#0f3460');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // 2. Рамка
        ctx.strokeStyle = '#ffd700';
        ctx.lineWidth = 6;
        ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
        
        // 3. Заголовок
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillStyle = '#ffd700';
        ctx.font = 'bold 44px Arial';
        ctx.fillText('🐈 Сегодня ты —', canvas.width / 2, 50);
        
        // 4. Имя героя
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 52px Arial';
        ctx.fillText(hero.name, canvas.width / 2, 115);
        
        // 5. Фото героя (исправлено!)
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = function() {
            const centerX = canvas.width / 2;
            const centerY = 340;
            const radius = 140;
            
            // Сохраняем контекст для обрезки
            ctx.save();
            
            // Создаём круглую маску
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
            ctx.closePath();
            ctx.clip();
            
            // Рисуем фото, сохраняя пропорции (cover)
            const imgRatio = img.width / img.height;
            const circleSize = radius * 2;
            let drawWidth, drawHeight, offsetX, offsetY;
            
            if (imgRatio > 1) {
                // Фото шире, чем круг — обрезаем по бокам
                drawHeight = circleSize;
                drawWidth = circleSize * imgRatio;
                offsetX = (drawWidth - circleSize) / 2;
                offsetY = 0;
            } else {
                // Фото выше, чем круг — обрезаем сверху/снизу
                drawWidth = circleSize;
                drawHeight = circleSize / imgRatio;
                offsetX = 0;
                offsetY = (drawHeight - circleSize) / 2;
            }
            
            ctx.drawImage(img, centerX - radius - offsetX, centerY - radius - offsetY, drawWidth, drawHeight);
            
            // Восстанавливаем контекст
            ctx.restore();
            
            // Рамка вокруг фото
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
            ctx.closePath();
            ctx.strokeStyle = '#ffd700';
            ctx.lineWidth = 5;
            ctx.stroke();
            
            // 6. Описание (без подвала!)
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
            ctx.fillStyle = '#c8c8e8';
            ctx.font = '22px Arial';
            
            // Перенос длинного текста
            const words = hero.description.split(' ');
            let lines = [];
            let currentLine = '';
            for (const word of words) {
                // Проверяем длину строки в пикселях (приблизительно)
                const testLine = currentLine + word + ' ';
                if (testLine.length > 42) {
                    lines.push(currentLine.trim());
                    currentLine = '';
                }
                currentLine += word + ' ';
            }
            if (currentLine.trim()) lines.push(currentLine.trim());
            
            // Если слишком много строк — обрезаем до 3
            if (lines.length > 3) lines = lines.slice(0, 3);
            
            const startY = 495;
            lines.forEach((line, index) => {
                ctx.fillText(line, canvas.width / 2, startY + index * 30);
            });
            
            // ПОДВАЛ УБРАН!
            
            resolve(canvas.toDataURL('image/png'));
        };
        
        img.onerror = function() {
            // Если фото не загрузилось — рисуем заглушку
            reject(new Error('Не удалось загрузить фото'));
        };
        
        img.src = hero.image;
    });
}

console.log('🐈‍⬛ Барабан готов! 4.0 Количество участников:', imageNames.length);
