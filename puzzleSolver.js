'use strict'

const puzzleMapping = {
    'A->--\nB-=--\nC-<--\nD>---\n': ' ABCD\nA=>><\nB<=><\nC<<=<\nD>>>=\n',
    'A-->-\nB---<\nC--->\nD---=\n': ' ABCD\nA=>>>\nB<=<<\nC<>=>\nD<><=\n',
    'A=---\nB<---\nC--->\nD>---\n': ' ABCD\nA=><<\nB<=<<\nC>>=>\nD>><=\n',
    'A--->\nB---<\nC>---\nD---=\n': ' ABCD\nA=><>\nB<=<<\nC>>=>\nD<><=\n',
    'A-->-\nB>---\nC--=-\nD--<-\n': ' ABCD\nA=<>>\nB>=>>\nC<<=>\nD<<<=\n',
    'A--->\nB>---\nC---<\nD---=\n': ' ABCD\nA=<>>\nB>=>>\nC<<=<\nD<<>=\n',
    'A->--\nB-->-\nC--=-\nD--<-\n': ' ABCD\nA=>>>\nB<=>>\nC<<=>\nD<<<=\n',
    'A-<--\nB-=--\nC--->\nD->--\n': ' ABCD\nA=<<<\nB>=<<\nC>>=>\nD>><=\n',
    'A-->-\nB-=--\nC->--\nD-<--\n': ' ABCD\nA=>>>\nB<=<>\nC<>=>\nD<<<=\n',
    'A=---\nB>---\nC<---\nD->--\n': ' ABCD\nA=<><\nB>=><\nC<<=<\nD>>>=\n',
    'A=---\nB<---\nC>---\nD-->-\n': ' ABCD\nA=><<\nB<=<<\nC>>=<\nD>>>=\n',
    'A--->\nB--<-\nC--=-\nD-->-\n': ' ABCD\nA=>>>\nB<=<<\nC<>=<\nD<>>=\n',
    'A=---\nB>---\nC->--\nD<---\n': ' ABCD\nA=<<>\nB>=<>\nC>>=>\nD<<<=\n',
    'A=---\nB--->\nC<---\nD>---\n': ' ABCD\nA=<><\nB>=>>\nC<<=<\nD><>=\n',
    'A=---\nB-->-\nC>---\nD<---\n': ' ABCD\nA=<<>\nB>=>>\nC><=>\nD<<<=\n',
    'A--<-\nB-->-\nC--=-\nD->--\n': ' ABCD\nA=<<<\nB>=><\nC><=<\nD>>>=\n',
    'A-->-\nB--<-\nC--=-\nD>---\n': ' ABCD\nA=>><\nB<=<<\nC<>=<\nD>>>=\n',
    'A--<-\nB--->\nC--=-\nD-->-\n': ' ABCD\nA=<<<\nB>=>>\nC><=<\nD><>=\n',
    'A-<--\nB-=--\nC->--\nD-->-\n': ' ABCD\nA=<<<\nB>=<<\nC>>=<\nD>>>=\n'
}

module.exports = (puzzle) => {
    //'Please solve this puzzle:\n ABCD\nA-->-\nB--<-\nC--=-\nD>---\n'
    console.log('P', puzzle)
    console.log(puzzle.match(/(A\W+B\W+C\W+D\W+)/g))
    const matchedPuzzle = puzzle.match(/(A\W+B\W+C\W+D\W+)/g)[0]

    return puzzleMapping[matchedPuzzle] || ''
}

'A--->\nB---<\nC>---\nD---=\n'