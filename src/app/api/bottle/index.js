import Bottle from 'bottlejs';

import { PostsService } from '../services/postsService';
import { ContactService } from '../services/contactService';

// Create Bottle
const bottle = new Bottle();

// Register services
bottle.service('PostsService', PostsService);
bottle.service('ContactService', ContactService);

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