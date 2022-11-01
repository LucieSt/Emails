export const Email = (props) => {

    const { senderName, subject, time, unread } = props;

    let imageClass = 'opened';
      if (unread) {
        imageClass = 'closed'
      }

    //   const element = document.createElement('div');
    //   element.classList.add('email');
    //   element.innerHTML = 
    return `
        <div class="email">
          <div class="email__head">
            <button class="email__icon email__icon--${imageClass}"></button>
            <div class="email__info">
              <div class="email__sender">${senderName}</div>
              <div class="email__subject">${subject}</div>
            </div>
            <div class="email__time">${time}</div>
          </div>
          <div class="email__body"></div>
        </div>
      `
    //   return element;
}
