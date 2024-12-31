import readline from "readline";
import fs from "fs";

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
}
);

 function file() {
   rl.question("\nenter file name : ", (name)=>{
    rl.question("\n write file comtetn : ",(content)=>{
        fs.writeFile(`${name}.txt`,content,(err)=>{
            if(err){
                console.error("Writing a file is not successful ")
            }else{
                console.log(`\n File ${name}.txt is created succesfuly\n\n`);
                
            }
            rl.close();
        } )
    })
   }) 
   
}


file();
