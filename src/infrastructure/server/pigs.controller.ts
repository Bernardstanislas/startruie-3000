import { Request, Response } from "express";
import { PigsToSlaughterPresenter } from "../../application/pigs-to-slaughter.presenter";
import { listPigsToSlaughter } from "../../application/pigs-to-slaughter.usecase";
import { slaughterService } from "../container";

export const pigsController = (req: Request, res: Response): void => {
    const jsonPresenter: PigsToSlaughterPresenter = (pigs) => {
        res.json(pigs);
        res.end();
    };
    listPigsToSlaughter(slaughterService, jsonPresenter);
};
