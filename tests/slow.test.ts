describe("slow test", () => {
    it.concurrent("should test 1", async () => {
        await new Promise(resolve => setTimeout(resolve, 3000));
        expect(1).toBe(1)
    });

    it.concurrent("should test 2", async () => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        expect(2).toBe(2)
    });

    it.concurrent("should test 3", async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        expect(3).toBe(3)
    });
})