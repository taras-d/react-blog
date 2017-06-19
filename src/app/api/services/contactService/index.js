import { delayResponse } from 'api/utils';

export class ContactService {

    sendMessage(data) {
        return delayResponse({ message: 'Your message successfully sent' }, 300);
    }

}