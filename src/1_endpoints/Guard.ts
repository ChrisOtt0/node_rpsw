import { Session } from "./Session";

const MAXNUMBEROFPLAYS: number = 5;

class Guard {
    public static hasSession(request: any): boolean {
        const token: string = request.cookies.tokenKey;
        if (token) {
<<<<<<< HEAD
=======
            console.debug("The user: " + Session.getUserName(token) + "")
>>>>>>> 74ad9adc9e1885dedf66b55d1e9b12bb6fbebdc2
            return true;
        }
        return false;
    }

    public static canContinue(request: any): boolean {
        const token: string = request.cookies.tokenKey;
        // TODO
        return false;
    }
}

export {Guard}