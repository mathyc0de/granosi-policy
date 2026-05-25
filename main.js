(function () {
  var body = document.body;
  var page = body.dataset.page;
  if (page) {
    var active = document.querySelector('.site-nav a[data-nav="' + page + '"]');
    if (active) active.classList.add('is-active');
  }

  var doc = document.querySelector('.legal-doc');
  var tocRoot = document.getElementById('legal-toc-list');
  if (!doc || !tocRoot) return;

  var headings = doc.querySelectorAll('h2');
  headings.forEach(function (heading, index) {
    if (!heading.id) {
      heading.id = 'section-' + (index + 1);
    }

    var link = document.createElement('a');
    link.href = '#' + heading.id;
    link.textContent = heading.textContent;
    tocRoot.appendChild(link);
  });
})();
