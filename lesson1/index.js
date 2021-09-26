const colors= require('colors')

const getPrimes= (num)=>{
    const selve=[];
    const primes=[];

    for (let i=2;i<=num;i++){
        if(!selve[i]){
            primes.push(i);
            for(let j=i*2;j<=num;j+=i){
                selve[j]=true
            }
        }
    }
    return primes.join(' ');
}
console.log(colors.rainbow(getPrimes(process.argv[2])))

