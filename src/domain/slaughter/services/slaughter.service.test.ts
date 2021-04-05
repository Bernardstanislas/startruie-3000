import { SlaughterService } from "./slaughter.service";

describe("The SlaughterService", () => {
    const pigRepository = {
        findAll: jest.fn(),
    };
    const service = new SlaughterService(pigRepository);

    it("exists", () => {
        expect(service).toBeDefined();
    });

    it("lists pigs to slaughter", async () => {
        const candidates = await service.listPigsToSlaughter();

        expect(candidates).toEqual([]);
    });
});
