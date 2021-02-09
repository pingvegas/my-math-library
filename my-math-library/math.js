

function sum(a,b){
    if(Array.isArray(a)){
        let total = 0 
        a.forEach((n)=>(total+=n))
        return total
    }

    return a+b
}

module.exports = {
    sum,
}
