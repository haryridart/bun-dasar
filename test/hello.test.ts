import {describe, it, expect} from 'bun:test';
import { sayHello } from '../src/hello';

describe('Bun test runner', () =>{
    it('should support unit test', async () => {
        const response = sayHello('Hary');
        expect(response).toBe('Hello Hary');
    });
});