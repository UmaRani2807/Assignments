function BankLoan(score:number, income:number,customerEmployed:boolean, DTIRatio:number)
{
    if(score>750)
    {
        console.log("Loan is approved");
    }
    else if(score<750 && score>650)
    {
        if(income>=50000)
        {
            if(customerEmployed)
            {
                if (DTIRatio < 40)
                {
                    console.log("Loan is approved");
                }
                else
                {
                   console.log("Loan is denied"); 
                }
            }
            else
            {
                console.log("Loan is denied");
            }
        }
        else
        {
            console.log("Loan is denied");
        }
    }
    else if (score<650)
    {
        console.log("Loan is denied");
    }

}