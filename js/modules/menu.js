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

// Função para alternar as classe hidden e visible das seções
export function toggleVisibility(sectionToShow, sectionToHide) {
    if($(sectionToShow).is(':visible')){
        $(sectionToShow).removeClass('visible').addClass('hidden');
        $(sectionToHide).show();
    } else {
        $(sectionToShow).css('display', 'flex').removeClass('hidden').addClass('visible');
        $(sectionToHide).hide();
    }
}

// Função para alternar a visibilidade das seções
function openSection(sectionToShow) {
    const sections = [ '#menu_items_container','#main_section','#contact_section', '#projects_section', '#about_section', '#education_section'];
    
    sections.forEach(section => {
        if (section === sectionToShow) {
            toggleVisibility(sectionToShow);
        } else {
            $(section).hide(); // Esconde as outras seções
        }
    });
}

function mainMenu(){
    const itemsContainer = $('#menu_items_container');
    const icon = $('#menu_icon');

    $(icon).on('click', () =>{
            
        if ($(itemsContainer).is(':visible')) {
            itemsContainer.slideUp(500);
            $(itemsContainer).hide();
        } else {
            itemsContainer.slideDown(500);
            $(itemsContainer).show();
            $(icon).css('animation', 'none');
            icon[0].offsetHeight;
            $(icon).css('animation', 'symbol_glitch 0.5s ease-out');
        }
    });   
}

// Função para de clique no icon do menu da seção principal para abrir o menu
function menuNavegation(){
    $('#menu_item_projects').on('click', () => {
        setTimeout(() => {
            openSection('#projects_section');
            $('.navbar').hide();
            $('#footer').show();
        }, 500);
    })

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

    $('#menu_item_home').on('click', () => {
        $('.square_home').css({
            "transition": 'all 2s ease-out',
            "opacity": '0',
            "transform": 'translateY(-20px)',
        })
        setTimeout(() => {
            openSection('#main_section');
            $('.navbar').show();
            $('#footer').show();
            location.reload();
        }, 800);
    })
}

function iconProjectMenu(){
    const icon = $('#menu_project_icon');
    const navbar = $('.navbar');
    const projectsButton = $('.projects_button');

    $(icon).on('click', () => {
        setTimeout(() => {
            openSection('#main_section');
            $(navbar).show();
        }, 500);

        $(projectsButton).css({
            'box-shadow': '1px 1px 3px rgba(0, 0, 0, 0.7)',
        })
    });
}

function iconAboutMenu() {
    const icon = $('#about_menu_icon');
    const navbar = $('.navbar'); 
    // Função para abrir o menu da seção sobre
    $(icon).on('click', () => {
        setTimeout(() => {
            openSection('#main_section');
            $(navbar).show();
        },500);
        
    })
}

function iconEducationMenu(){
    const icon = $('#education_menu_icon');
    const navbar = $('.navbar');
    const educationButton = $('.education_button');
    
    // Função para abrir o meu da seção educação
    $(icon).on('click', () => {
        setTimeout(() => {
            openSection('#about_section');
            $(navbar).hide();
            $(educationButton).show().css({
                'box-shadow': '1px 1px 3px rgba(0, 0, 0, 0.7)',
                'opacity': '1',
                "transform": 'translateY(0px)',
            });
            $('#footer').hide();
        }, 500);
    });
}

// Função para de clique no icon do menu da seção contato
function iconContactMenu(){
    $('#contact_menu_icon').on('click', () => {
        setTimeout(() => {
            openSection('#menu_items'); // Chama a função para abrir o menu
            $('.navbar').hide();
            $('#footer').hide();
        }, 500);
        $('.square_contact').css({
            "transition": 'all 2s ease-out',
            "opacity": '1',
            "transform": 'translateY(0px)',
        });
    });
}

export function initializeMenu() {
        mainMenu();
        menuNavegation();
        iconContactMenu();
        iconAboutMenu();
        iconProjectMenu();
        iconEducationMenu();
}