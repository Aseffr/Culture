document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quizForm');
    const submitBtn = document.getElementById('submitQuiz');
    const quizResult = document.getElementById('quizResult');
    const scoreElement = document.getElementById('score');
    const resultText = document.getElementById('resultText');
    
    // Правильные ответы
    const correctAnswers = {
        q1: 'a', // Искандеркуль
        q2: 'a', // Навруз
        q3: 'b', // Памир
        q4: 'c', // Курта
        q5: 'b'  // Рубоб
    };
    
    // Обработчик отправки теста
    submitBtn.addEventListener('click', function() {
        let score = 0;
        const userAnswers = {};
        
        // Собираем ответы пользователя
        for (let i = 1; i <= 5; i++) {
            const questionName = 'q' + i;
            const selectedOption = quizForm.elements[questionName];
            
            if (selectedOption) {
                userAnswers[questionName] = selectedOption.value;
            }
        }
        
        // Проверяем ответы
        for (const question in correctAnswers) {
            if (userAnswers[question] === correctAnswers[question]) {
                score++;
            }
        }
        
        // Показываем результат
        scoreElement.textContent = score;
        quizResult.classList.remove('hidden');
        
        // Формируем текст результата
        if (score === 5) {
            resultText.textContent = 'Отлично! Вы прекрасно знаете культуру Таджикистана!';
        } else if (score >= 3) {
            resultText.textContent = 'Хорошо! Но есть куда стремиться.';
        } else {
            resultText.textContent = 'Попробуйте еще раз и внимательно изучите материалы!';
        }
        
        // Прокручиваем к результату
        quizResult.scrollIntoView({ behavior: 'smooth' });
    });
});