import { Pig } from "../entities/pig.entity";
import { PigRepository } from "../repositories/pig.repository";

export class SlaughterService {
    constructor(private readonly pigRepository: PigRepository) {}

    async listPigsToSlaughter(): Promise<Pig[]> {
        const pigs = await this.pigRepository.findAll();
        return pigs.filter(({ age }) => age >= 0.5);
    }
}
