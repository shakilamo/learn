function compair(txt1,txt2){
    const txt11=String(txt1)
    const txt22=String(txt2)
    let counter = 0
    for(let i=0;i<txt11.length;i++){
            if(txt11.includes(txt22[i])){
                counter++
            }
    }
    return counter
}    
console.log(compair("aacdn","cbaa"))