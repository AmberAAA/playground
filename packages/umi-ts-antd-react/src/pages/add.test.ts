import { add, sub } from './add'

test('A', () => {
    expect(add(1,2)).toBe(3)
})

test('B', () => {
    expect(sub(2,2)).toBe(0)
})  