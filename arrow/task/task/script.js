const array =  [5,2,1,8,2,3,3,5,8,4];
const chunk = array.length/2;
const a1 = [];
const a2 = [];


splitIntoChunk(array, chunk);
console.log(a1,a2);

function splitIntoChunk(arr, chunk) {

    for (i = 0; i < arr.length; i++) {
        
        console.log(chunk);
        if (!a1.includes(arr[i]) && a1.length<chunk) {
            a1.push(arr[i]);
            
        }else {
            a2.push(arr[i]);
            }
         
    }
    
};


