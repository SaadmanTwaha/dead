var photo = document.getElementById('file');
var nnn = document.getElementById('contain');


photo.addEventListener('change', addImg);

function addImg(e){
    //console.log(this.files[0].name);
    //console.log('object');
    it = document.querySelector('.item');
    var newDiv = document.createElement('div');
    newDiv.classList = 'item';
    nnn.appendChild(newDiv);
    newDiv.style.backgroundImage = "" //je image ta select korbo ota ekhane add hobe. sadly, kivabe add korte hoy jani na. 


}