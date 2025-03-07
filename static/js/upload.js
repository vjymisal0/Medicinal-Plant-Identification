document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("file-upload");
    const uploadBox = document.getElementById("file-upload-box");
    const uploadText = document.getElementById("upload-text");

    uploadBox.addEventListener("dragover", (event) => {
        event.preventDefault();
        uploadBox.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    });

    uploadBox.addEventListener("dragleave", () => {
        uploadBox.style.backgroundColor = "transparent";
    });

    uploadBox.addEventListener("drop", (event) => {
        event.preventDefault();
        fileInput.files = event.dataTransfer.files;
        uploadText.innerText = fileInput.files[0].name;
    });

    fileInput.addEventListener("change", () => {
        if (fileInput.files.length > 0) {
            uploadText.innerText = fileInput.files[0].name;
        }
    });
});
