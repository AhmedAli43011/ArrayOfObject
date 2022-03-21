const users =[
{
    name:"xyz",
    gender:"female",
    email:"female@gmail.com"
},
{
    name:"abc",
    gender:"male",
    email:"male@gmail.com"
},
]

function checkGender(){
    let findObjGender = users.map((item,index,array) =>{
        if(item.gender === "female"){
              console.log("miss"  + item.name +  "")  
        }
        else if(item.gender === "male"){
            console.log("mr"  + item.name +  "") 
        }
        
    })
}
checkGender()


