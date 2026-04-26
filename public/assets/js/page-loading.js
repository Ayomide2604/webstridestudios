(function () {
  function removePreloader() {
    const preloader = document.querySelector(".page-loading");
    if (preloader) {
      preloader.classList.remove("active");
      setTimeout(function () {
        preloader.remove();
      }, 1000);
    }
  }

  if (document.readyState === "loading") {
    window.addEventListener("load", removePreloader);
  } else {
    removePreloader();
  }
})();
