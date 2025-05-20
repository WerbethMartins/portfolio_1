// Função para abrir o menu com jquery
export function openMenu() {
    if ($('#menu_items').is(':visible')) {
        // Se o menu estiver visível, esconde-o
        $('#menu_items').removeClass('visible');
        $('#menu_items').addClass('hidden');
        $('#main_section').show();
    } else {
        // Se o menu não estiver visível, mostra-o
        $('#menu_items').css('display', 'flex');
        $('#menu_items').addClass('visible');
        $('#menu_items').removeClass('hidden');
        $('#main_section').hide();
    }
}

export function initializeMenu() {
    // Evendo de clique no botão do menu
    $('#menu_icon').on('click', () =>{
        openMenu(); // Chama a função para abrir o menu
        $('.navbar').hide();
        $('#footer').hide();
    })
}