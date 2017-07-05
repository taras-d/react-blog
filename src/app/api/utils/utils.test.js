import * as utils from '.';

import { Observable } from 'rxjs/Observable';

describe('utils', () => {

    describe('unsub', () => {
        test('subscription has to be closed', () => {
            const sub = new Observable(() => {}).subscribe();
            utils.unsub(sub);
            expect(sub.closed).toBeTruthy();
        });
    });

    describe('mimicHttpRequest', () => {

        test('should return observable', function() {
            expect( utils.mimicHttpRequest() ).toBeInstanceOf(Observable);
        });

        test('should emit data as response', done => {
            utils.mimicHttpRequest({ 
                delay: 100, 
                data: { x: 1 }
            }).subscribe(res => {
                try {
                    expect(res).toEqual({ x: 1 });
                    done();
                } catch (e) {
                    done.fail();
                }
            });
        });

        test('should emit status and status text as error if processError=false', done => {
            utils.mimicHttpRequest({ 
                delay: 100,
                status: 404,
                statusText: 'Not Found',
                processError: false
            }).subscribe(() => {}, err => {
                try {
                    expect(err).toEqual({ status: 404, statusText: 'Not Found' })
                    done();
                } catch(e) {
                    done.fail();
                }
            });
        });

    });

});