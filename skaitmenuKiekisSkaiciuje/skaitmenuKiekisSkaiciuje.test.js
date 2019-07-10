const skaitmenys = require('./skaitmenuKiekisSkaiciuje');

it('Teisingas duomenu tipas (1)', () => {
    expect( skaitmenys('asd') ).toBe('Klaida: blogas duomenu tipas')
})

it('Teisingas duomenu tipas (2)', () => {
    expect( skaitmenys([]) ).toBe('Klaida: blogas duomenu tipas')
})

it('Reikalinga reiksme', () => {
    expect( skaitmenys() ).toBe('Klaida: truksta reiksmes')
})

it('Ar tikras skaicius (1)', () => {
    expect( skaitmenys(NaN) ).toBe('Klaida: ne tikras skaicius')
})

it('Ar tikras skaicius (2)', () => {
    expect( skaitmenys(Infinity) ).toBe('Klaida: ne tikras skaicius')
})

it('Correct test (1)', () => {
    expect( skaitmenys(465) ).toBe(3)
})

it('Correct test (2)', () => {
    expect( skaitmenys(2019) ).toBe(4)
})

// it('Correct test (3)', () => {
//     expect( skaitmenys(3.1415) ).toBe(5)
// })

// it('Correct test (4)', () => {
//     expect( skaitmenys(-3.1415) ).toBe(5)
// })

it('Correct test (5)', () => {
    expect( skaitmenys(0.1) ).toBe(2)
})

it('Correct test (6)', () => {
    expect( skaitmenys(+0.1) ).toBe(2)
})

it('Correct test (7)', () => {
    expect( skaitmenys(1e30) ).toBe(31)
})