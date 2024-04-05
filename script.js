var myModal = document.getElementById('newton-modal')
var myInput = document.querySelectorAll('modal-content')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
