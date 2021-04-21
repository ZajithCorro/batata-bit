const arrowNext = document.querySelector('span.currency--table-next');
const arrowPrev = document.querySelector('span.commission--table-prev');

const toggleTableToShow = () => {
  const currencyContainer = document.querySelector('div.main--currency-table');
  const commissionContainer = document.querySelector(
    'div.main--commission-table'
  );

  currencyContainer.classList.toggle('d-none');
  commissionContainer.classList.toggle('d-none');
};

arrowNext.addEventListener('click', toggleTableToShow);
arrowPrev.addEventListener('click', toggleTableToShow);
