import moment from 'moment';

import { mimicHttpRequest } from 'api/utils';

import posts from './data.json';
posts.forEach(p => p.formatedDate = moment(p.date).format('MMMM DD, YYYY'));

export class PostsService {

    constructor(logger) {
        this.logger = logger;
    }

    getPosts(page = 1, perPage = 5) {

        this.logger.logGroup('Get posts', { page, perPage });

        const from = (page - 1) * perPage,
            to = page * perPage,
            data = posts.slice(from, to);

        const prev = page > 1? page - 1: null,
            next = to < posts.length? page + 1: null;

        return mimicHttpRequest({
            data: { data, prev, next }
        });
    }

    getPost(id) {

        this.logger.logGroup('Get post', id);

        let post = posts.find(i => i.id === id);
        if (post) {
            return mimicHttpRequest({ data: post });
        } else {
            return mimicHttpRequest({
                status: 404,
                statusText: 'Not Found'
            });
        }
    }

}