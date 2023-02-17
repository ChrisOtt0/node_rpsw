import { Hand } from "../3_domain/Hand";
import { Result } from "../3_domain/Result";

interface DisplayStrategy {
<<<<<<< HEAD
    display(clientHand: Hand, computerHand: Hand, gameResult: Result): string;
}

export {DisplayStrategy}
=======
    display(clientHand: Hand, computerHand: Hand, gameResult: Result): string,
}

export { DisplayStrategy }
>>>>>>> 74ad9adc9e1885dedf66b55d1e9b12bb6fbebdc2
