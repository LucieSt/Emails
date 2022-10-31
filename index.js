console.log('funguju');

const api = "https://apps.kodim.cz/daweb/trening-api/apis/emails"

const showEmails = (data, variable) => {
  console.log(variable);
  let imageClass = 'opened'
  if (variable === 'unread') {
    imageClass = 'closed'
  }

  const element = document.getElementById(variable);

  element.innerHTML = data.map((item) => {

      return `
        <div class="email">
          <div class="email__head">
            <button class="email__icon email__icon--${imageClass}"></button>
            <div class="email__info">
              <div class="email__sender">${item.sender.name}</div>
              <div class="email__subject">${item.subject}</div>
            </div>
            <div class="email__time">${item.time}</div>
          </div>
          <div class="email__body"></div>
        </div>
      `
  }).join('');
  
}

fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=unread')
.then((response) => response.json())
.then((data) => showEmails(data.emails, 'unread'));

fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=read')
.then((response) => response.json())
.then((data) => showEmails(data.emails, 'read'));
