import React from 'react';
import renderer from 'react-test-renderer';

import Button from './button';

describe('Button', () => {

    test('button tag', () => {
        const cmp = renderer.create(<Button>Ok</Button>);
        expect(cmp.toJSON().type).toBe('button');
    });

    test('children as string', () => {
        const cmp = renderer.create(<Button>Ok</Button>);
        expect(cmp.toJSON().children).toEqual(['Ok']);
    });

    test('children as JSX', () => {
        const cmp = renderer.create(
            <Button>
                Sign In with <b>Google</b>
            </Button>
        );
        expect(cmp.toJSON().children).toEqual([
            'Sign In with ',
            { type: 'b', props: {}, children: ['Google'] }
        ]);
    });

    test('disabled', () => {
        const cmp = renderer.create(<Button disabled>Ok</Button>);
        expect(cmp.toJSON().props.disabled).toBeTruthy();
    });

    test('type', () => {

        let cmp = renderer.create(<Button>Ok</Button>);
        expect(cmp.toJSON().props.type).toBe('submit');

        cmp = renderer.create(<Button type="button">Ok</Button>);
        expect(cmp.toJSON().props.type).toBe('button');
    });

});