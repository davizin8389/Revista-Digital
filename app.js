const explanations = {
  material: {
    label: 'DIMENSIÓN MATERIAL · INVESTIGAR',
    text: 'Registra el estado de la batería, la edad del teléfono y el historial de uso. Una batería degradada puede ser reparable; por sí sola no demuestra intención de acortar la vida.'
  },
  software: {
    label: 'DIMENSIÓN DE SOFTWARE · CONTRASTAR',
    text: 'Consulta la política oficial de soporte del modelo y qué aplicaciones dejaron de funcionar. Compatibilidad y soporte son parte de la vida útil funcional.'
  },
  repair: {
    label: 'DIMENSIÓN DE REPARABILIDAD · DOCUMENTAR',
    text: 'Anota qué repuesto o servicio se buscó, su disponibilidad, precio y tiempo de espera. Esos datos permiten describir barreras concretas.'
  },
  perceived: {
    label: 'DIMENSIÓN PERCIBIDA · PREGUNTAR',
    text: 'Explora qué cambió en las expectativas: ¿necesidad, publicidad, moda o una función útil? Un deseo de novedad también es un motivo válido de reemplazo.'
  }
};

document.querySelectorAll('.explore-option').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.explore-option').forEach((option) => {
      option.classList.remove('active');
      option.setAttribute('aria-pressed', 'false');
    });
    button.classList.add('active');
    button.setAttribute('aria-pressed', 'true');
    const result = document.querySelector('.explore-result');
    const explanation = explanations[button.dataset.answer];
    result.querySelector('.result-label').textContent = explanation.label;
    result.querySelector('p').textContent = explanation.text;
  });
  button.setAttribute('aria-pressed', 'false');
});

// Keyboard activation is native for buttons; editable fields stay local to this page.
