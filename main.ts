radio.onReceivedNumber(function (receivedNumber) {
    basic.showArrow(ArrowNames.North)
    if (receivedNumber == 1) {
        kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, 50)
        kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, 50)
    }
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(1)
    basic.showArrow(ArrowNames.North)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(3)
    basic.showArrow(ArrowNames.West)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(4)
    basic.showArrow(ArrowNames.East)
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(2)
    basic.showArrow(ArrowNames.South)
})
basic.forever(function () {
	
})
