//alert("Hi ivan");
console.log("Hi ");
let ob1 = [{
    name: 'John',
    age: 22,
         },
 {
  surname: 'Klein',
  age: 20,
  profession: 'student',
  },
 {
    profession: 'frontend developer',
      country: 'USA',
    },
  ];


    console.log({...ob1}); 
    console.log({
      name: 'John',
      age: 22,
           },
   {
    surname: 'Klein',
    age: 20,
    profession: 'student',
    },
   {
      profession: 'frontend developer',
        country: 'USA',
      })
    
    function merger({...object}) {
        return object.reduce((acc,item) => {
                     return {...acc, ...item}},{});
                        };

                        