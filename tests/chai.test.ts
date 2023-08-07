import { assert, describe, expect, it } from "vitest";


function sayHello(name: string): string {
    return `Hello, ${name}`;
}

describe('sayHello', () => {
    it("should return with name", () => {
        expect(sayHello("Fadjrir")).to.be.a("string", "Hello, Fadjrir")
        assert.equal(sayHello("Fadjrir"), "Hello, Fadjrir");
    });
})