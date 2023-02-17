import { GridFSBucketReadStream } from "mongodb";
import { BaseHandler } from "./BaseHandler";
import { Guard } from "./Guard";

class CheckAuth extends BaseHandler {
    handle(request: any, response: any): any {
<<<<<<< HEAD
=======
        console.debug("CheckAuth handler...");

>>>>>>> 74ad9adc9e1885dedf66b55d1e9b12bb6fbebdc2
        if (Guard.hasSession(request)) {
            super.getNext().handle(request, response);
        }
    }

}

export {CheckAuth}