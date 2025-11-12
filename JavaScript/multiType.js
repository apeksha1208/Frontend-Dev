let name="Lakshita Sharma";
let age=19;
let isActive=true;
let isAdmin=false;
let emptyValue=null;
let notAssigned;
let person ={name: "lakshita sharma", age:19};
let arr=[1, 2, 3];
let summary=[
    {label: "name", value: name, Type: typeof name},
    {label: "age", value:age, Type: typeof age},
    {label: "isActive", value:isActive, Type: typeof isActive},
    {label: "isAdmin", value:isAdmin, Type: typeof isAdmin},
    {label:"emptyValue", value: emptyValue, Type: typeof emptyValue},
    {label: "notAssigned", value:notAssigned, Type: typeof notAssigned},
    {label: "person", value:person, Type: typeof person},
    {label: "arr", value: arr, Type:Array.isArray(arr)}
]
console.table(summary);