export function topicSelectors(topics: [{id: number, name: string}]){
    return `  
    <div class='topic-selectors-wrapper'>
    <h2 class='text-cardiff-red text-xl font-semibold pb-4' >Scroll to Topic:</h2>
    <div class='topic-selectors'>
    ${topics.map(topic => {
        return `
            <a href=#topic-${topic.id}>
                <button class='topic-selector'>
                    ${topic.name}
                </button>
            </a>
        `;
    }).join('')
}
</div>
            </div>`
}