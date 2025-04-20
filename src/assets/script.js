document.addEventListener('DOMContentLoaded', () => {

  document.querySelector('.next').addEventListener('click', (event) => {
    showError('');

    const nextStep = event.target.getAttribute('data-next-step');
    const response = document.getElementById('response')?.value;
    const nextPage = pages[nextStep];
    const checkMethod = checkMethods[nextStep - 1];

    if (checkMethod(response)) {
      document.location.replace(nextPage);
    }
    else {
      showError("Tu t'es trompé, essaye encore");
    }
  });
});


const showError = (error) => {
  var errorDiv = document.getElementById('error');
  if (errorDiv) {
    errorDiv.innerHTML = error;
  }
}

const noCheck = () => {
  return true;
}

const checkStep1 = (response) => {
  return response.trim().toLowerCase() === 'enveloppe';
}

const checkStep2 = (response) => {
  return parseInt(response) === 11;
}

const checkStep3 = (response) => {
  return response.trim().toLowerCase() === 'allemagne';
}

const checkStep4 = (response) => {
  return parseInt(response) === 9;
}

const checkStep5 = (response) => {
  return response.trim().toLowerCase() === 'tom';
}

const checkStep6 = (response) => {
  return parseInt(response) === 41;
}

const checkStep7 = (response) => {
  return response.trim().toLowerCase().indexOf('fils') >= 0;
}

const checkStep8 = (response) => {
  return parseInt(response) === 60;
}

const checkStep9 = (response) => {
  return parseInt(response) === 65;
}

const pages = [
  'index.html',
  'step1.html',
  'step2.html',
  'step3.html',
  'step4.html',
  'step5.html',
  'step6.html',
  'step7.html',
  'step8.html',
  'step9.html',
  'step10.html'
]

const checkMethods = [
  noCheck,
  checkStep1,
  checkStep2,
  checkStep3,
  checkStep4,
  checkStep5,
  checkStep6,
  checkStep7,
  checkStep8,
  checkStep9
]