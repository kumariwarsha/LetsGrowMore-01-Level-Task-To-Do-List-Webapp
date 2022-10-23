let count=0;
var styles={
    "background-color":"lightblue",
    "width" : "98%",
    "margin-left" : "10px",
    "margin-rightt" : "8px",
     "border-radius":"7px",
     "display":"flex",
     "flex-direction":"column",
     "align-items":"center",
     "justify-content":"center",
     "border":"2px solid black",
     "margin-top":"4px"
};
var head={
    "width":"94%",
    "text-align":"center",
    "border-radius":"9px",
    "font-size":"12px"
};
var desc={
    "width":"94%",
    "border-radius":"9px"
};
var cutting={
    "color":"white",
    "background-color":"rgb(128, 3, 3)"
};
function save(){
    let title=document.getElementById("title").value;
    let description=document.getElementById("description").value;
    // console.log(title,description);
    let task=document.createElement("div");
    let heading=document.createElement("h1");
    let paragraph=document.createElement("p");
    // heading.appendChild(title);
    // paragraph.appendChild(description);
    // console.log(heading,paragraph);
    let text=document.createTextNode(title);
    heading.appendChild(text);
    heading.style.border="2px solid black";
    Object.assign(heading.style,head);
   text=document.createTextNode(description);
    paragraph.appendChild(text);
    paragraph.appendChild(text);
   paragraph.style.border="2px solid black";
   Object.assign(paragraph.style,desc);
    // console.log(heading,paragraph);
    task.appendChild(heading);
    task.appendChild(paragraph);
    // console.log(task);
    // task.style.color="black";
    Object.assign(task.style,styles)
    let right=document.getElementById("right");
    right.appendChild(task);
    let cut=document.createElement("button");
    text=document.createTextNode("Delete");
  
    cut.appendChild(text);
   
    Object.assign(cut.style,cutting);
    cut.setAttribute("id","button"+count);
    cut.setAttribute("onclick","deleteNote(this.id)");
    // cut.style.border-radius="6px";
    task.appendChild(cut);
    count++;
   
}
function deleteNote(id){
    // console.log("hello");
    // console.log(id);
    let button=document.getElementById(id);
    // console.log(button);
    // console.log(button.parentElement);
let parent=button.parentElement;
parent.style.display="none";


}