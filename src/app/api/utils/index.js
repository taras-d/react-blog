import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import $ from 'jquery';
import queryString from 'query-string';

export function unsub(...subs) {
    subs.forEach(s => {
        if (s && s instanceof Subscription) {
            s.unsubscribe();
        }
    });
}

export function scrollTop(value = 0) {
    $('html, body').scrollTop(value);
}

export function mimicHttpRequest(config) {

    config = Object.assign({}, {
        delay: 300,
        data: {},
        status: 200,
        statusText: 'OK',
        processError: true
    }, config);

    return Observable.create(obs => {

        const tId = setTimeout(() => {

            if (config.status >= 400 && config.status < 600) {

                const error = { 
                    status: config.status, 
                    statusText: config.statusText 
                } 

                if (config.processError) {
                    // Redirect to error page
                    // TODO: Check if there is a way to use Router outside React component
                    const errorQuery = queryString.stringify(error);
                    window.location = `${window.location.hash? '/#': ''}/error?${errorQuery}`;
                } else {
                    obs.error(error);
                }
                
            } else {
                obs.next(config.data);
                obs.complete();
            }

        }, config.delay);

        return () => clearTimeout(tId);
    });
}