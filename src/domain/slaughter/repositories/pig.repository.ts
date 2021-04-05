import { Pig } from "../entities/pig.entity";

export interface PigRepository {
    findAll(): Promise<Pig[]>;
}
