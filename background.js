//create favicon-getter contextmenus
chrome.contextMenus.create({
    id:"gets",
    title:"Get favicon from This Site",
    contexts:["all","page","selection","link"],
    icons:{
        "16": "icon/icon.svg"
    }
});

//create empty variables
var domain = "";

//function
chrome.contextMenus.onClicked.addListener((info, tab) => {
    domain = location.host;
    switch(info.menuItemId){
        case "gets":
            url = "https://www.google.com/s2/favicons?domain="+domain;
            break;
    }
    browser.tabs.create({url: url});
    navigator.clipboard.writeText(hostname);
});