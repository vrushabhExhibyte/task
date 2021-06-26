const array =  [5,2,1,8,2,3,3,5,8,4];
const chunk = array.length/2;
const a1 = [];
const a2 = [];


splitIntoChunk(array, chunk);
console.log(a1,a2);

function splitIntoChunk(arr, chunk) {

    for (i = 0; i < arr.length; i++) {
        
       
        if (!a1.includes(arr[i]) && a1.length<chunk) {
            a1.push(arr[i]);
            
            
        }else if  (!a2.includes(arr[i]) ) {
            a2.push(arr[i]);
            } 

         else{
             console.log(a1.length=0);
             console.log(a2.length=0);

         }
    }
    
};




