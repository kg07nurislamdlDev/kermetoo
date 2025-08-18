fetch("gallery.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("gallery");
    data.forEach(item => {
      const div = document.createElement("div");
      div.className = "gallery-item";
      div.innerHTML = `
            <img src="${item.src}" alt="${item.title}">
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error("Медиа жүктөөдө ката:", err));
  
const viewVidthViewer = document.getElementById("viewVidth");

function updateWidth() {
  const screenWidth = window.innerWidth;
  viewVidthViewer.innerHTML = screenWidth;
}

updateWidth();
window.addEventListener("resize", updateWidth);
