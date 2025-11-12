let username = "lakshita Sharma";
let currentHour = new Date().getHours();
let greeting;
if(currentHour<12)
{
    greeting=`Good Morning, ${username}`;
}
else if (currentHour<17)
{
    greeting = `Good Afternoon, ${username}`;
}
else{
    greeting = `Good Evening, ${username}`;
}
console.log(greeting);