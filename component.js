(function() {
  const html = `
  <div id="audio-player" style="width: 350px; height: 50px; background: #f4f4f4;border-radius: 20px; position: relative">
    
  <div id="controller" style="width: 70px; position: absolute; top: 30%; left: 4%;">
              <div style="float: left; margin-right: 3px;">
                <svg id="fast-backward" style = "width: 20px; height: 20px; cursor: pointer;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"
                role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
                 <path data-name="layer1"
                 fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2" d="M35 27.9l10-6.8v21.8l-10-6.8v6.8L19 32v-.1l16-10.8v6.8z"
                 stroke-linejoin="round" stroke-linecap="round"></path>
                 <circle data-name="layer2" cx="31" cy="32" r="30" fill="none" stroke="#202020"
                 stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></circle>
                 <path data-name="layer1" fill="none" stroke="#202020" stroke-miterlimit="10"
                 stroke-width="2" d="M17 20v24" stroke-linejoin="round" stroke-linecap="round"></path>
               </svg>
              </div>
              
              <div class="play" style="float: left; margin-right: 3px;">
                <svg id="play-icon" style = "width: 20px; height: 20px; cursor: pointer;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"
                role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
                 <path data-name="layer2"
                 fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2" d="M24 18l24 14-24 14V18z"
                 stroke-linejoin="round" stroke-linecap="round"></path>
                 <circle data-name="layer1" cx="32" cy="32" r="30" fill="none" stroke="#202020"
                 stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></circle>
               </svg>
              </div>
              
              <div style="float: left;">
                <svg id="fast-forward" style = "width: 20px; height: 20px; cursor: pointer;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"
                role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
                 <path data-name="layer1"
                 fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2" d="M28 27.9l-10-6.8v21.8l10-6.8v6.8L44 32v-.1L28 21.1v6.8z"
                 stroke-linejoin="round" stroke-linecap="round"></path>
                 <circle data-name="layer2" cx="32" cy="32" r="30" fill="none" stroke="#202020"
                 stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></circle>
                 <path data-name="layer1" fill="none" stroke="#202020" stroke-miterlimit="10"
                 stroke-width="2" d="M46 20v24" stroke-linejoin="round" stroke-linecap="round"></path>
               </svg>
              </div>
              
            </div>
            
        
            <div id="volume" style="position: absolute; right: 10%; bottom: 1%;">
              <svg style = "width: 20px; height: 20px; cursor: pointer;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"
               role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
                <path data-name="layer2"
                d="M44.2 21.8a12 12 0 0 1 0 20.5M50 16a20 20 0 0 1 0 32" fill="none" stroke="#202020"
                stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
                <path data-name="layer1" d="M38 6L20 24H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12l18 18z"
                fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round"
                stroke-linecap="round"></path>
              </svg>
        
              <input id="rangeInput" style="width: 50px; cursor: pointer;" type="range" min="0" max="100" oninput="amount.value=rangeInput.value" />
            </div>
        
            <div id="audio-progress" style="position:absolute; right: 5%; top: 10%;">
              <span class="currenttime time">00:00</span>
              <progress class="progress" style= "cursor: pointer;" value="0"></progress>
              <span class="duration">00:00</span>
            </div>
            
  </div>
  `
  document.body.innerHTML = html;
  const pauseHtml = `
  <svg id="pause" style = "width: 20px; height: 20px; cursor: pointer;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title"
    aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
      <circle data-name="layer2"
      cx="32" cy="32" r="30" fill="none" stroke="#202020" stroke-miterlimit="10"
      stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></circle>
      <path data-name="layer1" fill="none" stroke="#202020" stroke-miterlimit="10"
      stroke-width="2" d="M36 20h4v24h-4zm-12 0h4v24h-4z" stroke-linejoin="round"
      stroke-linecap="round"></path>
    </svg>
  `
  const playDiv = document.querySelector(".play");
  const playHtml = playDiv.innerHTML;
  const pauseDiv = document.createElement("div");
  pauseDiv.style = "float: left; margin-right: 3px;"
  pauseDiv.innerHTML = pauseHtml;

  playDiv.addEventListener("click", function () {
    console.log(playDiv.innerHTML)
    playDiv.innerHTML = pauseHtml
  });
  
})()