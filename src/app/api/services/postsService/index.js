import moment from 'moment';

import { delayResponse } from 'api/utils';

import posts from './data.json';
posts.forEach(p => p.formatedDate = moment(p.date).format('MMMM DD, YYYY'));

const delay = 300;

export class PostsService {

    getPosts(page = 1, perPage = 5) {

        const from = (page - 1) * perPage,
            to = page * perPage;

        const data = posts.slice(from, to);

        const prev = page > 1? page - 1: null,
            next = to < posts.length? page + 1: null;

        return delayResponse({ data, prev, next}, 300);
    }

    getPost(id) {
        let post = posts.find(i => i.id === id);
        return delayResponse(
            post?
            { data: post }:
            { error: { message: '404 Not Found'} },
            300
        );
    }

}