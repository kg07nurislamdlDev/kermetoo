const API_KEY = "AIzaSyDlxYlHeR45oie1T_e0MJZ_Ej9SS3EvMUk"; // сенин API key
const FOLDER_ID = "1UXo6K8WPzZhxUhfxYUtJOia3jHTCsGse"; // сенин Google Drive папка ID

async function loadGallery() {
  const url = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents&key=${API_KEY}&fields=files(id,name,mimeType)`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    
    console.log("API response full:", JSON.stringify(data, null, 2));
    
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";
    const galleryItem = document.createElement('div');
    galleryItem.classList = "gallery-item";
    gallery.appendChild(galleryItem);
    
    if (!data.files || data.files.length === 0) {
      gallery.innerHTML = "<p>❌ Сүрөт табылган жок.</p>";
      return;
    }
    
    data.files.forEach(file => {
      if (file.mimeType && file.mimeType.startsWith("image/")) {
        // түздөн-түз сүрөт линкин колдонобуз
        const imgUrl = `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media&key=${API_KEY}`;
        const img = document.createElement("img");
        img.src = imgUrl;
        img.alt = "Керме-Тоо сүрөтү";
        galleryItem.appendChild(img);
      }
    });
  } catch (err) {
    console.error("Fetch error:", err);
    document.getElementById("gallery").innerHTML = "<p>⚠️ Ката кетти.</p>";
  }
}

loadGallery();
