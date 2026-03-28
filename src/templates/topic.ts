import { renderEvents } from "./eventList";
import cuLogo from '/cu-logo.svg'

export function renderTopic(topic: {
    name: string, 
    id: number, 
    cover_image:string, 
    description: string, 
    programs:[{}]}) {
  if (!topic?.name) return '';

  const modalId = `modal-${topic.id}`;
  return `
  
    <div id='topic-${topic.id}'class="bg-cardiff-grey rounded-lg shadow  flex flex-col topic-single">
        <img src="${topic.cover_image || cuLogo}" class="h-64 w-full object-cover rounded mb-4" />
        <div class='topic-single-info'>
            <div class='topic-single-info-inner'>
                <h2 class="text-4xl font-bold text-cardiff-red">${topic.name}</h2>
                <p class=" mb-2">${topic.description || ''}</p>
            </div>
            ${renderEvents(topic.programs, modalId)}
            <button class="event-list-modal-open"data-micromodal-trigger="${modalId}">
                Show more
            </button>
        </div>
    </div>
  `;
}