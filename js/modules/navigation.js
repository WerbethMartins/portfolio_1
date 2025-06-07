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

//Função para alternar a visibilidades das sections
export function openSection(sectionToShow){
    const sections = ['#contact_section', '#project_section'];
    
    sections.forEach(section => {
        if(section === sectionToShow){
            toggleVisibility(sectionToShow,'#main_section');     
        } else {
            $(section).hide();
        }
    });
}

export function initializeNavigation(){

    // Botões da página principal
    $('.contact_button').on('click', () => {
        $('.contact_button').css({
            'box-shadow': '1px 1px 3px rgba(244, 37, 37, 0.7)',
        })

        setTimeout(() => {
            openSection('#contact_section');
            $('#main_section').hide();
            $('#header').hide();
        }, 500);
    });

    $('.projects_button').on('click', () => {
        // Mudanças de estilo css
        $('.projects_button').css({
            'box-shadow': '1px 1px 3px rgba(244, 37, 37, 0.7)',
        }) 

        $('.project_section').css({
            'margin': '10px 0',
        })

        $('.bi-arrow-right').css({
            'top': '9%',
        })
        
        setTimeout(() => {
            openSection('#project_section');
            $('#main_section').hide();
            $('#header').hide();
        }, 500);
    });
}