import Bottle from 'bottlejs';

import { PostsService } from '../services/postsService';

// Create Bottle
const bottle = new Bottle();

// Register services
bottle.service('PostsService', PostsService);

// Return service instance by name
function getService(name) {
    const instance = bottle.container[name];
    if (instance) {
        return instance;
    } else {
        throw new Error(`Service with name "${name} is not defined`);
    }
}

export { 
    bottle,
    getService
}