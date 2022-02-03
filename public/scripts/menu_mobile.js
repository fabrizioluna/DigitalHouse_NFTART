let _isOpen = false;

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
    if(_isOpen){
        nav_secondary.style.display = 'none';
        nav_secondary.style.display = 'none';
        return _isOpen = false;
    }
    nav_secondary.style.display = 'block';
    nav_secondary.style.display = 'block';
    return _isOpen = true;
}