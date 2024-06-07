var menuOpen = false;

document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.getElementById('menu-icon');
    var navLinks = document.getElementById('nav-links');
    // var tagline = document.getElementById('Tagline_sentence');

    menuIcon.addEventListener('click', function(event) {
        if (menuOpen === true) {
            navLinks.style.display = 'block';
            menuOpen = false;
        } else if (menuOpen === false){
            navLinks.style.display = 'none';
            menuOpen = true;
        }       
    });
    }); 
    
    // document.getElementById('search-logo').addEventListener('animationend', function() {
    //     document.getElementById('doc-logo').style.opacity = '0';
    //     document.getElementById('arrow-logo').style.opacity = '1';
    // });