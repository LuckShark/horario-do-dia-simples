function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 18
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'manha.jpg'
        document.body.style.backgroundColor = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'tarde.jpg'
        document.body.style.backgroundColor = '#b9846f'
    } else { //já fica implícito que será >=18
        //BOA NOITE
        img.src = 'noite.jpg'
        document.body.style.backgroundColor = '#493B56'
    }
}


