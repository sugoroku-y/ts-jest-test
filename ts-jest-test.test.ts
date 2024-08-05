describe('ts-jest-test', () => {
    test('import', async () => {
        const { default: esm } = await import('./esm/index.js');
        expect(esm).not.toBeUndefined();
    });
    test('require', async () => {
        expect(() => {
            const { default: esm } = require('./esm');
            expect(esm).not.toBeUndefined();
        }).toThrow(/^Must use import to load ES Module:/);
    });
});
