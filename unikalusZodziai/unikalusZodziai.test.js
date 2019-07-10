const unikalusZodziai = require('./unikalusZodziai');

it('Nera duomenu', () => {
    expect( unikalusZodziai() ).toBe('Klaida: nera duomenu')
})

it('Blogas duomenu tipas', () => {
    expect( unikalusZodziai(54161) ).toBe('Klaida: blogas duomenu tipas')
})

it('Correct test (1)', () => {
    expect( unikalusZodziai([
        ['a', 'b', 'c'],
        ['a', 'd', 'e'],
        ['e']
    ]) ).toStrictEqual(['a', 'b', 'c', 'd', 'e'])
})

it('Correct test (2)', () => {
    expect( unikalusZodziai([
        ['a', 'b', 'c'],
        ['e']
    ]) ).toStrictEqual(['a', 'b', 'c', 'e'])
})

it('Zodziai nera tinkamo tipo', () => {
    expect( unikalusZodziai([
        ['a', 'b', 'c'],
        [25, true, false, [], {}],
        ['e']
    ]) ).toStrictEqual(['a', 'b', 'c', 'e'])
})

it('Zodziai nera tinkamo tipo', () => {
    expect( unikalusZodziai([
        ['a', 'b', 'c'],
        258,
        {},
        ['e']
    ]) ).toStrictEqual(['a', 'b', 'c', 'e'])
})

it('Zodziai nera tinkamo tipo', () => {
    expect( unikalusZodziai([
        ['a', 'b', 'c'],
        ['', 'e']
    ]) ).toStrictEqual(['a', 'b', 'c', 'e'])
})
