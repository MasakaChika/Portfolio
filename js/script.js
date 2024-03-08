//all view leftアニメーションの設定
/*function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

function animateOnScroll() {
  const elem = document.querySelector('.allview__left');
  if (isInViewport(elem)) {
    elem.classList.add('slide-in');
  } else {
    elem.classList.remove('slide-in');
  }
}

// スクロールイベントに関数をバインド
window.addEventListener('scroll', animateOnScroll);
*/
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

function animateOnScroll() {
  // .allview__left 要素の選択
  const elemLeft = document.querySelector('.allview__left');
  if (elemLeft && isInViewport(elemLeft)) {
    elemLeft.classList.add('slide-in__left');
  } else {
    elemLeft.classList.remove('slide-in__left');
  }

  // .allview__right 要素の選択
  const elemRight = document.querySelector('.allview__right');
  if (elemRight && isInViewport(elemRight)) {
    elemRight.classList.add('slide-in__right');
  } else {
    elemRight.classList.remove('slide-in__right');
  }
}

// スクロールイベントに関数をバインド
window.addEventListener('scroll', animateOnScroll);

/* ------- copyright year ------- */
const year = document.querySelector('#year');
const date = new Date();
year.textContent = date.getFullYear();

console.log(date.getFullYear()); //年を取得
console.log(date.getDay()); //曜日を取得
console.log(date.getHours()); //時を取得
