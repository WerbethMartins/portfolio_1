import {toggleVisibility as toggleVisibility2} from './menu.js';

//Função para alternar a visibilidades das sections
export function openSection(sectionToShow){
    const sections = ['#contact_section', '#projects_section'];
    
    sections.forEach(section => {
        if(section === sectionToShow){
            toggleVisibility2(sectionToShow,'#main_section');     
        } else {
            $(section).hide();
        }
    });
}

function contactButton(){
    // Botões da página principal
    $('#contact_button').on('click', () => {
        $('.contact_button').css({
            'box-shadow': '1px 1px 3px rgba(244, 37, 37, 0.7)',
        })

        setTimeout(() => {
            openSection('#contact_section');
            $('#main_section').hide();
            $('#header').hide();
        }, 500);
    });

}


// Configuração do botão de projetos e botões dentro da seção de projetos

// Botão de projetos na seção principal
function projectsButton(){
    $('#projects_button').on('click', () => {
         $('.projects_button').css({
            'box-shadow': '1px 1px 3px rgba(244, 37, 37, 0.7)',
        })

        setTimeout(() => {
            openSection('#projects_section');
            $('.navbar').hide();
        },500);
    });
}

// Seta para passar paras proximas imagens
$('#next_images').on('click', () => {
    const currentImage = $('.section_projects_image'); // Seleciona a imagem atual
    const nextImage = currentImage.next('.section_projects_image_2'); // Seleciona a próxima imagem se existir

    if(currentImage.length && nextImage.length){
        currentImage.removeClass('section_projects.active').fadeOut(500, () => {
            nextImage.addClass('section_projects.active').fadeIn(500);
        });
    }
});


export function initializeNavigation(){

    projectsButton();
    contactButton();
    
}