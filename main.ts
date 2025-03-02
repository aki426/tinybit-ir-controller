makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 40)
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Released, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
makerbit.connectIrReceiver(DigitalPin.P8)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
})
