// Função para alternar a visibilidade de seções
function toggleVisibility(sectionToShow, sectionToHide) {
    if($(sectionToShow).is(':visible')){
        $(sectionToShow).removeClass('visible').addClass('hidden');
        $(sectionToHide).show();
    } else {
        $(sectionToShow).css('display', 'flex').removeClass('hidden').addClass('visible');
        $(sectionToHide).hide();
    }
}

// Função para abrir o menu principal
export function openMenu(){
    toggleVisibility('#menu_items', '#main_section');
}

// Função para abrir a página de contato
export function openContact() {
    toggleVisibility('#contact_section', '#menu_items');
}

export function initializeMenu() {
    // Evento de clique no botão do menu principal
    $('#menu_icon').on('click', () => {
        $('#menu_icon').css({
            "transition": 'all 2s cubic-bezier(0.4,0,0.2,1)',
            "transform": 'translateY(-60px)',
        }); 
        setTimeout(() => {
            openMenu(); // Chama a função para abrir o menu
            $('.navbar').hide();
            $('#footer').hide();
        }, 1000);
    });

    // Evento de clique no botão contact
    $('#contact').on('click', () => {
        $('.square_2').css({
            "transition": 'all 2s cubic-bezier(0.4,0,0.2,1)',
            "opacity": '0.5',
            "transform": 'translateY(-60px)',
        }); 
        setTimeout(() => {
            openContact(); // Chama a função para abrir a pagina de contato
            $('.navbar').hide();
        }, 1000);
    });

}