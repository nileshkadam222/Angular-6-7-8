import { Coach } from "./Coach";

export class CircketCoach implements Coach{
    getCoachRouting(): string{
        return "start at 6";
    }
}