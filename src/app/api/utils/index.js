import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import $ from 'jquery';

export function unsub(...subs) {
    subs.forEach(s => {
        if (s && s instanceof Subscription) {
            s.unsubscribe();
        }
    });
}

export function delayResponse(delay = 0, data) {
    return Observable.create(obs => {
        const tId = setTimeout(() => {
            if (data.error) {
                obs.error(data);
            } else {
                obs.next(data);
                obs.complete();
            }
        }, delay);
        return () => clearTimeout(tId);
    });
}

export function scrollTop(value = 0) {
    $('html, body').scrollTop(value);
}