import { mimicHttpRequest } from 'api/utils';

export class ContactService {

    constructor(logger) {
        this.logger = logger;
    }

    feedback(data) {

        this.logger.logGroup('Feedback', data);

        return mimicHttpRequest(
            700,
            { message: 'Your message successfully sent' }
        );
    }

}