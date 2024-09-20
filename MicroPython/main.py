"""
Created by: Caleb Andreas
Created on: Sep 2024
This program shows the temperature.
"""

from microbit import *


# Variable for temperature
finding_Temperature = input.temperature()

# Happy face at start.
display.clear()
display.show(Image.HAPPY)

# Display temperature when the A button is pressed.
while True:
    if button_a.is_pressed():
        display.clear()
        display.scroll("The temperature is: ")
        display.scroll(str(finding_Temperature))
        display.scroll("C.")
        display.show(Image.HAPPY)
