document.querySelectorAll('.toc-float a').forEach(link=>{
  link.addEventListener('click',()=>{
    document.getElementById('toc-toggle').checked = false;
  });
});