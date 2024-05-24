// !(function () {
//     const form = document.getElementById("footer-form");
//     const username = document.getElementById("username");
//     const useremail = document.getElementById("useremail");
//     const userphone = document.getElementById("userphone");
  
//     // Показываем ошибку под полем
//     function showError(input, message) {
//       const formControl = input.parentElement;
//       formControl.className = "footer-form__item error";
//       const small = formControl.querySelector("small");
//       small.innerText = message;
//     }
  
//     // Показываем, что поле заполнено верно
//     function showSuccess(input) {
//       const formControl = input.parentElement;
//       formControl.className = "footer-form__item success";
//     }
  
//     // Проверяем адрес электронной почты на правильность
//     function checkEmail(input) {
//       const re = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;
//       if (re.test(input.value.trim())) {
//         showSuccess(input);
//       } else {
//         showError(input, "Адрес электронной почты имеет неверный формат");
//       }
//     }

//     // Проверяем телефон на правильность
//     function checkPhone(input) {
//         const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
//         if (re.test(input.value.trim())) {
//           showSuccess(input);
//         } else {
//           showError(input, "Телефон имеет неверный формат");
//         }
//       }
  
//     // Проверка обязательных полей
//     /**
//      *
//      * @param {HTMLElement[]} inputElements
//      * @returns {boolean}
//      */
//     function checkRequired(inputElements) {
//       let isRequired = false;
//       inputElements.forEach(function (input) {
//         if (input.value.trim() === "") {
//           showError(input, `Требуется задать значение для поля ${getFieldName(input)}`);
//           isRequired = true;
//         } else {
//           showSuccess(input);
//         }
//       });
  
//       return isRequired;
//     }
  
//     // Проверяем значение поля на соответствие минимальной и максимальной длине
//     function checkLength(input, min, max) {
//       if (input.value.length < min) {
//         showError(
//           input,
//           `Поле ${getFieldName(input)} должно быть длиной не менее ${min} символов`
//         );
//       } else if (input.value.length > max) {
//         showError(
//           input,
//           `Поле ${getFieldName(input)} не должно быть длиной более ${max} символов`
//         );
//       } else {
//         showSuccess(input);
//       }
//     }

  
//     // Получаем имя поля
//     function getFieldName(input) {
//       return input.id.charAt(0).toUpperCase() + input.id.slice(1);
//     }
  
//     // Устанавливаем слушатели событий на форму
//     form.addEventListener("submit", function (e) {
//       e.preventDefault();
      
//       if (checkRequired([username, userphone, useremail])) {
//         checkLength(username, 3, 15);
//         checkPhone(userphone);
//         checkEmail(useremail);
//       }
//       console.log("Письмо на почту компании: ",username.value,userphone.value,useremail.value)
//     });
  
//   })();

const form = document.getElementById('footer-form');
const usernameInput = document.getElementById('username');
const userphoneInput = document.getElementById('userphone');
const useremailInput = document.getElementById('useremail');
const errorMessages = document.querySelectorAll('.error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  let hasErrors = false;
  let message = '';

  // Validate username
  if(hasErrors == false){
    if (usernameInput.value.trim() === '' || usernameInput.value.length < 3 || usernameInput.value.length > 32) {
      usernameInput.classList.add('error');
      errorMessages[0].textContent = 'Имя должно быть длиной от 3 до 32 символов';
      hasErrors = true;
      errorMessages[0].style.visibility ="visible"
    } else {
      usernameInput.classList.remove('error');
      errorMessages[0].textContent = '';
      errorMessages[0].style.visibility ="hidden"
    }

    // Validate phone number (you can use a regular expression for more complex validation)
    if (userphoneInput.value.trim() === '' || !/^\s?(\+\s?7|8)([- ()]*\d){10}$/.test(userphoneInput.value)) {
      userphoneInput.classList.add('error');
      errorMessages[1].textContent = 'Введите номер телефона';
      hasErrors = true;
      errorMessages[1].style.visibility ="visible"
    } else {
      userphoneInput.classList.remove('error');
      errorMessages[1].textContent = '';
      errorMessages[1].style.visibility ="hidden"
    }

    // Validate email (you can use a regular expression for more complex validation)
    if (useremailInput.value.trim() === '' || !/^\S+@\S+\.\S+$/.test(useremailInput.value)) {
      useremailInput.classList.add('error');
      errorMessages[2].textContent = 'Введите корректный email';
      hasErrors = true;
      errorMessages[2].style.visibility ="visible"
    } else {
      useremailInput.classList.remove('error');
      errorMessages[2].textContent = '';
      errorMessages[2].style.visibility ="hidden"
    }``
  }

  if (!hasErrors) {
    // Build the message
    message = `Имя: ${usernameInput.value}\n`;
    message += `Телефон: ${userphoneInput.value}\n`;
    message += `Email: ${useremailInput.value}`;

    // Display the data in an alert
    alert(message);
    // form.submit();
  }
});