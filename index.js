

const manualUrl=document.getElementById("h-manual")
const inputurl=document.getElementById("h-input")
const unorderedlist=document.getElementById("h-ul");
let deleteUrl=document.getElementById("h-delete");
let saveUrl=document.getElementById("h-saveUrl");
let input=[];
let li_el=document.createElement("li")



let leadsfromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
console.log("currentStatus"+leadsfromLocalStorage)
if(Boolean(leadsfromLocalStorage)){
    console.log("entering into the normal flow")
   input=leadsfromLocalStorage
    rendervalue(input)
 }

// manual url save
manualUrl.addEventListener("click",function(){
   input.push(inputurl.value)
   console.log("Going perfectly")
   inputurl.value=""
   localStorage.setItem("myLeads",JSON.stringify(input))
        rendervalue(input)
   console.log("The value of storageis" +(localStorage.getItem("myLeads")));
   
})

//Fetch all values from array
function rendervalue(expectedLead){
    let list_items=" "
    //let li_el=document.createElement("li")
    //let an_el=document.createElement("a")
    
    console.log("The value is"+leadsfromLocalStorage);
for(let i=0;i<expectedLead.length;i++){
  console.log(expectedLead);
  //create li element
  //include the array value to li
  //append the ul to li
  
  //li_el.textContent="";
  //console.log(li_el.textContent);
  
 //li_el.textContent=input[i] 
 
   
   
    //list_items=unorderedlist.textContent+ " ";
    //simple working way
   // list_items+="<li><a target='_blanks' href=' "+ input[i] +" '>"+input[i]+"</a></li>";

   list_items+=`
   <li><a target='_blank' href=${expectedLead[i]}>${expectedLead[i]}</a></li>`
   
   

 // unorderedlist.textContent+=input[i]    
}
unorderedlist.innerHTML=list_items
//unorderedlist.append(li_el)
}

//delete url

deleteUrl.addEventListener("dblclick",function(){
    localStorage.clear()
    input=[]
    inputurl.value=""
    rendervalue(input)
})

//save the url
saveUrl.addEventListener("click",function(){
    console.log("The value");
   chrome.tabs.query({active: true, currentWindow: true},function(tabs){
    console.log("enter to saveurl mode")    
    input.push(tabs[0].url)
    localStorage.setItem("myLeads",JSON.stringify(input))
   console.log("The value of url is"+tabs[0].url)
    console.log(localStorage.getItem("myLeads"))
    rendervalue(input)
   //unorderedlist.innerHTML+="<li><a href='#'>"+localStorage.getItem("myLeads")+"</a></li>";
})  
})