import { renderTopic } from "./topic";

export function renderTopics(topics: any[]) {
  return `
    <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
      ${topics.map(renderTopic).join('')}
    </div>
    
  `;
}


