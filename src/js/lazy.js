// Seleciona o elemento HTML com o ID 'hero' e o armazena na variável 'hero'.
const hero = document.getElementById('hero');

// Função que verifica se a seção hero está visível na tela
function isHeroVisible(el) { // Declaração de função chamada 'isHeroVisible' que aceita um argumento 'el'.
  const { top, bottom, left, right } = el.getBoundingClientRect(); // Usa 'getBoundingClientRect()' para obter as coordenadas do retângulo do elemento na janela.
  // Obtém as dimensões da janela do navegador.
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  // Verifica se o elemento está verticalmente visível na tela.
  const vertInView = (top <= windowHeight) && (bottom >= 0);
  // Verifica se o elemento está horizontalmente visível na tela.
  const horInView = (left <= windowWidth) && (right >= 0);
  // Retorna verdadeiro se o elemento estiver visível tanto vertical quanto horizontalmente.
  return vertInView && horInView;
}

// Função que carrega as imagens nos respectivos containers
function loadImages() { // Declaração da função 'loadImages'.
  if (isHeroVisible(hero)) { // Verifica se a seção 'hero' está visível na tela.
    const imagePaths = [ // Declaração do array 'imagePaths' que vai conter todas as imagens da página.
      // Define um objeto com as informações da imagem.
      {
        imgNameId: 'forwho-magnets', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: 'Frete grátis'
      },
      {
        imgNameId: 'whatlearn-technique',
        altText: 'Como aplicar as técnicas'
      },
      {
        imgNameId: 'whatlearn-magnets',
        altText: 'Técnicas de diagnóstico e tratamento com ímãs'
      },
      {
        imgNameId: 'whatlearn-classes',
        altText: 'Aulas respondendo suas perguntas'
      },
      {
        imgNameId: 'whatlearn-body',
        altText: 'Vídeos mostrando reações do corpo '
      },
      {
        imgNameId: 'advantages-students',
        altText: 'Nova fonte de renda'
      },
      {
        imgNameId: 'advantages-learning',
        altText: 'Aprendizado na prática'
      },
      {
        imgNameId: 'advantages-certificate',
        altText: 'Certificado ABRATH'
      },
      {
        imgNameId: 'benefits-magnets',
        altText: '10 ímãs gratuitos'
      },
      {
        imgNameId: 'benefits-group',
        altText: 'Grupo vip'
      },
      {
        imgNameId: 'benefits-material',
        altText: 'Apostilas ilustradas'
      },
      {
        imgNameId: 'who-claudia',
        altText: 'Claudia Molla'
      },
      {
        imgNameId: 'who-neia',
        altText: 'Néia Salete'
      },
      {
        imgNameId: 'warranty-certificate',
        altText: 'Certificado ABRATH'
      },
      {
        imgNameId: 'warranty-stamp',
        altText: 'Selo de garantia de 7 dias'
      },
      {
        imgNameId: 'isfor-me',
        altText: 'É para mim'
      },
      {
        imgNameId: 'isfor-you',
        altText: 'É para você'
      },
      {
        imgNameId: 'isfor-family',
        altText: 'É para nossa família'
      },
      {
        imgNameId: 'isfor-ages',
        altText: 'É para todas as idades'
      },
      {
        imgNameId: 'isfor-animals',
        altText: 'E é para nossos animais'
      },
      {
        imgNameId: 'with-claudia',
        altText: ''
      },
      {
        imgNameId: 'offer-logotext',
        altText: ''
      },
      {
        imgNameId: 'offer-magnets',
        altText: ''
      },
      {
        imgNameId: 'offer-material',
        altText: ''
      },
      {
        imgNameId: 'offer-certificate',
        altText: ''
      },
      {
        imgNameId: 'recover-clockmoney',
        altText: ''
      },
      {
        imgNameId: 'recover-clock',
        altText: ''
      },
      {
        imgNameId: 'course-income',
        altText: 'Uma fonte de renda'
      },
      {
        imgNameId: 'course-rec',
        altText: 'Gravamos bem de pertinho todas as reações do corpo.'
      },
      {
        imgNameId: 'bio-claudia',
        altText: 'Claudia Molla'
      },
      {
        imgNameId: 'footer-logo',
        altText: 'Logo Bio Para Todos'
      },
      {
        imgNameId: 'footer-flags',
        altText: 'Selos de satisfação'
      },
      {
        imgNameId: 'footer-stamps',
        altText: 'Selos de garantia'
      },
    ];

    const videoPath = [
      {
        videoNameId: 'who-video',
        src: 'https://www.youtube-nocookie.com/embed/-VLHTZstSR4?si=nidtkj8Q34m7HueX&amp;controls=0'
      },
    ]

    // Loop que itera sobre cada elemento do array 'imagePaths'.
    imagePaths.forEach(imagePath => {
      const imgContainer = document.getElementById(imagePath.imgNameId); // Seleciona o elemento com o ID correspondente ao 'imgNameId' do objeto.
      
      // Verifica se o elemento foi encontrado.
      if (imgContainer) {
        imgContainer.innerHTML = // Define o conteúdo HTML do elemento selecionado.
        `
          <picture>
            <source media="(min-width: 1200px)" srcset="./src/assets/images/desktop/${imagePath.imgNameId}.webp">
            <source media="(min-width: 768px)" srcset="./src/assets/images/tablet/${imagePath.imgNameId}.webp">
            <source media="(min-width: 320px)" srcset="./src/assets/images/mobile/${imagePath.imgNameId}.webp">
            <img loading="lazy" src="./src/assets/images/desktop/${imagePath.imgNameId}.webp" alt="${imagePath.altText}">
          </picture>
        `;
      }
    });

    videoPath.forEach(videoPath => {
      const videoContainer = document.getElementById(videoPath.videoNameId); // Seleciona o elemento com o ID correspondente ao 'imgNameId' do objeto.
      
      // Verifica se o elemento foi encontrado.
      if (videoContainer) {
        videoContainer.innerHTML = // Define o conteúdo HTML do elemento selecionado.
        `
        <iframe id="video-visible" title="Claudia Molla" src="${videoPath.src}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `;
      }
    });

    // Remove o ouvinte de eventos de rolagem após as imagens serem carregadas.
    window.removeEventListener('scroll', loadImages);
  }
}

// Adiciona um ouvinte de eventos de rolagem para chamar a função 'loadImages'.
window.addEventListener('scroll', loadImages);