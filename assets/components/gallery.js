const gallery = document.getElementById("gallery");

function galleryAdd(media) {
    let content = "";

    for (let info of media)
        content += `<img class="gallery-item ${info.type}" src="${info.url}" alt="Gallery Image" />`;

    document.querySelector("#gallery").innerHTML += content;
}

async function galleryComponent() {}

document.addEventListener("DOMContentLoaded", galleryComponent);
