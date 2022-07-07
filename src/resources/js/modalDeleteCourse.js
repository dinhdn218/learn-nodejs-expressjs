const deleteModal = document.querySelector('#delete-modal');
const formSubmitDelete = document.querySelector('#form-submit-delete');
deleteModal.addEventListener('show.bs.modal', (event) => {
  const button = event.relatedTarget;
  const idRemove = button.getAttribute('data-bs-whatever');
  const confirmButton = deleteModal.querySelector('.btn-confirm');
  formSubmitDelete.setAttribute(
    'action',
    `courses/delete/${idRemove}?_method=DELETE`,
  );
  confirmButton.addEventListener('click', () => {
    formSubmitDelete.submit();
  });
});
