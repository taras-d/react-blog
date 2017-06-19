import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

export function unsub(...subs) {
    subs.forEach(s => {
        if (s && s instanceof Subscription) {
            s.unsubscribe();
        }
    });
}

export function delayResponse(data, delay = 0) {
    return Observable.create(obs => {

        const timeoutId = setTimeout(() => {
            if (data.error) {
                obs.error(data);
            } else {
                obs.next(data);
                obs.complete();
            }
        }, delay);

        return () => clearTimeout(timeoutId);
    });
}