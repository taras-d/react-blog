import * as utils from '.';

import { Observable } from 'rxjs/Observable';

test('Unsubscribe subscription(s)', function() {
    const sub = new Observable(() => {}).subscribe();
    utils.unsub(sub);
    expect(sub.closed).toBeTruthy();
});