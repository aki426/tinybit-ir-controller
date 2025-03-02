makerbit.onIrButton(IrButton.BEEP, IrButtonAction.Released, function () {
    music.stopAllSounds()
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Released, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.TLeft, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 80)
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Right, 80)
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Left, 80)
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 80)
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 80)
})
makerbit.onIrButton(IrButton.TRight, IrButtonAction.Released, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Released, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.Power, IrButtonAction.Pressed, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Released, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.BEEP, IrButtonAction.Pressed, function () {
    music.ringTone(349)
})
makerbit.onIrButton(IrButton.TRight, IrButtonAction.Pressed, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 80)
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Released, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.TLeft, IrButtonAction.Released, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
makerbit.onIrButton(IrButton.Plus, IrButtonAction.Pressed, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Blue)
})
makerbit.connectIrReceiver(DigitalPin.P8)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
})
