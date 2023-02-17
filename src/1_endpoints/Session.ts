import jwt from 'jsonwebtoken';

const expiresIn: string = '2h';
const MAXCOUNT: number = 10;

class Session {
    static generateToken(userName: string): string {
        const token = jwt.sign({'userName':userName}, process.env.TOKEN_SECRET, {expiresIn} )
<<<<<<< HEAD
=======
        console.debug("The token generated (encrypted): " + token);
>>>>>>> 74ad9adc9e1885dedf66b55d1e9b12bb6fbebdc2
        return token;
    }

    static getUserName(token: string): any {
        const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET);
<<<<<<< HEAD
=======
        console.debug("decodedToken: " + decodedToken);
>>>>>>> 74ad9adc9e1885dedf66b55d1e9b12bb6fbebdc2
        return decodedToken.userName;
    }

    static updateCounter(token: string): string {
        return "TODO";
    }
}

export {Session}