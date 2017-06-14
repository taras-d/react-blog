import { Observable } from 'rxjs/Observable';

import posts from './posts.json';

class PostsService {

    getPosts(from = 0, perPage = 5) {

        let data = posts.slice(from, from + perPage);
        data.forEach(i => i.id += '');

        return Observable.of(data).delay(500);
    }

}

const instance = new PostsService();

export {
    PostsService,
    instance as postsService
}