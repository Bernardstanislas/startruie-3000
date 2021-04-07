import { Client } from "pg";
import { Pig } from "../../../domain/slaughter/entities/pig.entity";
import { PigRepository } from "../../../domain/slaughter/repositories/pig.repository";

export class PigDatabaseRepository implements PigRepository {
    constructor(private readonly client: Client) {}

    async findAll(): Promise<Pig[]> {
        const { rows } = await this.client.query("SELECT * FROM pigs");

        return rows.map(
            (row) => new Pig(row.id, row.name, Number.parseFloat(row.age))
        );
    }
}
