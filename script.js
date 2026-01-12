const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const menuIcon = menuToggle.querySelector('i');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  
  // Change icon from bars to times
  if (menuIcon.classList.contains('fa-bars')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');
  } else {
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
  }
});

let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function showNextSlide() {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }
    
    setInterval(showNextSlide, 3000); // Change image every 3 seconds

    const images = document.querySelectorAll(".slide");
    const dotsContainer = document.querySelector(".dots");
    let currentIndex = 0;
    images.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      dot.addEventListener("click", () => {
        showSlide(index);
      });
      dotsContainer.appendChild(dot);
    });
    const dots = document.querySelectorAll(".dot");
    dots[currentIndex].classList.add("active");
    function showSlide(index){
      images[currentIndex].classList.remove("active");
      dots[currentIndex].classList.remove("active");
      currentIndex = index;
      images[currentIndex].classList.add("active");
      dots[currentIndex].classList.add("active");
    }
