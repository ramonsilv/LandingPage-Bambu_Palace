const card = document.querySelector('.card');

    card.addEventListener('mousemove', (event) => {
      const cardRect = card.getBoundingClientRect();

      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;


      const deltaX = (event.clientX - cardCenterX) * -0.05;
      const deltaY = (event.clientY - cardCenterY) * -0.05;


      card.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translate(0, 0)';
    });

// NOT
