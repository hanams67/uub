let tag = 0
basic.showLeds(`
    . # # . .
    . . # # .
    . . . . .
    # # # . .
    . # . . .
    `)
basic.showIcon(IconNames.SmallHeart)
if (true) {
    tag = 1 + 0
    music.playMelody("G B F A F E D C ", 5001)
    music.playMelody("A G A B F G - C ", 5001)
    music.playMelody("G - F A E C D C5 ", 5001)
    music.playMelody("D A E E D A D E ", 5001)
    music.playMelody("F F G F F G A F ", 5001)
    music.playMelody("A F - - - F C G ", 5001)
    basic.showLeds(`
        . # . # .
        # . # . .
        # . # . #
        . # # . #
        . # # # .
        `)
}
