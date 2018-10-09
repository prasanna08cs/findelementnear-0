 let array =[4,5,2];

     let f=array[0],s=array[1];
let l =array.length;
   console.log('array length'+array.length);
 for(let i=0;i<array.length-1;i++){
         console.log(f+s +'is sum'); 
           let j=i+1;
         console.log('j before loop is'+j +'array length'+array.length);
       for( j;j<l;j++){
         console.log('j inside loop is'+j+'array length'+array.length);
            console.log(array[i]+array[j]);
          if(array[i]+array[j]< (f+s)){
            //console.log(`${f}, ${s}`)
                 f= array[i];
                 s =array[j];
             console.log('after exchnage is sum'+f+s);
             }
       }
         
 }
console.log(`${f}, ${s}`)

  
