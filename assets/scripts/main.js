// code for sticky header

window.onscroll = function() {
    myFunction()
};

let header = document.getElementById("myHeader");
let sticky = header.offsetTop;

function myFunction() {
    if (window.scrollY > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// function to open and close mobile menu
function openOverlay() {
    document.getElementById("overlay").style.display = "flex";
}

function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
}

// header background particles

// Particles galaxy background using the lightweight library particles.js with mouse interactivity.

const config = {
    "particles": {
    "number": {
    "value": 200,
    "density": {
    "enable": true,
    "value_area": 400
    }
    },
    "color": {
    "value": ["#FFFFFF", "#c78f6c", "#5a5261", "#597ca4", "#f9c1aa", "#514c82"]
    },
    "shape": {
    "type": "circle",
    "stroke": {
    "width": 0,
    "color": "#000000"
    },
    "polygon": {
    "nb_sides": 5
    },
    "image": {
    "src": "img/github.svg",
    "width": 100,
    "height": 100
    }
    },
    "opacity": {
    "value": 0.5,
    "random": false,
    "anim": {
    "enable": false,
    "speed": 1,
    "opacity_min": 0.1,
    "sync": false
    }
    },
    "size": {
    "value": 3,
    "random": true,
    "anim": {
    "enable": false,
    "speed": 20,
    "size_min": 0.1,
    "sync": false
    }
    },
    "line_linked": {
    "enable": false,
    "distance": 300,
    "color": "#ffffff",
    "opacity": 0.4,
    "width": 2
    },
    "move": {
    "enable": true,
    "speed": 3,
    "direction": "none",
    "random": false,
    "straight": false,
    "out_mode": "out",
    "bounce": false,
    "attract": {
    "enable": false,
    "rotateX": 600,
    "rotateY": 1200
    }
    }
    },
    "interactivity": {
    "detect_on": "canvas",
    "events": {
    "onhover": {
    "enable": true,
    "mode": "repulse"
    },
    "onclick": {
    "enable": true,
    "mode": "push"
    },
    "resize": true
    },
    "modes": {
    "grab": {
    "distance": 800,
    "line_linked": {
    "opacity": 1
    }
    },
    "bubble": {
    "distance": 800,
    "size": 80,
    "duration": 2,
    "opacity": 0.8,
    "speed": 3
    },
    "repulse": {
    "distance": 100,
    "duration": 0.4
    },
    "push": {
    "particles_nb": 4
    },
    "remove": {
    "particles_nb": 2
    }
    }
    },
    "retina_detect": true
    }
    
    window.onload = function() {
    
    // background is the dom element id
    particlesJS("background", config);
    };
    

    // form management

    // let contactForm = document.getElementById("contactForm");

    // contactForm.addEventListener("submit", (e) => {
    //     e.preventDefault();

    //     let name = document.getElementById("fname");

    //     if(name.value == "") {
    //         alert("Please enter your name");
    //     } else {
    //         alert(`${name.value}, the form was submitted successfully.\n Thank you for reaching out to me!`);
    //     }
    // });