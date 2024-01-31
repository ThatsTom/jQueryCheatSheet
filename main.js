// Selecionar por ID
$('#meuElemento')

// Selecionar por classe
$('.minhaClasse')

// Selecionar por tipo de elemento
$('div')


// Mudar a cor de fundo
$('#meuElemento').css('background-color', 'blue')

// Adicionar uma classe
$('#meuElemento').addClass('novaClasse')

// Remover uma classe
$('#meuElemento').removeClass('minhaClasse')


// Mudar o texto
$('#meuElemento').text('Novo texto')

// Adicionar HTML
$('#meuElemento').html('<strong>Texto em negrito</strong>')


// Adicionar um evento de clique
$('#meuElemento').click(function() {
  alert('Clicou no elemento!')
})


// Animar o elemento
$('#meuElemento').animate({ left: '250px' })


// Adicionar um novo elemento após o elemento existente
$('#meuElemento').after('<div>Novo elemento</div>')

// Remover um elemento
$('#meuElemento').remove()


// Fazer uma requisição AJAX
$.ajax({
  url: 'https://exemplo.com/api/dados',
  method: 'GET',
  success: function(response) {
    console.log(response)
  }
})
