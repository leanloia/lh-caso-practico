document.querySelectorAll('.modulo .titulo').forEach((titulo) => {
   titulo.addEventListener('click', (e) => {
      const modulo = e.target.closest('.modulo');
      const svgs = modulo.querySelectorAll('.titulo svg');
      const paragraphs = modulo.querySelectorAll('.contenido p');

      svgs.forEach((svg) => svg.classList.toggle('inactive'));
      paragraphs.forEach((p) => p.classList.toggle('inactive'));
   });
});
