import { Viewer } from "@photo-sphere-viewer/core";
import "@photo-sphere-viewer/core/index.css";

const modalSphereJs = () => {
  const modalSphere = document.querySelector(".modal-sphere");

  const placeBtns = document.querySelectorAll(".btn-main-styles");

  const modalSphereCloseBtn = document.querySelector(
    ".modal-sphere__close-btn"
  );

  let viewerInstance = null;

  function canUseWebP() {
    var elem = document.createElement("canvas");
    if (!!(elem.getContext && elem.getContext("2d"))) {
      // was able or not to get WebP representation
      return elem.toDataURL("image/webp").indexOf("data:image/webp") == 0;
    }
    // very old browser like IE 8, canvas not supported
    return false;
  }

  const supportWebp = canUseWebP();

  const selectThePhoto = (id) => {
    if (id === "m1") return supportWebp ? "../img/1.webp" : "../img/1.jpg";
    if (id === "p1") return supportWebp ? "../img/2.webp" : "../img/2.jpg";
    if (id === "m2") return supportWebp ? "../img/3.webp" : "../img/3.jpg";
    if (id === "r2") return supportWebp ? "../img/4.webp" : "../img/4.jpg";
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
