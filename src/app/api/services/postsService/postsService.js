import { Observable } from 'rxjs/Observable';

import posts from './posts.json';

class PostsService {

    getPosts(from = 0, perPage = 5) {

        let data = posts.slice(from, from + perPage);
        data.forEach(i => i.id += '');

        return Observable.of({
            data: data,
            more: from + perPage < posts.length
        }).delay(500);
    }

}

export { PostsService }