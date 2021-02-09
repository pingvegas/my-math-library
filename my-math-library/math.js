

function sum(a,b){
    if(Array.isArray(a)){
       return a.reduce((total,n)=>total + n , 0)
    }

    return a+b
}

module.exports = {
    sum,
}
