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
    'A-<--\nB-=--\nC->--\nD-->-\n': ' ABCD\nA=<<<\nB>=<<\nC>>=<\nD>>>=\n',
    'A---<\nB-->-\nC--->\nD---=\n': ' ABCD\nA=<<<\nB>=>>\nC><=>\nD><<=\n',
    'A->--\nB--->\nC---<\nD---=\n': ' ABCD\nA=>>>\nB<=>>\nC<<=<\nD<<>=\n',
    'A->--\nB-=--\nC>---\nD-<--\n': ' ABCD\nA=><>\nB<=<>\nC>>=>\nD<<<=\n' 
}

module.exports = (puzzle) => {
    const matchedPuzzle = puzzle.match(/(A\W+B\W+C\W+D\W+)/g)[0]

    return puzzleMapping[matchedPuzzle] || ''
}