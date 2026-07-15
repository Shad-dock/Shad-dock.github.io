// ================================================================
//  heroes.js — ДАННЫЕ ГЕРОЕВ И ЛОГИКА МОДАЛКИ
//  Подключается после script.js
// ================================================================

// ================================================================
//  1. ДАННЫЕ ГЕРОЕВ (фото, описание, теги)
// ================================================================

const heroes = [
    {
        name: 'Герц-динозаврик',
        image: 'images/Герц-динозаврик.png',
        description: 'Древний и мудрый. Любит собирать пазлы и мечтать о прошлых эпохах. Всегда готов поделиться древней мудростью!',
        tags: ['Динозавры', 'Мудрость', 'Приключения']
    },
    {
        name: 'Герц-ведьма',
        image: 'images/Герц-ведьма.jpg',
        description: 'Таинственная и загадочная. Разбирается в зельях, астрологии и магии. Умеет создавать волшебную атмосферу.',
        tags: ['Магия', 'Загадочность', 'Зелья']
    },
    {
        name: 'Герц-кухарка',
        image: 'images/Герц-кухарка.jpg',
        description: 'Королева кухни! Готовит самые вкусные блюда и всегда угощает всех. Её пироги — легенда!',
        tags: ['Кулинария', 'Уют', 'Вкуснота']
    },
    {
        name: 'Герц-гонщик',
        image: 'images/Герц-гонщик.jpg',
        description: 'Скорость и адреналин — его второе имя. Всегда первый на финише и готов к любым гонкам!',
        tags: ['Скорость', 'Адреналин', 'Гонки']
    },
    {
        name: 'Герц-рыбак',
        image: 'images/Герц-рыбак.png',
        description: 'Спокойный и терпеливый. Знает все секреты хорошего клёва и любит тихие вечера у воды.',
        tags: ['Рыбалка', 'Терпение', 'Природа']
    },
    {
        name: 'Герц-гопник',
        image: 'images/Герц-гопник.jpg',
        description: 'Серьёзный и брутальный. Всегда стоит на страже порядка по-своему. Разбирается в музыке и стиле.',
        tags: ['Брутальность', 'Музыка', 'Стиль']
    },
    {
        name: 'Герц-авторитет',
        image: 'images/Герц-авторитет.png',
        description: 'Величественный и уважаемый. Все прислушиваются к его мнению. Знает ответы на все вопросы.',
        tags: ['Авторитет', 'Мудрость', 'Лидерство']
    },
    {
        name: 'Герц-романтик',
        image: 'images/Герц-романтик.jpg',
        description: 'Мечтатель и поэт. Пишет стихи о любви, дарит цветы и видит прекрасное в мелочах. Вдохновляет всех вокруг.',
        tags: ['Романтика', 'Поэзия', 'Красота']
    },
    {
        name: 'Герц-китайский фермер',
        image: 'images/Герц-китайский фермер.jpg',
        description: 'Трудолюбивый и мудрый. Выращивает лучший рис и знает все секреты земли. Всегда с улыбкой на лице.',
        tags: ['Трудолюбие', 'Природа', 'Гармония']
    },
    {
        name: 'Герц-Сулейман',
        image: 'images/Герц-Сулейман.jpg',
        description: 'Великий правитель и стратег. Мудрый и справедливый. Знает, как управлять миром и сохранять баланс.',
        tags: ['Стратегия', 'Мудрость', 'Величие']
    },
    {
        name: 'Герц с пионом',
        image: 'images/Герц с пионом.png',
        description: 'Нежный и изысканный. Любит цветы, искусство и красивые вещи. Умеет ценить моменты радости.',
        tags: ['Изысканность', 'Искусство', 'Красота']
    },
    {
        name: 'Башкирский Герц',
        image: 'images/Башкирский Герц.png',
        description: 'Гордый и свободный. Хранит традиции и культуру своего народа. Обожает кумыс и бескрайние степи.',
        tags: ['Традиции', 'Свобода', 'Культура']
    },
    {
        name: 'Герц-пчёлка-труженица',
        image: 'images/Герц-пчёлка-труженица.jpg',
        description: 'Неутомимая и энергичная! Вечно в движении, всё успевает и заряжает всех своей активностью.',
        tags: ['Трудолюбие', 'Энергия', 'Забота']
    },
    {
        name: 'Герц-ленивая пчёлка',
        image: 'images/Герц-ленивая пчёлка.jpg',
        description: 'Предпочитает отдыхать и наслаждаться жизнью. Знает, что расслабление — тоже важная часть успеха.',
        tags: ['Лень', 'Уют', 'Наслаждение']
    },
    {
        name: 'Мистический Герц',
        image: 'images/Мистический Герц.jpg',
        description: 'Окутан тайнами и загадками. Связывает миры и реальности. Его появление всегда неожиданно.',
        tags: ['Мистика', 'Таинственность', 'Загадки']
    },
    {
        name: 'Герц-забыл',
        image: 'images/Герц-забыл.jpg',
        description: 'Рассеянный и задумчивый. Вечно что-то ищет и вспоминает. Обладает уникальной способностью забывать всё на свете.',
        tags: ['Рассеянность', 'Задумчивость', 'Улыбка']
    },
    {
        name: 'Герц-велосипедист',
        image: 'images/Герц-велосипедист.jpg',
        description: 'Покоряет дороги и расстояния. Любит свободу, ветер и приключения. Всегда в поиске новых маршрутов.',
        tags: ['Свобода', 'Путешествия', 'Активность']
    },
    {
        name: 'Ищущий терпения Герц',
        image: 'images/Ищущий терпения Герц.jpg',
        description: 'В поиске гармонии и спокойствия. Учится терпению и пониманию. Знает, что всё в этом мире — к лучшему.',
        tags: ['Терпение', 'Гармония', 'Поиск']
    },
    {
        name: 'Татарский Герц',
        image: 'images/Татарский Герц.jpg',
        description: 'Гостеприимный и щедрый. Хранит традиции и культуру татарского народа. Любит чак-чак и дружные застолья.',
        tags: ['Гостеприимство', 'Традиции', 'Дружба']
    },
    {
        name: 'Бонусный Герц',
        image: 'images/Бонусный Герц.jpg',
        description: 'Сюрприз! Появляется неожиданно и всегда приносит радость. У него есть особый талант делать счастливыми.',
        tags: ['Сюрприз', 'Радость', 'Волшебство']
    },
    {
        name: 'СуперГерц',
        image: 'images/СуперГерц.jpg',
        description: 'Настоящий герой! Спасает мир от скуки и серости. Обладает сверхспособностями и сияющей улыбкой.',
        tags: ['Героизм', 'Сила', 'Вдохновение']
    },
    {
        name: 'Герц-уфимский шмель',
        image: 'images/Герц-уфимский шмель.jpg',
        description: 'Самый трудолюбивый и местный герой. Любит родной город, мёд и солнечные дни. Всегда жужжит от счастья!',
        tags: ['Родной край', 'Трудолюбие', 'Счастье']
    }
];

// ================================================================
//  2. ЛОГИКА МОДАЛЬНОГО ОКНА
// ================================================================

const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const modalImage = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalDescription = document.getElementById('modalDescription');
const modalTags = document.getElementById('modalTags');

function openModal(hero) {
    modalImage.src = hero.image;
    modalName.textContent = hero.name;
    modalDescription.textContent = hero.description;
    
    modalTags.innerHTML = '';
    hero.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'modal-tag';
        span.textContent = '#' + tag;
        modalTags.appendChild(span);
    });
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

// Закрытие по крестику
modalClose.addEventListener('click', closeModal);

// Закрытие по клику на фон
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModal();
    }
});

// Закрытие по ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ================================================================
//  3. ДОБАВЛЯЕМ КЛИК НА ИМЕНА В СПИСКЕ
//     (используем старую функцию displayParticipants)
// ================================================================

// Ждём, пока старый script.js создаст список
function addClickToParticipants() {
    const tags = document.querySelectorAll('.participant-tag');
    tags.forEach((tag, index) => {
        // Убираем старые обработчики, ставим новые
        const newTag = tag.cloneNode(true);
        tag.parentNode.replaceChild(newTag, tag);
        
        const hero = heroes[index];
        if (hero) {
            newTag.addEventListener('click', function() {
                openModal(hero);
            });
        }
    });
}

// Запускаем после загрузки страницы (старый скрипт уже отработал)
window.addEventListener('load', function() {
    // Даём время старому скрипту отрисовать список
    setTimeout(addClickToParticipants, 100);
});

// ================================================================
//  4. ОТКРЫВАЕМ КАРТОЧКУ ПОБЕДИТЕЛЯ ПОСЛЕ КРУЧЕНИЯ
//     (переопределяем финал spinWheel)
// ================================================================

// Сохраняем оригинальную функцию spinWheel
const originalSpinWheel = window.spinWheel;

if (originalSpinWheel) {
    // Переопределяем spinWheel
    window.spinWheel = function() {
        // Вызываем оригинальную функцию
        originalSpinWheel.call(this);
        
        // Но нам нужно перехватить момент, когда она завершится
        // Для этого подписываемся на изменения статуса
        const statusObserver = new MutationObserver(function() {
            const statusText = status.textContent;
            if (statusText && statusText.includes('Сегодня ты —')) {
                // Находим имя победителя
                const name = statusText.replace('🐈 Сегодня ты — ', '').replace('!', '').trim();
                const hero = heroes.find(h => h.name === name);
                if (hero) {
                    setTimeout(() => openModal(hero), 800);
                }
                statusObserver.disconnect();
            }
        });
        
        statusObserver.observe(status, { childList: true, characterData: true, subtree: true });
    };
}

console.log('🐾 heroes.js загружен! Карточки героев готовы.');
