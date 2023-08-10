const bodyLigth = document.querySelector("body");
const Main = document.querySelector("main");
const ImageDiv = document.querySelector(".Image");
const ButtonChange = document.querySelector(".Button");
const NavLigth = document.querySelector("nav");
const FooterLigth = document.querySelector(".Footer");
const SocialMedia = document.querySelector(".Social-Media");
const ImageChange = document.querySelector("#ImageChange");
const Animation = document.querySelector("#Animation");
let Clicked = false;

function LigthMode() {
  if (!Clicked) {
    Animation.style.animation = "Ligth 0.4s forwards";
    ImageChange.src = "./Assets/PerfilLigth.png";
    bodyLigth.classList.add("Body");
    ImageDiv.classList.remove("Image");
    ButtonChange.classList.remove("Button");
    FooterLigth.classList.remove("Footer");
    Main.classList.add("Ligth");
    SocialMedia.classList.remove("Social-Media");
    ImageDiv.classList.add("Image-Ligth");
    ButtonChange.classList.add("Button-Ligth");
    FooterLigth.classList.add("Footer-Ligth");
    SocialMedia.classList.add("Social-Media-Ligth");
    NavLigth.classList.add("Navegation");

    Clicked = true;
  } else {
    Animation.style.animation = "Dark 0.4s forwards";
    ImageChange.src = "./Assets/avatar.png";
    bodyLigth.classList.remove("Body");
    ImageDiv.classList.remove("Image-Ligth");
    Main.classList.remove("Ligth");
    ButtonChange.classList.remove("Button-Ligth");
    FooterLigth.classList.remove("Footer-Ligth");
    SocialMedia.classList.remove("Social-Media-Ligth");
    NavLigth.classList.remove("Navegation");
    ImageDiv.classList.add("Image");
    ButtonChange.classList.add("Button");
    FooterLigth.classList.add("Footer");
    SocialMedia.classList.add("Social-Media");
    Clicked = false;
  }
}
