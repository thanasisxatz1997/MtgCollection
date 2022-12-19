function OpenCollection()
{
    RemovePanels()
    var collectionPanel=document.getElementById("CollectionPanel");
    if(collectionPanel.style.display=="none")
    {
        collectionPanel.style.display="block";
    }
    else
    {
        collectionPanel.style.display="none";
    }
}

function OpenCards()
{
    RemovePanels()
    var cardPanel=document.getElementById("CardPanel");
    if(cardPanel.style.display=="none")
    {
        cardPanel.style.display="flex";
    }
    else
    {
        cardPanel.style.display="none";
    }
}

function RemovePanels()
{
    var cardPanel=document.getElementById("CardPanel");
    var collectionPanel=document.getElementById("CollectionPanel");
    cardPanel.style.display="none"
    collectionPanel.style.display="none"
}