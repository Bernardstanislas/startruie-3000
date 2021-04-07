import { PigRepository } from "../domain/slaughter/repositories/pig.repository";
import { SlaughterService } from "../domain/slaughter/services/slaughter.service";
import { client } from "./database";
import { PigDatabaseRepository } from "./database/repositories/pig.repository";

export let pigRepository: PigRepository;
export let slaughterService: SlaughterService;

export const init = async () => {
    pigRepository = new PigDatabaseRepository(client);
    slaughterService = new SlaughterService(pigRepository);
};
