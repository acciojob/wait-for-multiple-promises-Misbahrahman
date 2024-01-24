function getRandom() {
    return ((Math.floor(Math.random() * 10) % 3) + 1) * 1000;
  }
  
  function changeHtml(i, startTime) {
    let rowEle = document.getElementById(`${i}`);
    let data = rowEle.childNodes[3];

    let row = rowEle.childNodes[1];
    row.textContent =   `Promise ${i}`;
  
    // Calculate time taken and update the second column
    let timeTaken = (new Date().getTime() - startTime) / 1000;
    data.innerText = `${timeTaken}`;
  }
  
  function changeFinal(startTime) {
    let rowEle = document.getElementById(4);
    let row = rowEle.childNodes[1];
    row.textContent =   `Total`;

    let data = rowEle.childNodes[3];
  
    // Calculate total time taken and update the fourth row
    let totalTime = (new Date().getTime() - startTime) / 1000;
    data.innerText = `${totalTime}`;
  }
  
  let startTime = new Date().getTime(); // Record the start time
  
  let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, getRandom());
  });
  
  let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, getRandom());
  });
  
  let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, getRandom());
  });
  
  promise1.then(() => {
    changeHtml(1, startTime);
  });
  promise2.then(() => {
    changeHtml(2, startTime);
  });
  promise3.then(() => {
    changeHtml(3, startTime);
  });
  
  let promises = Promise.allSettled([promise1, promise2, promise3]);
  promises.then(() => {
    changeFinal(startTime);
  });
  
