document.addEventListener('DOMContentLoaded', () => {
  // Use IntersectionObserver to lazily load videos when they come into view
  const lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const video = entry.target;
        video.src = video.dataset.src;
        video.load();
        observer.unobserve(entry.target);
      }
    });
  });
  document.querySelectorAll('video[data-src]').forEach(video => lazyVideoObserver.observe(video));
});
