import { Observable } from 'rxjs/Observable';
import moment from 'moment';

import posts from './data.json';
posts.forEach(p => p.formatedDate = moment(p.date).format('MMMM DD, YYYY'));

const delay = 300;

class PostsService {

    getPosts(page = 1, perPage = 5) {

        const from = (page - 1) * perPage,
            to = page * perPage;

        const data = posts.slice(from, to);

        const prev = page > 1? page - 1: null,
            next = to < posts.length? page + 1: null;

        return this._delayResponse({ data, prev, next });
    }

    getPost(id) {
        let post = posts.find(i => i.id === id);
        return this._delayResponse(
            post?
            { data: post }:
            { error: { message: '404 Not Found'} }
        );
    }

    _delayResponse(res) {
        return Observable.create(obs => {
            const id = setTimeout(() => {
                if (res.error) {
                    obs.error(res);
                } else {
                    obs.next(res);
                    obs.complete();
                }
            }, 300);
            return () => clearTimeout(id);
        });
    }

}

export { PostsService }