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
    const sections = ['#menu_items', '#main_section', '#contact_section', '#projects_section', '#about_section'];
    
    sections.forEach(section => {
        if (section === sectionToShow) {
            toggleVisibility(sectionToShow);
        } else {
            $(section).hide(); // Esconde as outras seções
        }
    });
}

// Função para de clique no icon do menu da seção principal para abrir o menu
function menuItems(){
    // Evento de clique no icone do menu
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

    $('#menu_item_projects').on('click', () => {
        $('square_projects').css({
            "transition": 'all 2s ease-out',
            "opacity": '0',
            "transform": 'translateY(-20px)',
        });
        setTimeout(() => {
            openSection('#projects_section');
            $('.navbar').hide();
            $('#footer').show();
        })
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
            location.reload();
        }, 500);
    })
}

function projects_menu_icon(){
    $('#projects_menu_icon').on('click', () => {
        setTimeout(() => {
            openSection('#menu_items');
            $('.navbar').hide();
            $('#footer').show();
        }, 500);

        $('square_projects').css({
            "transition": 'all 2s ease-out',
            "opacity": '1',
            "transform": 'translateY(0)',
        });
    });
}


function iconAboutMenu() {
    // Função para abrir o menu da seção sobre
    $('#about_menu_icon').on('click', () => {
        setTimeout(() => {
            openSection('#menu_items');
            $('.navbar').hide();
            $('#footer').hide();
        },500);
        $('.square_about').css({
            "transition": 'all 2s ease-out',
            "opacity": '1',
            "transform": 'translateY(0)',
        })
    })
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
            "transform": 'translateY(0px)',
        });
    });
}

export function initializeMenu() {
        menuItems();
        iconContactMenu();
        iconAboutMenu();
        projects_menu_icon();
}