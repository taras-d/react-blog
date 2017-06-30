import Bottle from 'bottlejs';


import { LoggerService } from '../services/loggerService';
import { PostsService } from '../services/postsService';
import { ContactService } from '../services/contactService';

// Create Bottle
// (https://github.com/young-steveo/bottlejs)
const bottle = new Bottle();

// Register services
bottle.service('LoggerService', LoggerService);
bottle.service('PostsService', PostsService, 'LoggerService');
bottle.service('ContactService', ContactService, 'LoggerService');

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