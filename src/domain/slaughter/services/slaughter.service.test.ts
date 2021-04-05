import { Pig, PigId } from "../entities/pig.entity";
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
        const spiderCochon = new Pig(
            "spider-cochon" as PigId,
            "Spider Cochon",
            2
        );
        const peppaPig = new Pig("peppa" as PigId, "Peppa Pig", 0.3);
        pigRepository.findAll.mockResolvedValue([spiderCochon, peppaPig]);

        const candidates = await service.listPigsToSlaughter();

        expect(candidates).toEqual([spiderCochon]);
    });
});
