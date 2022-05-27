let showModal = false;

const menu_select = 
    document
        .getElementById('menu__mobile')
        .addEventListener('click', () => {
            showMenuMobile();
});

const nav_secondary = 
    document
        .getElementById('nav__secondary-show');

function showMenuMobile(){
    if(showModal){
        nav_secondary.style.display = 'none';
        return showModal = false;
    }
    nav_secondary.style.display = 'block';
    return showModal = true;
}