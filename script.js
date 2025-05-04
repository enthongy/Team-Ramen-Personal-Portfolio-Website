/* 
Group Happy:
Member 1: Yap En Thong
Member 2: Ong Ya Sian
Member 3: Cheng Jia Yi
*/

function goToPage(page) {
  window.location.href = page;
}

function scrollCarousel(direction) {
  const carousel = document.getElementById('carousel');
  if (!carousel) return; 

  const scrollAmount = 300; 
  carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
  const socialLinks = document.querySelectorAll('.social-link');
  if (socialLinks.length > 0) {
    socialLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.stopPropagation();
      });
    });
  }
});
