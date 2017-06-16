import { Observable } from 'rxjs/Observable';
import moment from 'moment';

import posts from './data.json';
posts.forEach(p => p.formatedDate = moment(p.date).format('MMMM DD, YYYY'));

class PostsService {

    getPosts(page = 1, perPage = 5) {

        const from = (page - 1) * perPage,
            to = page * perPage;

        const data = posts.slice(from, to);

        const prev = page > 1? page - 1: null,
            next = to < posts.length? page + 1: null;

        return Observable.of({ data, prev, next }).delay(1000);
    }

}

export { PostsService }