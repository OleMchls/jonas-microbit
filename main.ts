input.onButtonPressed(Button.A, function () {
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
    basic.pause(1000)
    maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.LeftMotor)
    maqueenPlusV2.setIndexColor(1, maqueenPlusV2.NeoPixelColors.Red)
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 100)
    basic.pause(2000)
    maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor)
    basic.pause(100)
})
basic.showLeds(`
    . . . . .
    . # . # .
    . # # # .
    . # . # .
    . . . . .
    `)
basic.pause(500)
basic.showLeds(`
    . . . . .
    . # # # .
    . # . # .
    . # # # .
    . # . # .
    `)
basic.pause(500)
basic.showLeds(`
    . # . . .
    . # . . .
    . # . . .
    . # . . .
    . # # # .
    `)
basic.pause(400)
basic.clearScreen()
basic.pause(100)
basic.showLeds(`
    . # . . .
    . # . . .
    . # . . .
    . # . . .
    . # # # .
    `)
basic.pause(500)
basic.showLeds(`
    . . . . .
    . # # # .
    . # . # .
    . # . # .
    . # # # .
    `)
basic.showIcon(IconNames.Heart)
