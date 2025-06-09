document.addEventListener('DOMContentLoaded', () => {
  const steps = document.querySelectorAll('.step');
  const arrows = document.querySelectorAll('.arrow');
  const restartButton = document.getElementById('restart');

  let currentStep = 0;

  function resetFlow() {
    steps.forEach((step, index) => {
      step.classList.remove('active');
      step.style.display = index === 0 ? 'block' : 'none';
    });

    arrows.forEach((arrow, index) => {
      arrow.style.display = index === 0 ? 'block' : 'none';
    });

    currentStep = 0;
    steps[0].classList.add('active');
  }

  function showNextStep(index) {
    if (index < steps.length - 1) {
      steps[index + 1].style.display = 'block';
      steps[index + 1].classList.add('active');
      arrows[index + 1].style.display = 'block';
    }
  }

  steps.forEach((step, index) => {
    step.addEventListener('click', () => {
      if (index === currentStep) {
        currentStep++;
        showNextStep(index);
      }
    });
  });

  restartButton.addEventListener('click', resetFlow);

  // Inicia o fluxo com o primeiro passo visível
  resetFlow();
});