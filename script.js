function c(val)
{
    document.getElementById("board").value = val;
}

function math(val)
{
    document.getElementById("board").value += val;
}

function e()
{
    try
    {
        c(eval(document.getElementById("board").value))
    }
    catch(e)
    {
        c('Error')
    }
}