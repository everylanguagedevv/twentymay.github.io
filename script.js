<script>  
    const celebrateButton = document.querySelector('#celebrate');
    const colors = ['#ff6b51', '#ffd166', '#b9ead9', '#8fd3ff'];

    celebrateButton.addEventListener('click', () => {
      for (let index = 0; index < 42; index += 1) {
        const piece = document.createElement('span');
        piece.className = 'confetti drop';
        piece.style.left = `${Math.random() * 100}vw`;
        piece.style.background = colors[index % colors.length];
        piece.style.animationDelay = `${Math.random() * .35}s`;
        piece.style.transform = `rotate(${Math.random() * 90}deg)`;
        document.body.appendChild(piece);
        piece.addEventListener('animationend', () => piece.remove());
      }
      celebrateButton.innerHTML = '<span aria-hidden="true">&#10084;</span> Yahhh, ketahuan! Selamat Ulang Tahun, Pak Sofyan!';
    }, { once: true });
  </script>
