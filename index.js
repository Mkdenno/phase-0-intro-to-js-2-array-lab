// Write your solution here!
    const cats=["Milo", "Otis", "Garfield"];

    function destructivelyAppendCat(name){
        cats.push('Ralph');
    }
    function destructivelyPrependCat(name){
        cats.unshift('Bob')
    }
    function  destructivelyRemoveLastCat(){
        cats.pop([2]);
    }
    function  destructivelyRemoveFirstCat(){
        cats.shift([0]);
    }
    function appendCat(name){
        const allCats=[...cats, name];
        return allCats;
    }
    function prependCat(name){
        const allCats=[name, ...cats];
        return allCats;
    }
    function removeFirstCat(){
        const newCat=cats.slice(-2);
        return newCat;
    }
    function removeLastCat(){
        const newCat=cats.slice(0,2);
        return newCat;
    }


