const should = require('./should');
const { Reactive } = require('./Reactive');
const { Future } = require('./Future');

class MyClass {
    b = { c: 'hello' };
    updateSomeProp() {
        this.b.c = 'world';
    }
}

describe('Reactive / custom', () => {
    it(
        'call custom method',
        should('notify its change made internally', async (scene) => {
            const obj = new Reactive({ a: new MyClass() }).attachTo(scene);
            const future = new Future(async () => {
                return obj.a.b.c;
            });
            should.eq('hello', await future.get(scene));
            obj.a.updateSomeProp();
            should.eq('world', await future.get(scene));
        }),
    );
});
