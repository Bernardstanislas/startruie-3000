import { SlaughterService } from "../domain/slaughter/services/slaughter.service";
import { PigsToSlaughterPresenter } from "./pigs-to-slaughter.presenter";

export const listPigsToSlaughter = async (
    slaughterService: SlaughterService,
    presenter: PigsToSlaughterPresenter
) => {
    return presenter(await slaughterService.listPigsToSlaughter());
};
