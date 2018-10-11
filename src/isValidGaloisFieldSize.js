export const isValidGaloisFieldSize = (fieldSize) => {
  if(fieldSize <= 1) {return false;}
  else {
    var base = 2;
    var exponent = 1;
    var pow = 0;

    while(base <= fieldSize){
      while(pow < fieldSize){
        pow = Math.pow(base, exponent);
        if(pow == fieldSize) {return true;}
        exponent++;
      }
      base = getNextPrime(base);
      exponent = 1;
      pow = 0;
    }

  }

};


const isPrime = (num) => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1 && num !== 0;
}

const getNextPrime = (num) => {
  do
  {
    num++;
  } while (!isPrime(num));
  return num;
}
