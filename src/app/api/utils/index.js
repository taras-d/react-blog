import { Subscription } from 'rxjs/Subscription';

export function unsub(...subs) {
    subs.forEach(s => {
        if (s && s instanceof Subscription) {
            s.unsubscribe();
        }
    });
}