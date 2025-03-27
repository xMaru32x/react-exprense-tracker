document.addEventListener('DOMContentLoaded', (event) => {
    function updateFavicon() {
      const favicon = document.querySelector("#favicon");
  
      if (!favicon) {
        console.error("Favicon no encontrado");
        return;
      }
  
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        favicon.setAttribute("href", "src/assets/iconDark.png");
      } else {
        favicon.setAttribute("href", "src/assets/iconLight.png");
      }
    }

    updateFavicon();
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", updateFavicon);
 
});
  