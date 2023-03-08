 // função para corrigir erro data com um dia a menos
 function formatarData(data) {
    const dia = (data.getDate() + 1).toString().padStart(2, '0'); // obtém o dia e adiciona um zero à esquerda, se necessário
    const mes = (data.getMonth() + 1).toString().padStart(2, '0'); // obtém o mês e adiciona um zero à esquerda, se necessário
    const ano = data.getFullYear(); // obtém o ano

    return `${dia}/${mes}/${ano}`; // retorna a data formatada
  }
  function ehFimDeSemana(data) {
    //a contage do array estva comecando da Segunda feira no calandario
    return data.getDay() === 6 || data.getDay()  === 5; // retorna true se for sábado ou domingo
  }
  // pega valores dos campos
  const dataReservaInput = document.querySelector('#data-reserva');
  const dataSelecionadaLabel = document.querySelector('#data-selecionada');
  //coloca data selecionada  denro campo input
  dataReservaInput.addEventListener('change', (event) => {
  const dataSelecionada = event.target.valueAsDate;

    if (!ehFimDeSemana(dataSelecionada)) { // verifica se a data selecionada não é fim de semana
      alert('As reservas só podem ser feitas nos finais de semana.');
       event.target.value = ''; // limpa o valor do input
        return;
    }
      const dataFormatada = formatarData(dataSelecionada);
      dataSelecionadaLabel.textContent = dataFormatada;
  });
