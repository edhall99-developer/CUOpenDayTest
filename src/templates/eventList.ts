

export function renderEvents(programs: [{ location: {postcode: string, address:string},title: string, room: string}], modalId: string) {
  if (!programs?.length) return '';

  
  

  const formatTime = (prog: {
    start_time: string,
    end_time: string
  }) => {
    if (!prog?.start_time) return '';

    const start = new Date(prog.start_time).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });

    const end = prog.end_time
      ? ` - ${new Date(prog.end_time).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        })}`
      : '';

    return ` (${start}${end})`;
  };

  return `
    <div>
      <h3 class="font-semibold text-xl">Next Event:</h3>

      ${
        programs[0]
          ? `
        <div class='next-event-info'>
          <div class="font-semibold text-lg">${programs[0].title}</div>
          <div class="text-base">${formatTime(programs[0])}</div>
          ${programs[0].room ? `<a class='event-map-link' href='http://maps.google.com/?q=${programs[0].location.postcode}${programs[0].location.address}'><div class="text-base">, ${programs[0].room}</div></a>` : ''}
        </div>
      `
          : `<p class="text-xs text-gray-500">No upcoming events</p>`
      }

      

      ${renderModal(programs, modalId, formatTime)}
    </div>
  `;
}

function renderModal(programs: [{
  location: {
    postcode: string,
    address:  string
  },
  room: string,
  title: string,
}], modalId: string, formatTime: any) {
  return `
    <div class="modal micromodal-slide" id="${modalId}" aria-hidden="true">
      
      <div 
        class="modal__overlay fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
        tabindex="-1" 
        data-micromodal-close
      >
        
        <div 
          class="topic-modal modal__container bg-white rounded-lg p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-xl"
          role="dialog" 
          aria-modal="true"
        >
          
          <header class="modal-header flex justify-between items-center mb-4">
            <h2 class="text-2xl font-bold">All Events</h2>
            <button 
              aria-label="Close modal" 
              data-micromodal-close 
              class="text-xl close-modal"
            >
              &times;
            </button>
          </header>

          <ul class="space-y-2 text-sm pt-8">
            ${programs.map(prog => {
              if (!prog?.title) return '';

              return `
                <li class='pb-4'>
                  <h4 class='font-semibold text-xl'>${prog.title}</h4>
                  <span class=' text-lg'>${formatTime(prog)}</span>
                  ${prog.room ? `<a class='event-map-link' href='http://maps.google.com/?q=${prog.location.postcode}${prog.location.address}'><span class='text-lg'>, ${prog.room}</span></a>` : ''}
                </li>
              `;
            }).join('')}
          </ul>

        </div>
      </div>
    </div>
  `;
}