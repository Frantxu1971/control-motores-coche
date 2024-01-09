radio.onReceivedNumber(function (receivedNumber) {
    Control = receivedNumber
})
function Giro_izquierda () {
    wuKong.setAllMotor(0, 100)
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
}
function Retroceder () {
    wuKong.setAllMotor(-100, -100)
    strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
}
function parar () {
    wuKong.stopAllMotor()
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
}
function Giro_derecha () {
    wuKong.setAllMotor(100, 0)
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
}
function Avanzar () {
    wuKong.setAllMotor(100, 100)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
}
let Control = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
Control = 0
radio.setGroup(1)
basic.forever(function () {
    if (Control == 1) {
        Avanzar()
    } else if (Control == 2) {
        Retroceder()
    } else if (Control == 3) {
        Giro_derecha()
    } else if (Control == 4) {
        Giro_izquierda()
    } else {
        parar()
    }
    basic.pause(500)
})
