document.querySelectorAll('article').forEach(article => {
  article.addEventListener('click', (e) => {

    // Ignorovani buttonu
    if (e.target.closest('button')) return;

    // Max 1 active
    document.querySelectorAll('article').forEach(a => {
      if (a !== article) a.classList.remove('active');
    });

    // Toggle
    article.classList.toggle('active');
  });
});