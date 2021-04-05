import { Brand } from "../type-branding";

export type PigId = Brand<string, "PigId">;

export class Pig {
    constructor(
        public readonly id: PigId,
        public readonly name: string,
        public readonly age: number
    ) {}
}
