function numGiven(val)
{
    var display = document.getElementsByClassName('display');
    if (val=='1' || val=='2' || val=='3' || val=='4' || val=='5' || 
        val=='6' || val=='7' || val=='8' || val=='9' || val=='0' || 
        val=='00'|| val=='+' || val=='-' || val=='/' || val=='*' || val=='.')
    {
        display[0].value += val;
    }
    else if (val=="AC")
    {
        display[0].value = '';
    }
    else if (val=="DE")
    {
        display[0].value = display[0].value.toString().slice(0, -1);
    }
    else if (val=="=")
    {
        display[0].value = eval(display[0].value);
    }
}
