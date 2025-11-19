const myPromise = new Promise((resolve, reject) =>{
    const number = Math.round(Math.random()*100);
    if(number % 2 == 0){
        resolve(number);
    }else{
        reject(new Error(`Error: ${number} is odd`));
    }
});

myPromise 
    .then((n) =>{
        console.log('even number', n);
    })
    .catch((err)=> {
        console.log(err.message)
    });

// india and austrula  promise in by using the promise
    const match = new Promise((resolve, reject) =>{
        let indiaWon = true;
        setTimeout(() =>{
            if(indiaWon) {
                resolve('india wins by 50 runs');
            } else {
                reject(new Error('austrula wins by 8 wickets'));
            }
        }, 4000);
    });

    match
    .then((result) =>{
        console.log(result);
    })
    .catch((err) =>{
        console.log(err.message)
    });