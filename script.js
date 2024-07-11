function togglemode () {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img

  const image = document.querySelector("#profile img")

  //substituir a img
  if(html.classList.contains('light')) {
     //se tiver light mode, adicionar a imagem light
    image.setAttribute ('src', './assets/avatar-light (2).png')
    } else {
      //se tiver sem light mode, manter a imagem normal
      image.setAttribute('src','./assets/avatar2.png')
    }
  }