import Storage from './storage'

class LIST extends Storage {
    constructor () {
        super()
        this.key = 'todolist'
    }
}

export default (new LIST())