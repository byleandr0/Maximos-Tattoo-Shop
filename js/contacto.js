const whatsappForm = document.getElementById('whatsapp-form');

if (whatsappForm) {
  const fields = Array.from(whatsappForm.querySelectorAll('input, textarea'));

  fields.forEach(field => {
    field.addEventListener('input', () => field.setCustomValidity(''));
  });

  whatsappForm.addEventListener('submit', event => {
    event.preventDefault();

    fields.forEach(field => {
      field.setCustomValidity(field.value.trim() ? '' : 'Preenche este campo.');
    });
    if (!whatsappForm.reportValidity()) return;

    const data = new FormData(whatsappForm);
    const value = name => String(data.get(name) || '').trim();
    const message = [
      'Olá! Gostava de pedir um orçamento para uma tatuagem.',
      '',
      `Nome: ${value('nome')}`,
      `Email: ${value('email')}`,
      `Telefone: ${value('telefone')}`,
      '',
      `Ideia da tatuagem: ${value('ideia')}`,
      `Zona do corpo: ${value('zona')}`,
      `Tamanho aproximado: ${value('tamanho')}`
    ].join('\n');

    window.location.href = `https://wa.me/351961082525?text=${encodeURIComponent(message)}`;
  });

  document.getElementById('whatsapp-submit').disabled = false;
}
