'use strict';
for (const [group, target] of [['Приложения','apps'],['Локации','scenes'],['Архив','archive']]) {
  const container = document.getElementById(target);
  for (const item of window.WORKSHOP_DEMOS.filter(d => d.group === group)) {
    const a = document.createElement('a'); a.className = 'card'; a.href = 'viewer.html?demo=' + encodeURIComponent(item.id);
    const kind = document.createElement('span'); kind.className = 'kind'; kind.textContent = group === 'Архив' ? 'ЭКСПЕРИМЕНТ' : group === 'Локации' ? 'ЛОКАЦИЯ' : 'ПРИЛОЖЕНИЕ';
    const title = document.createElement('h3'); title.textContent = item.title;
    const description = document.createElement('p'); description.textContent = item.description;
    const open = document.createElement('span'); open.className = 'open'; open.textContent = 'Открыть пример →';
    a.append(kind, title, description, open); container.append(a);
  }
}
