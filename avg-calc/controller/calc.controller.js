export const getEvenAvg = async (req, res) => {
    try{
        const numbers = [6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
        if(numbers.length === 0){
            const result = global.nums.filter(num => num % 2 === 0);
            const avg = result.reduce((acc, curr) => acc + curr, 0) / result.length;
            res.status(200).send({avg});
        }
        else{
            const result1 = numbers.filter(num => num % 2 === 0);
            const result2 = global.nums.filter(num => num % 2 === 0);
            const result = result1.concat(result2);
            const uniqueResult = [...new Set(result)];
            console.log(uniqueResult);
            const avg = uniqueResult.reduce((acc, curr) => acc + curr, 0) / result.length;
            res.status(200).send({avg});
        }
    }
    catch(err){
        res.status(500).send({message: err.message});
    }
}

export const getPrimeAvg = async (req, res) => {
    try{
        const numbers = [];
        if(!numbers){
            const result = global.nums.filter(num => {
                for(let i = 2; i <= Math.sqrt(num); i++){
                    if(num % i === 0){
                        return false;
                    }
                }
                return num > 1;
            });
            const avg = result.reduce((acc, curr) => acc + curr, 0) / result.length;
            res.status(200).send({avg});
        }
        else{
            const result = numbers.filter(num => {
                for(let i = 2; i <= Math.sqrt(num); i++){
                    if(num % i === 0){
                        return false;
                    }
                }
                return num > 1;
            }) + global.nums.filter(num => {
                for(let i = 2; i <= Math.sqrt(num); i++){
                    if(num % i === 0){
                        return false;
                    }
                }
                return num > 1;
            });
            const avg = result.reduce((acc, curr) => acc + curr, 0) / result.length;
            res.status(200).send({avg});
        }
    }
    catch(err){
        res.status(500).send({message: err.message});
    }
}


export const getFibAvg = async (req, res) => {
    try{
        const numbers = [];
        if(!numbers){
            const result = global.nums.filter(num => {
                let a = 0, b = 1, c = 0;
                while(c < num){
                    c = a + b;
                    a = b;
                    b = c;
                }
                return c === num;
            });
            const avg = result.reduce((acc, curr) => acc + curr, 0) / result.length;
            res.status(200).send({avg});
        }
        else{
            const result = numbers.filter(num => {
                let a = 0, b = 1, c = 0;
                while(c < num){
                    c = a + b;
                    a = b;
                    b = c;
                }
                return c === num;
            }) + global.nums.filter(num => {
                let a = 0, b = 1, c = 0;
                while(c < num){
                    c = a + b;
                    a = b;
                    b = c;
                }
                return c === num;
            });
            const avg = result.reduce((acc, curr) => acc + curr, 0) / result.length;
            res.status(200).send({avg});
        }
    }
    catch(err){
        res.status(500).send({message: err.message});
    }
}
