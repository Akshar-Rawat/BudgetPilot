const generateRandonColor=()=>{
const existingBudgetLenght=fetchData("budgets")?.length??0
return `${existingBudgetLenght*34} 65% 50%`
}
//Local Storage
export const fetchData=(key)=>{
    return JSON.parse(localStorage.getItem(key))
     
}
//delete item 
export const deleteItem=({key})=>{
return localStorage.removeItem(key)
}
//create budget

export const createBudget=({name,amount})=>{
const newItem={
    id:crypto.randomUUID(),
    name:name,
    createdAt:Date.now()
,
amount:+amount,
color:generateRandonColor()
}

const existingBudgets = fetchData("budgets")??[]
return localStorage.setItem("budget",JSON.stringify({...existingBudgets,newItem}))
}