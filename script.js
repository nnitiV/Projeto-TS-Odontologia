const lente = document.getElementById('lente');
const implante = document.getElementById('implante');
const tratamento = document.getElementById('tratamento');
const outros = document.getElementById('outros');

const treatmentText = document.getElementById('treatment-text');
const treatmentBox = document.getAnimations("descricao");

const setActive = (activeElement) => {
    // Remove a classe active de todos os elementos
    [lente, implante, tratamento, outros].forEach(element => {
        element.classList.remove('active');
    });
    
    // Adiciona a classe active ao elemento clicado
    activeElement.classList.add('active');
};


lente.addEventListener('click', () => {
  treatmentText.innerHTML = 'As famosas lentes em resinas esculpidas á mão, mehora a estética do sorriso, sem desgaste e sem dor.<br/>Nossa equipe é composta por dentistas altamente qualificados e experientes, prontos para fornecer o melhor atendimento odontológico. Com anos de experiência e um compromisso com a excelência, estamos aqui para cuidar do seu sorriso e garantir sua satisfação.';
  treatmentText.style.marginTop = "4rem";
  setActive(lente);
});

implante.addEventListener('click', () => {
  treatmentText.innerHTML = 'O implante dentário oferece diversos benefícios para aqueles que precisam substituir um dente ou mais.<br>Os implantes dentários promovem uma melhoria na autoestima e na qualidade de vida do paciente, restaurando a função dos dentes perdidos e devolvendo-lhe o sorriso.<br>Outra  vantagens é a melhoria na estética bucal, já que os implantes são feitos de forma personalizada e se assemelham aos dentes naturais. Além disso, os implantes proporcionam uma melhor funcionalidade na mastigação e na fala, uma vez que são fixados de forma permanente no osso. ';
  treatmentText.style.marginTop = "-2rem";
  setActive(implante);
});

tratamento.addEventListener('click', () => {
  treatmentText.innerHTML = 'O tratamento de canal dentário, muitas vezes é realizado em sessão única e é de extrema importância quando a polpa do dente está infectada por bactérias ou traumatizada devido à cárie profunda ou fratura, o tratamento de canal é a única opção para salvar o dente. <br>Durante o procedimento, o dentista remove o tecido infectado e limpa o canal, preenche-o com um material certo para evitar a reinfecção. Além de aliviar a dor imediatamente  e permitir que você mastigue normalmente, o tratamento de canal também ajuda a evitar a propagação da infecção para outraos dentes.<br>Se não tratado, um dente com infecção na polpa pode levar a complicações mais sérias, como abscessos dentários. Portanto, é essencial procurar um dentista assim que sentir dor persistente ou sensibilidade ao comer ou beber.';
  treatmentText.style.width = "100%";
  if(screen.width < 1200) treatmentText.style.marginTop = "-7rem";
  if(screen.width < 800) descricao.style.paddingTop = '10rem';
  treatmentText.style.marginTop = "-7rem";
  setActive(tratamento);
});

outros.addEventListener('click', () => {
  treatmentText.innerHTML = 'Manter a saúde bucal em dia é de extrema importância para garantir uma qualidade de vida melhor. As consultas de limpeza preventivas ajudam a manter um hálito fresco e a estética do sorriso, contribuindo para a autoestima e a confiança.<br>Um dos cuidados fundamentais para isso são as consultas de limpeza preventivas. Essas consultas são essenciais para remover o acúmulo de placa bacteriana e tártaro nos dentes, prevenindo problemas como cáries, gengivite e periodontite.<br>Além disso, durante essas consultas, o dentista realiza uma avaliação completa da saúde bucal, identificando precocemente possíveis doenças ou alterações. Dessa forma, é possível realizar o tratamento adequado de forma precoce e eficiente, evitando dores e perda dos dentes.';
  treatmentText.style.marginTop = "-3rem";
  if(screen.width < 1200) treatmentText.style.marginTop = "-6rem";
  setActive(outros);
});

// Carroussel
const carousel_items = document.querySelectorAll(".carousel-item");
const carousel_radio_button = document.querySelectorAll(".radio");
const prev_btn = document.querySelector('.prev-btn');
const next_btn = document.querySelector(".next-btn");
var position = 0;

prev_btn.addEventListener("click", () => {
  carousel_items[position].classList.remove("active");
  carousel_radio_button[position].checked = false;
  if(--position < 0){
    position = 10;
  }
  carousel_radio_button[position].checked = true;
  carousel_items[position].classList.add("active");
})

next_btn.addEventListener("click", () => {
  carousel_items[position].classList.remove("active");
  carousel_radio_button[position].checked = false;
  if(++position > 10){
    position = 0;
  }
  carousel_radio_button[position].checked = true;
  carousel_items[position].classList.add("active");
})

function checkRadio(radioId) {
  carousel_items.forEach(item => {
    if (item.classList.contains("active")) {
      item.classList.remove("active")
    }
  });

  carousel_radio_button[position].checked = false;
  position = radioId;
  carousel_radio_button[radioId].checked = true;
  carousel_items[radioId].classList.add("active")
}