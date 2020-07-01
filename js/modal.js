var writetousLink = document.querySelector(".write-to-us-link");
var writetousPopup = document.querySelector(".modal-write-to-us");
var writetousClose = writetousPopup.querySelector(".modal-close");
var writetousForm = writetousPopup.querySelector(".write-to-us-form");
var writetousName = writetousPopup.querySelector(".write-to-us-name");
var writetousEmail = writetousPopup.querySelector(".write-to-us-email");
var writetousMessage = writetousPopup.querySelector(".write-to-us-message");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

writetousLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  writetousPopup.classList.add("modal-show");

  if (storage) {
    writetousName.value = storage;
    writetousEmail.focus();
  } else {
    writetousName.focus();
  }

});

writetousClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writetousPopup.classList.remove("modal-show");
  writetousPopup.classList.remove("modal-error");
});

writetousForm.addEventListener("submit", function (evt) {
  if (!writetousName.value || !writetousEmail.value || !writetousMessage.value) {
    evt.preventDefault();
    writetousPopup.classList.remove("modal-error");
    writetousPopup.offsetWidth = writetousPopup.offsetWidth;
    writetousPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", writetousName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writetousPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      writetousPopup.classList.remove("modal-show");
      writetousPopup.classList.remove("modal-error");
    }
  }
});
