import {toggleVisibility as toggleVisibility2} from './menu.js';

// Função debounce para otimizar performance
function debounce(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

//Função para alternar a visibilidades das sections
export function openSection(sectionToShow){
    const sections = ['#contact_section', '#projects_section', '#education_section', '#about_section'];
    
    sections.forEach(section => {
        if(section === sectionToShow){
            toggleVisibility2(sectionToShow,'#main_section');     
        } else {
            $(section).hide();
        }
    });
}

// Configuração do botão de contato e botão dentro da seção de contato
// Botão de contato na seção principal
function contactButton(){
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
'   '
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

// Setas para controlar as imagens da página de projetos
function setArrowButtons() {
        $('#next_images').on('click', () => {
        const nextArrow = $('#next_images');
        const previousArrow = $('#previous_images');
        const currentImage = $('.section_projects_image'); // Seleciona a imagem atual
        const nextImage = currentImage.next('.section_projects_image_2');
        
        if(currentImage.length && nextImage.length){
            currentImage.removeClass('section_projects.active').fadeOut(500, () => {
                previousArrow.css({
                'display': 'block',
                'opacity': '1',
                });
                nextArrow.css({
                    'display': 'none',
                });
                nextImage.addClass('section_projects.active').fadeIn(500).css({
                    'display': 'flex',
                });  
            });
        }
    });

    $('#previous_images').on('click', () => {
        const nextArrow = $('#next_images');
        const previousArrow = $('#previous_images');
        const currentImage = $('.section_projects_image_2')
        const previousImage = $('.section_projects_image');

        if(currentImage.length && previousImage.length){
            currentImage.removeClass('section_project.active').fadeOut(500, () => {
                nextArrow.css({
                    'display': 'block',
                    'opacity': '1',
                });
                previousArrow.css({
                    'display': 'none',
                });
                previousImage.addClass('section_projects.active').fadeOut(500).css({
                    'display': 'flex',
                });
            });
        };
    });
}

// Configuração do botão de educação na página about me
function educatioButton(){
    $('#education_button').on('click', () => {
        $('.education_button').css({
            'box-shadow': '1px 1px 3px rgba(244, 37, 37, 0.7)',
            "opacity": '0',
            "transform": 'translateY(-20px)',
        });

        setTimeout(() => {
            openSection('#education_section');
            $('#main_section').hide();
            $('#about_section').hide();    
        }, 500);
    });
}

export function initializeNavigation(){

    projectsButton();
    contactButton();
    setArrowButtons();
    educatioButton();
    
}