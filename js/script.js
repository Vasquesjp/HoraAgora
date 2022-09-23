function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    let mints = data.getMinutes()
    let segundos = data.getSeconds()
    let atualizar = window.setInterval(() => {carregar()},1000);
    let video1 = window.document.getElementById('video1')
    let video2 = window.document.getElementById('video2')
    let video3 = window.document.getElementById('video3')

    if (hora < 10){
        hora = "0" + hora
    }
    if (mints < 10){
        mints = "0" + mints
    }
    if (segundos < 10){
        segundos = "0" + segundos
    }

    msg.innerHTML = `Agora são ${hora}:${mints}:${segundos} horas.`
    
    if (hora >= 6 && hora < 12) {
         //BOM DIA!
        img.src = './src/imagens/foto_manha.png'
        video1.style.display = 'block';
        video2.style.display = 'none';
        video3.style.display = 'none';
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = './src/imagens/foto_tarde.png'
        video1.style.display = 'none';
        video2.style.display = 'block';
        video3.style.display = 'none';
    } else {
        //BOA NOITE!
        img.src = './src/imagens/foto_noite.png'
        video1.style.display = 'none';
        video2.style.display = 'none';
        video3.style.display = 'block';
    }
}
