export const ArrayFormater = (object)=>{

    if (!object){
        return [0,0,0,0,0]
    }

    if (!object[0]){
        return [0,0,0,0,0]
    }
   
    var rating =[]

    for(var count=0;count<5;count++){
        rating[count]=object[count].Count
    }
    
    return rating
}

//to return the formatted date
export const dateFormatter = (date) => {
    
    const monthNames = ["January", "February", "March", "April", "May", "June",
                            "July", "August", "September", "October", "November", "December"
                        ];

    const date_ob = new Date(date);

    const dateFormat = date_ob.getDate()+" "+monthNames[date_ob.getMonth()]+" "+date_ob.getFullYear();
    
    return dateFormat
}

// to return the sum
export const sumArray = (object)=>{

    
    if (!object){
        return 0
    }

    if (!object.length){
        
        return 0
    }

    var total = 0;

    for(var count=0;count<object.length;count++){
       total +=object[count].Count
    }
   
    return total
}

export const Count = (objects) => {
    if(!objects){
      return 0
    }

    var count = 0

    for(var i=0;i<objects.length;i++){
      
        count += objects[i].Count 
      }

      return count
    }