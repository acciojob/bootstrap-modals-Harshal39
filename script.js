const openModalButton = document.getElementById('open-modal');
openModalButton.addEventListener('click', function() {
  const modal = new bootstrap.Modal(document.getElementById('newton-modal'));
  modal.show();
});
