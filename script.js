let Color = 'Black'
var blackk = document.getElementById("color1")
window.onload = initialColor()
function selected(param) {
    var black = document.getElementById("color1")
    var red = document.getElementById("color2")
    var aqua = document.getElementById("color3")
    var orange = document.getElementById("color4")
    if (param === 'Black'){
      black.classList.add("selected")
      red.classList.remove("selected")
      aqua.classList.remove("selected")
      orange.classList.remove("selected")
      Color = 'Black'
    } else if (param === 'Red') {
        black.classList.remove("selected")
        red.classList.add("selected")
        aqua.classList.remove("selected")
        orange.classList.remove("selected")
        Color = 'Red'
    }else if (param === 'Aqua') {
        black.classList.remove("selected")
        red.classList.remove("selected")
        aqua.classList.add("selected")
        orange.classList.remove("selected")
        Color = 'Aqua'
    }else if (param === 'Orange') {
        black.classList.remove("selected")
        red.classList.remove("selected")
        aqua.classList.remove("selected")
        orange.classList.add("selected")
        Color = 'Orange'
    }

}
function initialColor() {
    Color = 'Black'
}
function paint(Color,pixel) {
    document.getElementById(pixel).style.backgroundColor = Color
}
function limpar() {
    document.getElementById("pixel1").style.backgroundColor = 'White'
    document.getElementById("pixel2").style.backgroundColor = 'White'
    document.getElementById("pixel3").style.backgroundColor = 'White'
    document.getElementById("pixel4").style.backgroundColor = 'White'
    document.getElementById("pixel5").style.backgroundColor = 'White'
    document.getElementById("pixel6").style.backgroundColor = 'White'
    document.getElementById("pixel7").style.backgroundColor = 'White'
    document.getElementById("pixel8").style.backgroundColor = 'White'
    document.getElementById("pixel9").style.backgroundColor = 'White'
    document.getElementById("pixel10").style.backgroundColor = 'White'
    document.getElementById("pixel11").style.backgroundColor = 'White'
    document.getElementById("pixel12").style.backgroundColor = 'White'
    document.getElementById("pixel13").style.backgroundColor = 'White'
    document.getElementById("pixel14").style.backgroundColor = 'White'
    document.getElementById("pixel15").style.backgroundColor = 'White'
    document.getElementById("pixel16").style.backgroundColor = 'White'
    document.getElementById("pixel17").style.backgroundColor = 'White'
    document.getElementById("pixel18").style.backgroundColor = 'White'
    document.getElementById("pixel19").style.backgroundColor = 'White'
    document.getElementById("pixel20").style.backgroundColor = 'White'
    document.getElementById("pixel21").style.backgroundColor = 'White'
    document.getElementById("pixel22").style.backgroundColor = 'White'
    document.getElementById("pixel23").style.backgroundColor = 'White'
    document.getElementById("pixel24").style.backgroundColor = 'White'
    document.getElementById("pixel25").style.backgroundColor = 'White'
}