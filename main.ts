function Stopp () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    0,
    robotbit.Motors.M2A,
    0
    )
}
function Bak () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    SpeedM1 * -1,
    robotbit.Motors.M2A,
    SpeedM2 * -1
    )
}
function Fram () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    SpeedM1,
    robotbit.Motors.M2A,
    SpeedM2
    )
}
let SpeedM2 = 0
let SpeedM1 = 0
basic.showIcon(IconNames.Yes)
SpeedM1 = 150
SpeedM2 = SpeedM1 * (100 / 100) - 30
basic.forever(function () {
    Fram()
    basic.pause(2000)
    Stopp()
    basic.pause(500)
    SpeedM1 = 100
    Bak()
    basic.pause(2000)
    Stopp()
    basic.pause(500)
    SpeedM1 = 200
    Fram()
    basic.pause(2000)
    Stopp()
    while (true) {
    	
    }
})
