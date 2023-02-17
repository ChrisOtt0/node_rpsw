import { Result } from "../3_domain/Result";
import { Hand } from "../3_domain/Hand";
import { DisplayStrategy } from "./DisplayStrategy";

class TxtStrategy implements DisplayStrategy {
    display(clientHand: Hand, computerHand: Hand, gameResult: Result): string {
        let line:string ="";
      if (clientHand === Hand.Paper) {
         line += "Du valgte papir, ";
      } else if (clientHand === Hand.Rock) {
         line += "Du valgte sten, ";
      } else if (clientHand === Hand.Scissors) {
         line += "Du valgte saks, ";
      } else {
         line += "Du valgte brønd, ";
      }

      if (computerHand === Hand.Paper) {
         line += "computeren valgte papir. ";
      } else if (computerHand === Hand.Rock){
         line += "computeren valgte sten.";
      } else if (computerHand === Hand.Scissors) {
         line += "computeren valgte saks. ";
      } else {
         line += "computeren valgte saks. ";
      }

      if (gameResult === Result.Draw) {
         line += "I valgte det samme, spil igen!";
      } else if (gameResult===Result.Won) {
         line += "Du vandt spillet!";
      } else {
         line += "Du tabte spillet!";
      }

      return line;
    }
}

export {TxtStrategy}