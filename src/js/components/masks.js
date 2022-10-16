// InputMask ===============================================
const formRequest = document.querySelector('.request__form');
const telSelector = formRequest.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+38(099) 999-9999');
inputMask.mask(telSelector);

// Validation ===============================================

// const validation = new JustValidate('.request__form');

// validation.addField('.request__input--name', [
//     {
//       rule: 'minLength',
//       value: 3,
//     },
//     {
//       rule: 'maxLength',
//       value: 30,
//     },
//     {
//       rule: 'required',
//       value: true,
//       errorMessage: 'Enter your name!'
//     }
//   ])
//   .addField('.request__input--email', [
//     {
//       rule: 'required',
//       value: true,
//       errorMessage: 'Email is required',
//     },
//     {
//       rule: 'email',
//       value: true,
//       errorMessage: 'Enter valid e-mail',
//     },
//   ])
//   .addField('.request__input--phone', [
//     {
//       rule: 'required',
//       value: true,
//       errorMessage: 'The phone is required',
//     },
//     {
//       rule: 'function',
//       validator: function() {
//         const phone = telSelector.inputmask.unmaskedvalue();
//         return phone.length === 10;
//       },
//       errorMessage: 'Enter valid phone number',
//     },
//   ]).onSuccess((event) => {
//     console.log('Validation passes and form submitted', event);

//     let formData = new FormData(event.target);

//     console.log(...formData);

//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           console.log('Sended');
//         }
//       }
//     }

//     xhr.open('POST', 'mail.php', true);
//     xhr.send(formData);

//     event.target.reset();
//   });