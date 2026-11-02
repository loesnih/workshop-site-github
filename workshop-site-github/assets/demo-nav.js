(() => {
  'use strict';
  const source = document.currentScript.src;
  const home = new URL('../index.html', source).href;
  // A shadow root prevents the source scene's CSS from changing the return control.
  const host = document.createElement('div');
  host.style.cssText = 'position:fixed;right:12px;bottom:max(12px,env(safe-area-inset-bottom));z-index:2147483647;';
  const root = host.attachShadow({ mode: 'open' });
  root.innerHTML = '<style>a{display:block;background:#102327f2;border:1px solid #90d8c0;border-radius:12px;color:#e9faf2;padding:12px 16px;text-decoration:none;font:600 14px system-ui,sans-serif;box-shadow:0 4px 20px #0004}a:focus-visible{outline:3px solid #f5bb79}</style>';
  const link = document.createElement('a');
  link.href = home; link.target = '_top'; link.textContent = '← Главное меню';
  root.append(link);
  for (const name of ['pointerdown', 'pointerup', 'click', 'touchstart']) host.addEventListener(name, e => e.stopPropagation());
  function update() { host.hidden = window.top !== window && !document.fullscreenElement; }
  document.body.append(host); document.addEventListener('fullscreenchange', update); update();
})();
