let Singleton = (function () {
    let instance;
 
    function createInstance() {
        let object = new Object("I am the instance");
        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
 

let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();
 
console.log(instance1 === instance2); //--> true
