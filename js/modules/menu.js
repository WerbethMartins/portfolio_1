// Função para alternar a visibilidade das seções
function toggleVisibility(sectionToShow, sectionToHide) {
    if($(sectionToShow).is(':visible')){
        $(sectionToShow).removeClass('visible').addClass('hidden');
        $(sectionToHide).show();
    } else {
        $(sectionToShow).css('display', 'flex').removeClass('hidden').addClass('visible');
        $(sectionToHide).hide();
    }
}


function openSection(sectionToShow) {
    const sections = ['#menu_items', '#main_section', '#contact_section', '#project_section', '#about_section'];
    
    sections.forEach(section => {
        if (section === sectionToShow) {
            toggleVisibility(sectionToShow);
        } else {
            $(section).hide(); // Esconde as outras seções
        }
    });
}

export function initializeMenu() {
    // Evento de clique no botão do menu principal
    $('#menu_icon').on('click', () => {
        $('#menu_icon').css({
            "transition": 'all 2s cubic-bezier(0.4,0,0.2,1)',
            "transform": 'translateY(-20px)',
        }); 
        setTimeout(() => {
            openSection('#menu_items'); // Chama a função para abrir o menu
            $('.navbar').hide();
            $('#footer').hide();
        }, 500);
    });

    // Evento de clique nos botões do menu
    $('#menu_item_projects').on('click', () => {
        $('.square_projects').css({
            "transition": 'all 2s ease-out',
            "opacity": '0',
            "transform": 'translateY(-20px)',
        })
        setTimeout(() => {
            openSection('#project_section'); // Chama a função para abrir a pagina de projetos
            $('.navbar').hide();
            $('#footer').show();
        }, 500);
    });
    
    $('#menu_item_contact').on('click', () => {
        $('.square_contact').css({
            "transition": 'all 2s ease-out',
            "opacity": '0',
            "transform": 'translateY(-20px)',
        })
        setTimeout(() => {
            openSection('#contact_section'); // Chama a função para abrir a pagina de contato
            $('.navbar').hide();
            $('#footer').show();
        }, 500);
    });

    $('#menu_item_about').on('click', () => {
        $('.square_about').css({
            "transition": 'all 2s ease-out',
            "opacity": '0',
            "transform": 'translateY(-20px)',
        })
        setTimeout(() =>{
            openSection('#about_section');
            $('.navbar').hide();
            $('#footer').show();
        }, 500);
    })

}