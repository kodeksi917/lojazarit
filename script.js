'use strict';

// Elementet e Selektuara
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const zariEl = document.querySelector('.zari');
const btnNew = document.querySelector('.btn--new');
const btnLuaj = document.querySelector('.btn--luaj');
const btnmbaj = document.querySelector('.btn--mbaj');
const aktuale = document.getElementById('current--0');
const aktuale1 = document.getElementById('current--1');
const restarto = document.querySelector('.btn--new');

/// WINNER BOX VARIABLE
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const lojtaripare = document.getElementById('name--0');
const lojtaridyte = document.getElementById('name--1');

let scores, piketakutale, activePlayer, playing;

const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;

  scores = [0, 0];
  piketakutale = 0;
  activePlayer = 0;
  playing = true;

  aktuale.textContent = 0;
  aktuale1.textContent = 0;

  zariEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');

}
init();

/// CLOSE MODAL ME MSHEL WINNER BOX
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  piketakutale = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};


btnLuaj.addEventListener('click', function () {
  if (playing) {
    const zari = Math.trunc(Math.random() * 6) + 1;



    zariEl.classList.remove('hidden');
    zariEl.src = `zari-${zari}.png`;
    if (zari !== 1) {
      piketakutale += zari;
      document.getElementById(
        `current--${activePlayer}`)
        .textContent = piketakutale;
    } else {
      switchPlayer();
    }
  }
});


btnmbaj.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += piketakutale;

    // scores[1] = scores[1] + piketakutale;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      zariEl.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      modal.classList.remove('hidden');
      overlay.classList.remove('hidden');
      activePlayer = document.querySelector('.fituesi').textContent = `Lojtari ${activePlayer} është fituesi 🎉`;

    } else {
      switchPlayer();
    }
  }
});

btnCloseModal.addEventListener('click', function () {
  closeModal();
  init();
}
);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
    init();
  }
});
restarto.addEventListener('click', function () {
  init();

});