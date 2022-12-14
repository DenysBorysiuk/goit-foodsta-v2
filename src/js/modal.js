(() => {
  const refs = {
    openModalBtnHeader: document.querySelector('[data-modal-open-1]'),
    openModalBtnHero: document.querySelector('[data-modal-open-2]'),
    openModalBtnOffer: document.querySelector('[data-modal-open-3]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('[data-page]'),
  };

  refs.openModalBtnHeader.addEventListener('click', toggleModal);
  refs.openModalBtnHero.addEventListener('click', toggleModal);
  refs.openModalBtnOffer.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop--is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();