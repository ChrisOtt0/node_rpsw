import { Hand } from "./Hand";
import { Result } from "./Result";

class Game{
   private clientHand:Hand;
   private computerHand:Hand;
   private gameResult:Result;
   private resultMatrix: number[][] = [
      [ 0, -1, 1, -1 ],
      [ 1, 0, -1, 1],
      [ -1, 1, 0, -1],
      [ 1, -1, 1, 0]
   ];

   public setFairRandomComputerHand():void{
    const MAXIMUMHANDVALUE:number = 3;
    const randomPick:number = Math.floor(Math.random() * (MAXIMUMHANDVALUE+1));
    if (randomPick === 0)
       this.computerHand = Hand.Rock;
    else if (randomPick === 1)
       this.computerHand = Hand.Paper;
    else if (randomPick === 2) {
       this.computerHand = Hand.Scissors;
    } else {
      this.computerHand = Hand.Well;
    }
   }

   public setClientHand(value:number):void{
      if (value === 0)
         this.clientHand = Hand.Rock;
      else if (value === 1)
         this.clientHand = Hand.Paper;
      else if (value === 2) {
        this.clientHand = Hand.Scissors;
      } else {
         this.clientHand = Hand.Well;
      }
   }

   public setGameResult(result:Result){
      this.gameResult=result;
   }

   public getClientHand():Hand{
     return this.clientHand;
   }

   public getComputerHand():Hand{
    return this.computerHand;
   }

   public getGameResult():Result{
      return this.gameResult;
   }

   public evaluate():Result{

      const clienHandNum: number = this.clientHand;
      const computerHandNum: number = this.computerHand;

      const resultNum: number = this.resultMatrix[clienHandNum][computerHandNum];

      if (resultNum === 1) {
         return Result.Won;
      } else if (resultNum === 0) {
         return Result.Draw;
      } else {
         return Result.Lost;
      }

   //   if (this.clientHand===this.computerHand){
   //      return Result.Draw;
   //   } else if(this.clientHand===Hand.Paper && this.computerHand===Hand.Rock){
   //      return Result.Won;
   //   } else if(this.clientHand===Hand.Rock && this.computerHand===Hand.Scissors){
   //      return Result.Won;
   //   } else if(this.clientHand===Hand.Scissors && this.computerHand===Hand.Paper){
   //      return Result.Won;
   //   } else {
   //      return Result.Lost;
   //   }
   }

   // Assignment: break this long method code up
   public displayResultInOneLineInDanish(value:Result):string{
      let line:string ="";
      if (this.clientHand === Hand.Paper) {
         line += "Du valgte papir, ";
      } else if (this.clientHand === Hand.Rock) {
         line += "Du valgte sten, ";
      } else if (this.clientHand === Hand.Scissors) {
         line += "Du valgte saks, ";
      } else {
         line += "Du valgte brønd, ";
      }

      if (this.computerHand === Hand.Paper) {
         line += "computeren valgte papir. ";
      } else if (this.computerHand === Hand.Rock){
         line += "computeren valgte sten.";
      } else if (this.computerHand === Hand.Scissors) {
         line += "computeren valgte saks. ";
      } else {
         line += "computeren valgte saks. ";
      }

      if (value === Result.Draw) {
         line += "I valgte det samme, spil igen!";
      } else if (value===Result.Won) {
         line += "Du vandt spillet!";
      } else {
         line += "Du tabte spillet!";
      }

      return line;
   }

   public displayResultInHTML(value: Result): string {
      let line: string = "<html><body><h1>Client: ";
      if (this.clientHand === Hand.Paper) {
         line += "Paper";
      } else if (this.clientHand === Hand.Rock) {
         line += "Rock";
      } else if (this.clientHand === Hand.Scissors) {
         line += "Scissors";
      } else {
         line += "Well";
      }
      line += "<br/>";

      line += "Computer: ";
      if (this.computerHand === Hand.Paper) {
         line += "Paper";
      } else if (this.computerHand === Hand.Rock) {
         line += "Rock";
      } else if (this.computerHand === Hand.Scissors) {
         line += "Scissors";
      } else {
         line += "Well";
      }
      line += "<br/>";

      if (value === Result.Draw) {
         line += "It's a draw, play again!";
      } else if (value === Result.Won) {
         line += "Client won!";
      } else {
         line += "Client lost!";
      }

      line += "</h1></body></html>";
      return line;
   }

}export {Game}