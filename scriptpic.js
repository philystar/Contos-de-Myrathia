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