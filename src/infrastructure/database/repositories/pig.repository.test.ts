import { client, close, init } from "..";
import { PigDatabaseRepository } from "./pig.repository";

describe("The pig database repository", () => {
    beforeEach(async () => {
        await init();
    });

    afterEach(async () => {
        await close();
    });

    it("should read pigs from the local database", async () => {
        const repository = new PigDatabaseRepository(client);
        const pigs = await repository.findAll();

        expect(pigs).toHaveLength(1);
        expect(pigs[0]).toMatchObject({ name: "Spider cochon", age: 6 });
    });
});
