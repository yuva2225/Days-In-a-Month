let a = document.querySelector('#year')
let b

function getOption()
{
    b = document.getElementById('month').value;
}
document.querySelector('#sub').addEventListener('click',()=>{
    if(a.value!='')
    {
        switch(b)
        {
            case 'january':
                res.innerHTML = "January Month Consists of 31 days"
                break;
            case 'february':
                if((parseInt(a.value)%4==0 && parseInt(a.value)%100!=0) || (parseInt(a.value)%400==0))
                {
                    res.innerHTML = "Febraury Month Consists of 29 days"
                }
                else
                {
                    res.innerHTML = "Febraury Month Consists of 28 days"
                }
                break;
            case 'march':
                res.innerHTML = "March Month Consists of 31 days"
                break 
            case 'april':
                res.innerHTML = "April Month Consists of 30 days"
                break 
            case 'may':
                res.innerHTML = "May Month Consists of 31 days"
                break 
            case 'june':
                res.innerHTML = "June Month Consists of 30 days"
                break;
            case 'july':
                res.innerHTML = "July Month Consists of 31 days"
                break;
            case 'august':
                res.innerHTML = "August Month Consists of 30 days"
                break;
            case 'september':
                res.innerHTML = "September Month Consists of 30 days"
                break;
            case 'october':
                res.innerHTML = "October Month Consists of 31 days"
                break;
            case 'november':
                res.innerHTML = "November Month Consists of 30 days"
                break;
            case 'december':
                res.innerHTML = "December Month Consists of 31 days"
                break;
            }
        }
        else
        {
            res.innerHTML="Please Enter The Year"
        }
})

