import cuLogo from '/cu-logo.svg'

export function renderHeader() {
    
  return `
    <div class="header ">
      <div class='header-top'>
        <a href="https://www.cardiff.ac.uk/" target="_blank">
          <img src="${cuLogo}" class="h-32 w-auto" />
        </a>
        <h1 class="text-cardiff-red font-bold">
          Cardiff University Open Day
        </h1>
      </div>
      <a href='/CUOpenDayTest/CU-Map_23_e.pdf' download>
        <button>
          Download Campus Map
        </button>
      </a>
    </div>

  `;
}