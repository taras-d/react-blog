
export class LoggerService {

    logGroup(name = 'console.group', ...args) {
        console.group(name);
        console.log(...args);
        console.groupEnd();
    }

}