/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(item => {
  if(item.marks>50){
    console.log(item.name);
  	}
  })
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(item => {
    if(item.marks>50){
      console.log(item.name);
    	}
    })
}

function addData() {
  //Write your code here, just console.log
  arr.push({id:3, name:"karen", age:"19",marks:35});
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr.forEach(item => {
        if(item.marks<50){
          arr.splice((item.id-1),1);
        	}
        })
        console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let Arr = [
    { id: 4, name: "a", age: "18", marks: 78 },
    { id: 5, name: "b", age: "20", marks: 55 },
    { id: 6, name: "c", age: "19", marks: 30 },
  ];
   arr=arr.concat(Arr);
   console.log(arr);
}
