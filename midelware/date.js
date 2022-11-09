
const date =(req,res,next)=>{
let date =new Date();
let h=date.getHours()
let d=date.getDay()

if ((h<9 && h>17) || (d>5)){
    res.send(`at ${h}we are close The web application is only available during working hours (Monday to Friday,  from 9 to 17)`)
}
next()

}
module.exports=date