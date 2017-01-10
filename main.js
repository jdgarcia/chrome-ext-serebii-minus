// remove Serebii's stylesheets
document.querySelectorAll('link[rel=stylesheet]').forEach(element => {
  element.remove();
});

// remove all inline-styles
document.querySelectorAll('*[style]').forEach(element => {
  element.removeAttribute('style');
});
