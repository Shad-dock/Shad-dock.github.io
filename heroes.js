// ================================================================
//  heroes.js — ДАННЫЕ ГЕРОЕВ И ОКОШКО СНИЗУ
// ================================================================

// ================================================================
//  1. ДАННЫЕ ГЕРОЕВ
// ================================================================

const heroes = [
    {
        name: 'Герц-динозаврик',
        image: 'images/Герц-динозаврик.png',
        description: 'Древний и мудрый. Любит собирать пазлы и мечтать о прошлых эпохах.',
        tags: ['Динозавры', 'Мудрость', 'Приключения']
    },
    {
        name: 'Герц-ведьма',
        image: 'images/Герц-ведьма.jpg',
        description: 'Таинственный и загадочный. Разбирается в зельях и магии.',
        tags: ['Магия', 'Загадочность', 'Зелья']
    },
    {
        name: 'Герц-кухарка',
        image: 'images/Герц-кухарка.jpg',
        description: 'Король кухни! Готовит самые вкусные блюда. Его гречка — легенда!',
        tags: ['Кулинария', 'Уют', 'Вкуснота']
    },
    {
        name: 'Герц-гонщик',
        image: 'images/Герц-гонщик.jpg',
        description: 'Скорость и адреналин — его второе имя. Всегда первый на финише!',
        tags: ['Скорость', 'Адреналин', 'Гонки']
    },
    {
        name: 'Герц-рыбак',
        image: 'images/Герц-рыбак.png',
        description: 'Спокойный и терпеливый. Знает все секреты хорошего клёва.',
        tags: ['Рыбалка', 'Терпение', 'Природа']
    },
    {
        name: 'Герц-гопник',
        image: 'images/Герц-гопник.jpg',
        description: 'Серьёзный и брутальный. Всегда стоит на страже порядка по-своему.',
        tags: ['Брутальность', 'Музыка', 'Стиль']
    },
    {
        name: 'Герц-авторитет',
        image: 'images/Герц-авторитет.png',
        description: 'Величественный и уважаемый. Знает ответы на все вопросы.',
        tags: ['Авторитет', 'Мудрость', 'Лидерство']
    },
    {
        name: 'Герц-романтик',
        image: 'images/Герц-романтик.jpg',
        description: 'Мечтатель и поэт. Пишет стихи о любви и дарит полевые цветы.',
        tags: ['Романтика', 'Поэзия', 'Красота']
    },
    {
        name: 'Герц-китайский фермер',
        image: 'images/Герц-китайский фермер.jpg',
        description: 'Трудолюбивый и мудрый. Выращивает лучший рис. Всегда с улыбкой.',
        tags: ['Трудолюбие', 'Природа', 'Гармония']
    },
    {
        name: 'Герц-Сулейман',
        image: 'images/Герц-Сулейман.jpg',
        description: 'Великий правитель и стратег. Мудрый и справедливый.',
        tags: ['Стратегия', 'Мудрость', 'Величие']
    },
    {
        name: 'Герц с пионом',
        image: 'images/Герц с пионом.png',
        description: 'Нежный и изысканный. Любит цветы и красивые вещи.',
        tags: ['Изысканность', 'Искусство', 'Красота']
    },
    {
        name: 'Башкирский Герц',
        image: 'images/Башкирский Герц.png',
        description: 'Гордый и свободный. Хранит традиции своего народа.',
        tags: ['Традиции', 'Свобода', 'Культура']
    },
    {
        name: 'Герц-пчёлка-труженица',
        image: 'images/Герц-пчёлка-труженица.jpg',
        description: 'Неутомимый и энергичный! Всё успевает и заряжает всех.',
        tags: ['Трудолюбие', 'Энергия', 'Забота']
    },
    {
        name: 'Герц-ленивая пчёлка',
        image: 'images/Герц-ленивая пчёлка.jpg',
        description: 'Предпочитает отдыхать и наслаждаться жизнью.',
        tags: ['Лень', 'Уют', 'Наслаждение']
    },
    {
        name: 'Мистический Герц',
        image: 'images/Мистический Герц.jpg',
        description: 'Окутан тайнами и загадками. Связывает миры и реальности.',
        tags: ['Мистика', 'Таинственность', 'Загадки']
    },
    {
        name: 'Герц-забыл',
        image: 'images/Герц-забыл.jpg',
        description: 'Рассеянный и задумчивый. Вечно что-то ищет и вспоминает.',
        tags: ['Рассеянность', 'Задумчивость', 'Улыбка']
    },
    {
        name: 'Герц-велосипедист',
        image: 'images/Герц-велосипедист.jpg',
        description: 'Покоряет дороги и расстояния. Любит свободу и ветер.',
        tags: ['Свобода', 'Путешествия', 'Активность']
    },
    {
        name: 'Ищущий терпения Герц',
        image: 'images/Ищущий терпения Герц.jpg',
        description: 'Учится терпению и пониманию. Всё в этом мире — к лучшему.',
        tags: ['Терпение', 'Гармония', 'Поиск']
    },
    {
        name: 'Татарский Герц',
        image: 'images/Татарский Герц.jpg',
        description: 'Гостеприимный и щедрый. Любит чак-чак и дружные застолья.',
        tags: ['Гостеприимство', 'Традиции', 'Дружба']
    },
    {
        name: 'Бонусный Герц',
        image: 'images/Бонусный Герц.jpg',
        description: 'Сюрприз! Появляется неожиданно и приносит радость.',
        tags: ['Сюрприз', 'Радость', 'Волшебство']
    },
    {
        name: 'СуперГерц',
        image: 'images/СуперГерц.jpg',
        description: 'Настоящий герой! Спасает мир от скуки и серости.',
        tags: ['Героизм', 'Сила', 'Вдохновение']
    },
    {
        name: 'Герц-уфимский шмель',
        image: 'images/Герц-уфимский шмель.jpg',
        description: 'Самый трудолюбивый и местный герой. Всегда жужжит от счастья!',
        tags: ['Родной край', 'Трудолюбие', 'Счастье']
    },
     {
        name: 'Герц-милашка',
        image: 'images/Герц-милашка.jpg',
        description: 'Самое милое создание во вселенной! Всегда готов обнять, утешить и подарить тепло.',
        tags: ['Милота', 'Доброта', 'Улыбка']
    }
];

// ================================================================
//  2. ОКОШКО СНИЗУ — ЛОГИКА
// ================================================================

const sheet = document.getElementById('bottomSheet');
const overlay = document.getElementById('bottomSheetOverlay');
const closeBtn = document.getElementById('bottomSheetClose');
const sheetImage = document.getElementById('sheetImage');
const sheetName = document.getElementById('sheetName');
const sheetDescription = document.getElementById('sheetDescription');
const sheetTags = document.getElementById('sheetTags');

function openSheet(hero) {
    sheetImage.src = hero.image;
    sheetName.textContent = hero.name;
    sheetDescription.textContent = hero.description;
    
    sheetTags.innerHTML = '';
    hero.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'bottom-sheet-tag';
        span.textContent = '#' + tag;
        sheetTags.appendChild(span);
    });
    
    sheet.classList.add('show');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeSheet() {
    sheet.classList.remove('show');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
}

// Закрытие по крестику
closeBtn.addEventListener('click', closeSheet);

// Закрытие по клику на фон
overlay.addEventListener('click', closeSheet);

// Закрытие по ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeSheet();
    }
});

// ================================================================
//  3. КЛИК НА ИМЕНА В СПИСКЕ
// ================================================================

function addClickToParticipants() {
    const tags = document.querySelectorAll('.participant-tag');
    tags.forEach((tag, index) => {
        const newTag = tag.cloneNode(true);
        tag.parentNode.replaceChild(newTag, tag);
        
        const hero = heroes[index];
        if (hero) {
            newTag.addEventListener('click', function() {
                openSheet(hero);
            });
        }
    });
}

window.addEventListener('load', function() {
    setTimeout(addClickToParticipants, 150);
});

// ================================================================
//  4. ПОБЕДИТЕЛЬ ПОСЛЕ КРУЧЕНИЯ
// ================================================================

const originalSpinWheel = window.spinWheel;

if (originalSpinWheel) {
    window.spinWheel = function() {
        originalSpinWheel.call(this);
        
        const statusObserver = new MutationObserver(function() {
            const statusText = status.textContent;
            if (statusText && statusText.includes('Сегодня ты —')) {
                const name = statusText.replace('🐈 Сегодня ты — ', '').replace('!', '').trim();
                const hero = heroes.find(h => h.name === name);
                if (hero) {
                    setTimeout(() => openSheet(hero), 700);
                }
                statusObserver.disconnect();
            }
        });
        
        statusObserver.observe(status, { childList: true, characterData: true, subtree: true });
    };
}

console.log('🐾 heroes.js загружен! Окошко снизу готово.');
