// Utility to fetch and display Open Day data from public/OpenDay14.json
import './style.css'
import { renderHeader } from './templates/header'
import { renderTopics } from './templates/topicsGrid'

import MicroModal from 'micromodal';  
import { topicSelectors } from './templates/topicSelector'


async function loadOpenDay() {
  // Use the correct base path for GitHub Pages
  const base = import.meta.env.BASE_URL || '/';
  const res = await fetch(`${base}api/OpenDay.json`)
  const data = await res.json()
  return data
}

function renderOpenDay(data: any) {
  const app = document.querySelector<HTMLDivElement>('#app')!
  if (!data.topics) {
    app.innerHTML = '<p class="text-red-600">No Open Day data found.</p>'
    return
  }
    app.innerHTML = `
    <div class="min-h-screen bg-cardiff-white font-sans px-2 py-6">
      ${renderHeader()}
      <div class='main-grid'>
            ${topicSelectors(data?.topics)}
      ${renderTopics(data?.topics)}
      </div>

    </div>
  `;
}

loadOpenDay().then(data => {
  renderOpenDay(data);

  MicroModal.init({
    openTrigger: 'data-micromodal-trigger',
    closeTrigger: 'data-micromodal-close'
  });
});