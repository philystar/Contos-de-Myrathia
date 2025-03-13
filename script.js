// script.js
function calculateModifier(attribute) {
    // Obtém o valor do atributo
    const attributeValue = parseInt(document.getElementById(attribute).value);

    // Calcula o modificador com base na tabela fornecida
    let modifier;
    if (attributeValue >= 1 && attributeValue <= 2) {
        modifier = -2;
    } else if (attributeValue >= 3 && attributeValue <= 4) {
        modifier = -1;
    } else if (attributeValue >= 5 && attributeValue <= 6) {
        modifier = 0;
    } else if (attributeValue >= 7 && attributeValue <= 8) {
        modifier = +1;
    } else if (attributeValue >= 9 && attributeValue <= 10) {
        modifier = +2;
    } else if (attributeValue >= 11 && attributeValue <= 12) {
        modifier = +3;
    } else if (attributeValue >= 13 && attributeValue <= 14) {
        modifier = +4;
    } else if (attributeValue >= 15 && attributeValue <= 16) {
        modifier = +5;
    } else if (attributeValue >= 17 && attributeValue <= 18) {
        modifier = +6;
    } else if (attributeValue >= 19 && attributeValue <= 20) {
        modifier = +7;
    } else {
        modifier = 0; // Valor padrão se estiver fora do intervalo
    }

    // Atualiza o campo do modificador
    document.getElementById(`${attribute}modifier`).value = modifier;
}
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

                pictureImage.innerHTML = ""; // Limpa o texto "Escolha uma foto"
                pictureImage.appendChild(img);
            });

            reader.readAsDataURL(file);
        } else {
            pictureImage.innerHTML = pictureImageTxt;
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const themeSelector = document.getElementById("themeSelector")
    const root = document.documentElement
    themeSelector.addEventListener("change", function () {
        const theme = this.value
        switch (theme) {
            case "root":
                root.style.setProperty("--cor-background1","#9c9c9c")
                root.style.setProperty("--cor-background2","#D3D3D3")
                root.style.setProperty("--cor-title","#4A4A4A")
                root.style.setProperty("--cor-sheet","#E0E0E0")
                root.style.setProperty("--cor-tabs","#A9A9A9")
                root.style.setProperty("--cor-tabs_hover","#b7b7b7")
                root.style.setProperty("--cor-fields","#b7b7b7")
                root.style.setProperty("--cor-fieldhighlight","#a2a2a2")
                root.style.setProperty("--cor-border","#4A4A4A")
                root.style.setProperty("--cor-border_focus","#A9A9A9")
                root.style.setProperty("--cor-title","#141414")
                root.style.setProperty("--cor-text","#2C2C2C")
                root.style.setProperty("--cor-input","#E0E0E0")
                root.style.setProperty("--cor-background-image", "url()")
            break
            case "Sorvete_de_Morango":
                root.style.setProperty("--cor-background1","#B6465F")
                root.style.setProperty("--cor-background2","#EBD4CB")
                root.style.setProperty("--cor-sheet","#DDA7AA")
                root.style.setProperty("--cor-tabs","#B6465F")
                root.style.setProperty("--cor-tabs_hover","#EBD4CB")
                root.style.setProperty("--cor-fields","#EBD4CB")
                root.style.setProperty("--cor-fieldhighlight","#bf9f93")
                root.style.setProperty("--cor-border","#890620")
                root.style.setProperty("--cor-border_focus","#B6465F")
                root.style.setProperty("--cor-title","#890620")
                root.style.setProperty("--cor-text","#2C0703")
                root.style.setProperty("--cor-input","#E0E0E0")
                root.style.setProperty("--cor-background-image", "url(imagens/petals.png)")
            break
            case "Floresta_Úmida":
                root.style.setProperty("--cor-background1","#6a8f5f")
                root.style.setProperty("--cor-background2","#0e3e30")
                root.style.setProperty("--cor-sheet","#37594a")
                root.style.setProperty("--cor-tabs","#6a8f5f")
                root.style.setProperty("--cor-tabs_hover","#799862")
                root.style.setProperty("--cor-fields","#8DA779")
                root.style.setProperty("--cor-fieldhighlight","#799862")
                root.style.setProperty("--cor-border","#0e3e30")
                root.style.setProperty("--cor-border_focus","#5e833c")
                root.style.setProperty("--cor-title","#2D2620")
                root.style.setProperty("--cor-text","#2D2620")
                root.style.setProperty("--cor-input","#c3c3ae")
                root.style.setProperty("--cor-background-image", "url(imagens/leaves.png)")
            break
            case "Noite":
                root.style.setProperty("--cor-background1","#000000")
                root.style.setProperty("--cor-background2","#100d36")
                root.style.setProperty("--cor-sheet","#1c1848")
                root.style.setProperty("--cor-tabs","#3b3768")
                root.style.setProperty("--cor-tabs_hover","#6a6796")
                root.style.setProperty("--cor-fields","#6a6796")
                root.style.setProperty("--cor-fieldhighlight","#575483")
                root.style.setProperty("--cor-border","#000025")
                root.style.setProperty("--cor-border_focus","#1c1848")
                root.style.setProperty("--cor-title","#d6d4e6")
                root.style.setProperty("--cor-text","#0c0625")
                root.style.setProperty("--cor-input","#d6d4e6")
                root.style.setProperty("--cor-background-image", "url(imagens/stars.png)")
            break
            case "Biblioteca":
                root.style.setProperty("--cor-background1","#3d3934")
                root.style.setProperty("--cor-background2","#3d3934")
                root.style.setProperty("--cor-sheet","#545a53") 
                root.style.setProperty("--cor-tabs","#d4ae9b")
                root.style.setProperty("--cor-tabs_hover","#e6d3b7")
                root.style.setProperty("--cor-fields","#d4ae9b")
                root.style.setProperty("--cor-border","#3d3934")
                root.style.setProperty("--cor-border_focus","#")
                root.style.setProperty("--cor-title","#1c1a17")
                root.style.setProperty("--cor-text","#3d3934")
                root.style.setProperty("--cor-input","#e6d3b7")
                root.style.setProperty("--cor-background-image", "url(imagens/books.png)")
                root.style.setProperty("--cor-fieldhighlight", "#bb9482")
            break
                    
        }
    })
})


