
import { Email } from './Email/index.js'

console.log('funguju');

const api = "https://apps.kodim.cz/daweb/trening-api/apis/emails"

const showEmails = (data, element) => {

  element.innerHTML = data.map((item) => {

    const senderName = item.sender.name
    const subject = item.subject
    const time = item.time
    const unread = item.unread

    const props = {
      senderName,
      subject,
      time,
      unread
    }

    return Email(props);

  }).join('');
  
}

fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=unread')
.then((response) => response.json())
.then((data) => showEmails(data.emails, document.getElementById('unread')));

fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=read')
.then((response) => response.json())
.then((data) => showEmails(data.emails, document.getElementById('read')));
