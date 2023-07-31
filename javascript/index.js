// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
// ...
const potatoesRecipe = getInstruction('mashedPotatoes', 0, (step1) => {
  getInstruction('mashedPotatoes', 1, (step2) => {
    getInstruction('mashedPotatoes', 2, (step3) => {
      getInstruction('mashedPotatoes', 3, (step4) => {
        getInstruction('mashedPotatoes', 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error))
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
      }, (error) => console.log(error))
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
    }, (error) => console.log(error))
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
  }, (error) => console.log(error))
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
}, (error) => console.log(error))

// Iteration 2 - using promises
// ...
const steakRecipe = obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return (obtainInstruction('steak', 1))
  })
  .catch((err) => console.log(err))
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return (obtainInstruction('steak', 2))
  })
  .catch((err) => console.log(err))
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return (obtainInstruction('steak', 3))
  })
  .catch((err) => console.log(err))
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return (obtainInstruction('steak', 4))
  })
  .catch((err) => console.log(err))
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return (obtainInstruction('steak', 5))
  })
  .catch((err) => console.log(err))
  .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return (obtainInstruction('steak', 6))
  })
  .catch((err) => console.log(err))
  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`
    document.querySelector("#steakImg").removeAttribute("hidden");
  })
  .catch((err) => console.log(err))

// Iteration 3 using async/await
// ...
const broccoliRecipe = async function makeBroccoli() {
  try {
    for (let step = 0; step < broccoli.length; step++) {
      let stepDesc = await obtainInstruction('broccoli', step)
      document.querySelector("#broccoli").innerHTML += `<li>${stepDesc}</li>`;
    } 
  }
  catch(err) {
    console.log(err)
  }
  finally {
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  }
}

broccoliRecipe();

// Bonus 1 - Promise all
// ... Done: Broccoli, steak, mashedPotatoes

// Bonus 2 - Promise all
// ...

let arr = [];

brusselsSprouts.forEach((step) => {
      arr.push(step)
})

Promise.all(arr)
  .then(() => {
    arr.forEach((step) => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`
    })
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  })

// Promise.all([potatoesRecipe, steakRecipe, broccoliRecipe()])
//   .then(() => {
//     brusselsSprouts.forEach((step) => {
//       document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`
//     })
//     document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`
//     document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
//   })