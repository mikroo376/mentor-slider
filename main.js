const personImg = document.querySelector('.slider__person');
const personText = document.querySelector('.quote-text');
const author = document.querySelector('.author');

let image = true;

function handleClick() {
  function changeJohn() {
    personImg.src = `/images/image-john.jpg`;
    personText.textContent = `“ If
        you want to lay the best foundation possible I’d recommend taking this
        course. The depth the instructors go into is incredible. I now feel so
        confident about starting up as a professional developer. ”`;
    author.innerHTML =
      'John Tarkpor<span class="job">Junior Front-end Developer</span>';
  }
  function changeTanya() {
    personImg.src = `/images/image-tanya.jpg`;
    personText.textContent = `“ I’ve been interested in coding for a while but never taken the jump,
        until now. I couldn’t recommend this course enough. I’m now in the job
        of my dreams and so excited about the future. ”`;
    author.innerHTML = `Tanya Sinclair<span class="job">UX Engineer</span>`;
  }

  image ? changeJohn() : changeTanya();

  image = !image;
  console.log(job.textContent);
}

document.querySelector('.prevBtn').addEventListener('click', handleClick);
document.querySelector('.nextBtn').addEventListener('click', handleClick);
