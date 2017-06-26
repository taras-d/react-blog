import { delayResponse } from 'api/utils';

export class ContactService {

    constructor(logger) {
        this.logger = logger;
    }

    feedback(data) {

        this.logger.logGroup('Feedback', data);

        return delayResponse(
            300,
            { message: 'Your message successfully sent' }
        );
    }

}