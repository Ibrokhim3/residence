const modalFormModule = () => {
  const modalForm = document.getElementById("modalForm");

  const modalFormBtn = document.getElementById("modalFormBtn");

  const modalFormSpan = document.getElementsByClassName("modal-form-close")[0];

  modalFormBtn.onclick = function () {
    modalForm.style.display = "flex";
  };

  modalFormSpan.onclick = function () {
    modalForm.style.display = "none";
  };

  // window.onclick = function (event) {
  //   if (event.target !== modalForm) {
  //     modalForm.style.display = "none";
  //   }
  // };
};

export default modalFormModule;
