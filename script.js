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