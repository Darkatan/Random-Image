 imgrando = [
    'img0.png',
    'sa1.png',
    'sa2.png',
    'sa3.png',
    'sa4.png',
    'img2.jpg'

]


sound = [

    'risada.mp3'
]


function changeImg() {

   // pegar um index aleatorio

   random_index = Math.floor(Math.random()* imgrando.length);

    // pegar uma imagem do random index

    selected_image = imgrando [random_index]


    // pegar o id random e trocar pela imagem selecionada do indenx na pasta images
    console.log(document.getElementById('random'))
    document.getElementById('random').src = `./images/${selected_image}`

    // pegar o source do id do audio risada no html
    document.getElementById('srp').src = 'risada.mp3'

    // tocar o audio id risada ao apertar o botão
    document.getElementById('laugh').play()


}






