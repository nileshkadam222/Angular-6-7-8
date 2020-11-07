import { Coach } from "./Coach";

export class GlofCoach implements Coach{
    getCoachRouting(): string{
        return "start at 7";
    }
}