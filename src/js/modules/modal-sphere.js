import { Viewer } from "@photo-sphere-viewer/core";
import "@photo-sphere-viewer/core/index.css";

const modalSphereJs = () => {
  const modalSphere = document.querySelector(".modal-sphere");

  const placeBtns = document.querySelectorAll(".btn-main-styles");

  const modalSphereCloseBtn = document.querySelector(
    ".modal-sphere__close-btn"
  );

  let viewerInstance = null;

  const selectThePhoto = (id) => {
    if (id === "m1") return "../img/1.png";
    if (id === "p1") return "../img/2.png";
    if (id === "m2") return "../img/3.png";
    if (id === "r2") return "../img/4.png";
  };

  //fixes url path

  placeBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      modalSphere.style.display = "flex";
      const btnId = e.target.dataset.id;
      const photoPath = selectThePhoto(btnId);

      if (viewerInstance) {
        viewerInstance.destroy();
      }

      viewerInstance = new Viewer({
        container: document.querySelector("#viewer"),
        panorama: photoPath,
        touchmoveTwoFingers: true,
        mousewheelCtrlKey: true,
      });
      return viewerInstance;
    });
  });

  modalSphereCloseBtn.onclick = function () {
    modalSphere.style.display = "none";
  };
};

export default modalSphereJs;
