function stop(milliSeconds){
    return new Promise(resolve => setTimeout(resolve,milliSeconds));
}
async function messageDelay(message, delayTime){
    await stop(delayTime);
    console.log(message);
}

messageDelay('Have a  nice day' ,3000);

//or
async function logMessage(message,delayTime){
  await new Promise(resolve =>
    setTimeout(resolve,delayTime));
    console.log(message);
}
logMessage("be quick",1000);  




async function getUserData(id){
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve("Find id's of users")
      });
    });
  }

  function user(){
    const id =[1,2,3,4,5,6,7,8,9,10,11,12];
    for(let i=0; i>id.length;i++){
      console.log(id);
    }
  }
 console.log(user());
  

 
 
 
  async function performTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Task incomplete");
        });
    });
}

function checkPerformance() {
    performTask()
       .then(message => {
            console.log(`Success: ${message}`);
        })
       .catch(error => {
            console.error(`Error: ${error}`);
        });
}
checkPerformance();




function unstableTask(taskName, failureProbability) {
  const randomNumber = Math.random();
  return new Promise((resolve, reject) => {
      if (randomNumber > failureProbability) {
          resolve(`Success: ${taskName} completed successfully.`);
      } else {
          reject(`Failure: ${taskName} failed due to high failure probability.`);
      }
  });
}

function unstableTask(taskName,faliureProbability){
  return new Promise(()=>{
   if(randomlyGeneratedNumber>faliureProbability){
    resolve("Success")
   }
   else{
    reject("Failed")
   }
  })
}
function executeWithRetry(taskName,retries,faliureProbability){
  let success = false;
  for (let i = 0; i < retries; i++) {
  unstableTask(taskName, failureProbability)
        .then(message => {
              console.log(message);
              success = true; 
             
         })
         break
}}
executeWithRetry('ExampleTask', 0.3,0.9);

