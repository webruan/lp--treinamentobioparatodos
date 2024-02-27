document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll('.video-button');
  const videoVisible = document.getElementById('video-visible');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const title = button.getAttribute('data-title');
      const src = button.getAttribute('data-src');

      // Remove a classe 'active' de todos os botões
      buttons.forEach(btn => {
        btn.classList.remove('active');
      });

      // Adiciona a classe 'active' ao botão clicado
      button.classList.add('active');

      videoVisible.src = src;
      videoVisible.title = title;
    });
  });
});
