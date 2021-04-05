import { SlaughterService } from "./slaughter.service";

describe("The SlaughterService", () => {
    const service = new SlaughterService();

    it("exists", () => {
        expect(service).toBeDefined();
    });

    it("lists pigs to slaughter", async () => {
        const candidates = await service.listPigsToSlaughter();

        expect(candidates).toEqual([]);
    });
});
