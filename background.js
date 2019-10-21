//create favicon-getter contextmenus
browser.contextMenus.create({
    id:"gets",
    title:"Get favicon!",
    contexts:["all","page","selection","link"],
    icons:{
        "16": "icon/icon.svg"
    }
});

//create empty variables
var hostname = "";

//function
browser.contextMenus.onClicked.addListener((info, tab) => {
    hostname = location.host;

    switch(info.menuItemId){
        case "gets":
            url - "https://www.google.com/s2/favicons?domain="+hostname;
            break;
    }
    browser.tabs.create({url: url});
    navigator.clipboard.writeText(hostname);
});