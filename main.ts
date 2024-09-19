/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Caleb Andreas
 * Created on: Sep 2024
 * This program shows the temperature.
*/

// happy face at start
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// variable for temperature
let findingTemperature = input.temperature()

// display temperature when the a button is pressed
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString('The temperature is: ')
    basic.showNumber(findingTemperature)
    basic.showString('C.')
    basic.showIcon(IconNames.Happy)
})
