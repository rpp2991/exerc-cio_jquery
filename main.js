$(document).ready(function () {

    // Adicionar tarefa
    $('#botao-add-tarefa').click(function (e) {
        e.preventDefault();
        const tarefa = $('#tarefa-input').val();
        if (tarefa) {
            $('#tarefa-lista').append(`<li>${tarefa}</li>`);
            $('#tarefa-input').val('');
        }
    });

    // Riscar tarefa ao clicar
    $('#tarefa-lista').on('click', 'li', function () {
        $(this).toggleClass('riscado');
    });

});

