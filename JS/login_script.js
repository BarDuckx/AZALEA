document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (email === 'admin@example.com' && password === 'password') {
        alert('Успешный вход!');
    } else {
        errorMessage.classList.remove('d-none');
        errorMessage.textContent = 'Неверный email или пароль.';
    }
});

const toggleFormLink = document.getElementById('toggleForm');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const formTitle = document.getElementById('formTitle');

toggleFormLink.addEventListener('click', function (e) {
    e.preventDefault();

    if (loginForm.classList.contains('active-form')) {
        // Переключаемся на форму регистрации
        loginForm.classList.add('d-none');
        loginForm.classList.remove('active-form');
        registerForm.classList.remove('d-none');
        registerForm.classList.add('active-form');
        formTitle.textContent = 'Регистрация';
        toggleFormLink.textContent = 'Уже есть аккаунт? Войти';
    } else {
        // Переключаемся на форму входа
        registerForm.classList.add('d-none');
        registerForm.classList.remove('active-form');
        loginForm.classList.remove('d-none');
        loginForm.classList.add('active-form');
        formTitle.textContent = 'Вход';
        toggleFormLink.textContent = 'Нет аккаунта? Зарегистрироваться';
    }
});

document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const regEmail = document.getElementById('regEmail').value;
    const regPassword = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const registerErrorMessage = document.getElementById('registerErrorMessage');

    if (regPassword !== confirmPassword) {
        registerErrorMessage.classList.remove('d-none');
        registerErrorMessage.textContent = 'Пароли не совпадают.';
    } else {
        alert('Регистрация успешна!');
        // Очистить форму
        document.getElementById('registerForm').reset();
        registerErrorMessage.classList.add('d-none');
        // Переключиться обратно на форму входа
        toggleFormLink.click();
    }
});
