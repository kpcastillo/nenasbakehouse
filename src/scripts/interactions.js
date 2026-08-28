// Home-page interactions: headline set-on-load, scroll reveals, hero parallax,
// and the baker's-margin rail that reads the section you're in.
// No-ops gracefully on pages that don't have these elements (e.g. /thank-you).

(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // headline sets on load
  requestAnimationFrame(function () {
    document.body.classList.add('ready');
  });

  // scroll reveals
  var items = document.querySelectorAll('.rv');
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  }

  // hero parallax — small, cheap, rAF-throttled
  var pl = document.querySelectorAll('.parallax');
  if (!reduce && pl.length) {
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var y = window.scrollY;
        pl.forEach(function (el) {
          var s = parseFloat(el.dataset.speed || 0.04);
          el.style.transform = 'translate3d(0,' + (-y * s) + 'px,0)';
        });
        ticking = false;
      });
    }, { passive: true });
  }

  // the baker's margin reads the section you're in
  var rail = document.getElementById('rail');
  var railRead = document.getElementById('railRead');
  var railSec = document.getElementById('railSec');
  if (!rail || !railRead || !railSec) return;

  var reads = [
    ['hero', 'Sugar <b>75%</b> of flour weight', 'Las Vegas, NV'],
    ['thesis', 'Flour <b>1000g</b> · Sugar <b>750g</b>', 'The floor, not a target'],
    ['cakes', 'Bake <b>335&deg;F</b> · <b>28 min</b>', 'Five flavours'],
    ['savory', 'Ferment <b>72h</b> at <b>76&deg;F</b>', 'Friday &amp; Saturday bake'],
    ['everyday', 'Dough rested <b>36h</b>', 'Bake and pack'],
    ['order', 'Lead time <b>72h</b> minimum', 'Tiered cakes · 2 weeks'],
  ];
  var secs = reads.map(function (r) { return document.getElementById(r[0]); });
  var navLinks = document.querySelectorAll('header a[data-nav]');
  var body = document.body;
  var lastY = window.scrollY;

  function updateNav(idx) {
    var y = window.scrollY;
    body.classList.toggle('nav-solid', y > window.innerHeight * 0.72);

    var delta = y - lastY;
    if (y > 240 && delta > 4) body.classList.add('nav-hide');
    else if (delta < -4 || y < 240) body.classList.remove('nav-hide');
    lastY = y;

    var zone = reads[idx][0] === 'savory' ? 'savory' : 'sweet';
    if (body.dataset.zone !== zone) body.dataset.zone = zone;

    var here = reads[idx][0];
    navLinks.forEach(function (a) { a.classList.toggle('on', a.dataset.nav === here); });
  }

  function currentIdx() {
    var mid = window.scrollY + window.innerHeight * 0.4, idx = 0;
    secs.forEach(function (s, i) { if (s && s.offsetTop <= mid) idx = i; });
    return idx;
  }

  function updateRail() {
    var idx = currentIdx();
    updateNav(idx);
    if (railRead.dataset.i === String(idx)) return;
    railRead.dataset.i = String(idx);
    [railRead, railSec].forEach(function (el) { el.style.opacity = '0'; });
    setTimeout(function () {
      railRead.innerHTML = reads[idx][1];
      railSec.innerHTML = reads[idx][2];
      var savory = reads[idx][0] === 'savory';
      rail.style.color = savory ? 'var(--deep-olive)' : 'var(--espresso)';
      [railRead, railSec].forEach(function (el) { el.style.opacity = '1'; });
    }, 220);
  }

  navLinks.forEach(function (a) {
    a.addEventListener('click', function () { body.classList.remove('nav-hide'); });
  });

  [railRead, railSec].forEach(function (el) { el.style.transition = 'opacity .22s ease'; });

  var pending = false;
  window.addEventListener('scroll', function () {
    if (pending) return;
    pending = true;
    requestAnimationFrame(function () { updateRail(); pending = false; });
  }, { passive: true });
  updateRail();
})();
