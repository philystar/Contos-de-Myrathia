const inputFile = document.querySelector(".pic_input");
const pictureImage = document.querySelector(".pic_img");
const pictureImageTxt = "Escolha uma foto"
pictureImage.innerHTML = pictureImageTxt;
inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target
  const file = inputTarget.files[0]
  if (file) {
    const reader = new FileReader()
    reader.addEventListener("load", function (e) {
      const readerTarget = e.target
      const img = document.createElement("img")
      img.src = readerTarget.result
      img.classList.add("pic_img")
      pictureImage.innerHTML = ""
      pictureImage.appendChild(img)
    })
    reader.readAsDataURL(file)
  } else (pictureImage.innerHTML = pictureImageTxt)
})

document.querySelectorAll(".pic_input").forEach(inputFile => {
  const pictureImage = inputFile.closest(".img").querySelector(".pic_img");
  const pictureImageTxt = "Escolha uma foto";
  pictureImage.innerHTML = pictureImageTxt;

  inputFile.addEventListener("change", function (e) {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.addEventListener("load", function (e) {
        const img = document.createElement("img");
        img.src = e.target.result;
        img.classList.add("pic_img");
        pictureImage.innerHTML = "";
        pictureImage.appendChild(img);
      });
      reader.readAsDataURL(file);
    } else {
      pictureImage.innerHTML = pictureImageTxt;
    }
  });
});