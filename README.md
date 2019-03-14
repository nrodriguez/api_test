### Below is my attempt to find a pattern (unsucessfully unfortunatly) based on the puzzle's inputs

```
'A--<- B-->- C--=- D->-- ': ' ABCD A=<<< B>=>< C><=< D>>>= ',
'A--<- B---> C--=- D-->- ': ' ABCD A=<<< B>=>> C><=< D><>= ',

'A->-- B-=-- C-<-- D>--- ': ' ABCD A=>>< B<=>< C<<=< D>>>= ',
'A->-- B-->- C--=- D--<- ': ' ABCD A=>>> B<=>> C<<=> D<<<= ',

'A-->- B---< C---> D---= ': ' ABCD A=>>> B<=<< C<>=> D<><= ',
'A-->- B>--- C--=- D--<- ': ' ABCD A=<>> B>=>> C<<=> D<<<= ',
'A-->- B-=-- C->-- D-<-- ': ' ABCD A=>>> B<=<> C<>=> D<<<= ',
'A-->- B--<- C--=- D>--- ': ' ABCD A=>>< B<=<< C<>=< D>>>= ',

'A=--- B<--- C---> D>--- ': ' ABCD A=><< B<=<< C>>=> D>><= ',
'A=--- B>--- C<--- D->-- ': ' ABCD A=<>< B>=>< C<<=< D>>>= ',
'A=--- B<--- C>--- D-->- ': ' ABCD A=><< B<=<< C>>=< D>>>= ',
'A=--- B>--- C->-- D<--- ': ' ABCD A=<<> B>=<> C>>=> D<<<= ',
'A=--- B---> C<--- D>--- ': ' ABCD A=<>< B>=>> C<<=< D><>= ',
'A=--- B-->- C>--- D<--- ': ' ABCD A=<<> B>=>> C><=> D<<<= ',

'A---> B---< C>--- D---= ': ' ABCD A=><> B<=<< C>>=> D<><= ',
'A---> B>--- C---< D---= ': ' ABCD A=<>> B>=>> C<<=< D<<>= ',
'A---> B--<- C--=- D-->- ': ' ABCD A=>>> B<=<< C<>=< D<>>= ',

'A-<-- B-=-- C---> D->-- ': ' ABCD A=<<< B>=<< C>>=> D>><= ',
'A-<-- B-=-- C->-- D-->- ': ' ABCD A=<<< B>=<< C>>=< D>>>= '
'A->-- B-=-- C>--- D-<--' : ' ABCD A=><> B<=<> C>>=> D<<<=

A---<\nB-->-\nC--->\nD---=\n   :        A=<<<\nB>=>>\nC><=>\nD><<=
A->--\nB--->\nC---<\nD---=\n   :        A=>>>\nB<=>>\nC<<=<\nD<<>=

Trying to deduce a pattern based on inputs

Left ....Becomes..... Right

A-->- B>--- ..... A=<>> B>=>>
A---> B>--- ..... A=<>> B>=>>

A--<- ...... A=<<<
A-<-- ...... A=<<<
A---< ...... A=<<<

B<--- .... B<=<<
B--<- .... B<=<<
B---< .... B<=<<

B---> ..... B>=>>

C<--- ...... C<<=<
C-<-- ...... C<<=<
C---< ...... C<<=<

D<--- ...... D<<<=
D-<-- ...... D<<<=
D--<- ...... D<<<=
```