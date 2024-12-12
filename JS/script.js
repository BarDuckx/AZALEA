// Получаем элемент кнопки и бокового меню
const toggleButton = document.getElementById('navbar-toggler');
const sideMenu = document.getElementById('side-menu');

// Обработчик клика на кнопку бургер-меню
toggleButton.addEventListener('click', () => {
    // Переключаем видимость меню
    sideMenu.classList.toggle('d-none');
    sideMenu.classList.toggle('show'); // Добавляем класс для анимации открытия
});

// Плавный скролл для якорных ссылок
document.querySelector('.nav-link[href="#block_2"]').addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector('#block_2');
    window.scrollTo({
        top: target.offsetTop - 65, // отступ от верхней части (например, высота header)
        behavior: 'smooth'
    });
});

document.querySelector('.nav-link[href="#bouquet_catalog"]').addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector('#bouquet_catalog');
    window.scrollTo({
        top: target.offsetTop - 113,
        behavior: 'smooth'
    });
});

document.querySelector('.nav-link[href="#block_4"]').addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector('#block_4');
    window.scrollTo({
        top: target.offsetTop - 113,
        behavior: 'smooth'
    });
});

document.getElementById('submitBtn').addEventListener('click', function (event) {
    // Получаем форму
    var form = document.getElementById('contactForm');

    // Проверяем, прошли ли все поля валидацию
    if (form.checkValidity()) {
        // Получаем значения полей формы
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        // Формируем URL для mailto с введенными данными
        var subject = "Новостная рассылка";
        var body = "Имя: " + name + "%0A" + "Email: " + email + "%0A" + "Сообщение: " + message;

        // Создаем ссылку mailto с параметрами
        var mailtoLink = "mailto:azaleaflower@mail.ru?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

        // Открываем почтовый клиент с созданной ссылкой
        window.location.href = mailtoLink;
    } else {
        // Если форма не прошла валидацию, показываем ошибку
        event.preventDefault(); // Останавливаем отправку формы
        form.classList.add('was-validated'); // Добавляем классы для отображения ошибок
    }
});

// Функция для обновления количества товаров в корзине
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').textContent = `(${cart.length})`;
}

// Функция для добавления товара в корзину
function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`Товар "${product.name}" добавлен в корзину!`);
}

// Обработчик клика на кнопке "Купить"
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();

    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const product = {
                id: button.dataset.id,
                name: button.dataset.name,
                price: button.dataset.price,
            };
            addToCart(product);
        });
    });
});

// Функция для отображения товаров в корзине
function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items'); // Убедитесь, что у вас есть контейнер с таким ID

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Корзина пуста</p>';
        return;
    }

    cartContainer.innerHTML = ''; // Очистить контейнер перед добавлением товаров
    cart.forEach((product) => {
        const productElement = document.createElement('div');
        productElement.className = 'cart-item';
        productElement.innerHTML = `
            <p><strong>${product.name}</strong></p>
            <p>Цена: ${product.price}</p>
            <button class="remove-button" data-id="${product.id}">Удалить</button>
        `;
        cartContainer.appendChild(productElement);
    });

    // Добавляем обработчик для кнопок "Удалить"
    const removeButtons = document.querySelectorAll('.remove-button');
    removeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            removeFromCart(button.dataset.id);
        });
    });
}

// Функция для удаления товара из корзины
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter((product) => product.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart(); // Обновляем корзину после удаления
    updateCartCount(); // Обновляем количество товаров в корзине
}

// Запускаем рендеринг корзины при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('Событие DOMContentLoaded успешно сработало!');
    // Здесь вызовите вашу основную функцию
    renderCart();
});
