class Storage {
    save(obj){
        localStorage.setItem(this.key, JSON.stringify(obj))
    }
    
    get(){
        return JSON.parse(localStorage.getItem(this.key))
    }
    
    remove (obj){
        localStorage.removeItem(this.key)
    }
}
export default Storage