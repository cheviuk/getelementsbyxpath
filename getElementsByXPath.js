document.getElementsByXPath = function(xpath, contextNode)
{
        if(contextNode === undefined)
        {
                var xpathResult = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
        }
        else
        {
                var xpathResult = contextNode.evaluate(xpath, contextNode, null, XPathResult.ANY_TYPE, null);
        }
        var array = [];
        var element;
        element = xpathResult.iterateNext();
        while(element)
        {
                array[array.length] = element;
                element = xpathResult.iterateNext();
        }
        return array;
}

document.getElementByXPath = function(xpath, contextNode)
{
        if(contextNode === undefined)
        {
                var xpathResult = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
        }
        else
        {
                var xpathResult = contextNode.evaluate(xpath, contextNode, null, XPathResult.ANY_TYPE, null);
        }
        return xpathResult.iterateNext();