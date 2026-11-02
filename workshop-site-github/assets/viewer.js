'use strict';
const demos = [{id:'generator',title:'Конструктор промптов',path:'generator/index.html',group:'Инструменты'}, ...window.WORKSHOP_DEMOS];
const select = document.querySelector('#demoSelect'), frame = document.querySelector('#demoFrame');
for (const group of [...new Set(demos.map(d => d.group))]) {
  const optgroup = document.createElement('optgroup'); optgroup.label = group;
  for (const demo of demos.filter(d => d.group === group)) { const option = document.createElement('option'); option.value = demo.id; option.textContent = demo.title; optgroup.append(option); }
  select.append(optgroup);
}
function openDemo(id) {
  const demo = demos.find(d => d.id === id);
  if (!demo) { frame.hidden = true; select.selectedIndex = -1; const note = document.querySelector('#note'); note.hidden = false; note.textContent = 'Демонстрация не найдена. Выберите пример из списка или вернитесь в главное меню.'; document.querySelector('#direct').hidden = true; return; }
  frame.hidden = false; select.value = demo.id; document.title = demo.title + ' · Игровая лаборатория';
  frame.title = demo.title; frame.src = demo.path; document.querySelector('#direct').hidden = false;
  document.querySelector('#direct').href = demo.path;
  const note = document.querySelector('#note'); note.hidden = demo.group !== 'Архив'; note.textContent = 'Архивный AR-пример. Если камера не запускается во встроенном окне, откройте «Отдельно». Поддержка зависит от устройства.';
  const url = new URL(location.href); url.searchParams.set('demo', demo.id); history.replaceState(null, '', url);
}
select.addEventListener('change', () => openDemo(select.value));
document.querySelector('#fullscreen').addEventListener('click', async () => { try { if (document.fullscreenElement) await document.exitFullscreen(); else if(document.documentElement.requestFullscreen) await document.documentElement.requestFullscreen(); else { const note=document.querySelector('#note');note.hidden=false;note.textContent='Этот браузер не поддерживает полноэкранный режим.'; } } catch(e) {const note=document.querySelector('#note');note.hidden=false;note.textContent='Полноэкранный режим недоступен в этом браузере.';} });
openDemo(new URLSearchParams(location.search).get('demo') || 'generator');
