function receivesAFunction(callBack) {
    return callBack();
};

function returnsANamedFunction() {
    return function aName() {
        
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        
    }
}