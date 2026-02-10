const fruits =["mango","orange","banana"]
//asecding
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

//descending 
for(let i= fruits.length -1; i>=0; i--){
    console.log(fruits[i]);
}

// for of loop 
for(let ele of fruits){
    console.log(ele);
}