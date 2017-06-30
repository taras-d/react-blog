import { mimicHttpRequest } from 'api/utils';

export class ContactService {

    constructor(logger) {
        this.logger = logger;
    }

    feedback(data) {

        this.logger.logGroup('Feedback', data);

        return mimicHttpRequest({
            delay: 750,
            data: { message: 'Your message successfully sent' }
        });
    }

}