/* Set the width of the side navigation to 250px */
//var domObject={objProfieleCard,objAccordionCard,objWorkCard,objJumbotronCard,objImg,objImgsrc,objParam}
var objProfieleCard = document.getElementById("profieleCard");
var objAccordionCard = document.getElementById("accordionCard");
var objWorkCard = document.getElementById("workCard");
var objJumbotronCard = document.getElementById("jumbotronCard");

function openNav(num) {
    

    if (window.matchMedia('(min-width: 1201px)').matches) {
        let numWidth = document.getElementsByName("img")[num].style.width;
        changeStyle([objProfieleCard,objAccordionCard,objWorkCard,objJumbotronCard],[{stylename:"display",value:"block"}]);

        for (var i = 0; i < document.getElementsByName("img").length; i++) {
            let objImg = document.getElementsByName("img")[i];
            let objImgsrc = document.getElementsByName("imgsrc")[i];
            let objParam = document.getElementsByName("param")[i];
            let objContentsBox = document.getElementsByName("contentsBox")[i];
            let objJparam = document.getElementById("jparam");
            
            
            if (numWidth == "70%") {
                changeStyle([objImg],[{stylename:"width",value:"25%"}]);
                changeStyle([objImgsrc],[{stylename:"width",value:"100%"},{stylename:"filter",value:"blur(0px)"}]);
                changeStyle([objParam],[{stylename:"width",value:"auto"},{stylename:"fontSize",value:"3vw"},{stylename:"paddingLeft",value:""}]);
                changeStyle([objProfieleCard,objAccordionCard,objWorkCard,objJumbotronCard],[{stylename:"height",value:"0rem"}]);

                let ContentsBoxstyleObj = [
                    {stylename:"width",value:"150%"},
                    {stylename:"height",value:"0%"},
                    {stylename:"left",value:"100%"},
                    {stylename:"color",value:"Transparent"},
                    {stylename:"top",value:"20rem"}
                ]
                changeStyle([objContentsBox],ContentsBoxstyleObj);

                changeStyle([objJparam],[{stylename:"top",value:"0rem"},{stylename:"color",value:"Transparent"}]);
                actionAccBtn('close');
                
                
                
            } else {
                if (num != i) {
                    //passive
                    changeStyle([objImg],[{stylename:"width",value:"10%"}]);
                    changeStyle([objImgsrc],[{stylename:"width",value:"100%"},{stylename:"filter",value:"blur(0px)"}]);
                    changeStyle([objParam],[{stylename:"width",value:"auto"},{stylename:"fontSize",value:"1.5vw"},{stylename:"paddingLeft",value:""}]);
                    
                    changeCardStyle(i,'passive','large');

                    let ContentsBoxstyleObj = [
                        {stylename:"width",value:"150%"},
                        {stylename:"height",value:"0%"},
                        {stylename:"left",value:"100%"},
                        {stylename:"color",value:"Transparent"},
                        {stylename:"top",value:"20rem"}
                    ]
                    changeStyle([objContentsBox],ContentsBoxstyleObj);
                    changeStyle([objJparam],[{stylename:"top",value:"0rem"},{stylename:"color",value:"Transparent"}]);
                    actionAccBtn('close');
                } else {
                    //active
                    changeStyle([objImg],[{stylename:"width",value:"70%"}]);
                    changeStyle([objImgsrc],[{stylename:"width",value:"100%"},{stylename:"filter",value:"blur(3px)"}]);
                    changeStyle([objParam],[{stylename:"width",value:"100%"},{stylename:"fontSize",value:"3vw"},{stylename:"paddingLeft",value:"10rem"}]);
                    changeCardStyle(i,'active','large');

                    let ContentsBoxstyleObj = [
                        {stylename:"width",value:"80%"},
                        {stylename:"height",value:"20vw"},
                        {stylename:"left",value:"15%"},
                        {stylename:"color",value:"#808080"},
                        {stylename:"top",value:"0rem"}
                    ]
                    changeStyle([objContentsBox],ContentsBoxstyleObj);
                    changeStyle([objJparam],[{stylename:"top",value:"10rem"},{stylename:"color",value:"#808080"}]);   
                }
            }
        }
    } else if (window.matchMedia('(max-width: 1200px)').matches) {
        let numWidth = document.getElementsByName("imgsrc")[num].style.width;
        let imgHeight;

        for (var i = 0; i < document.getElementsByName("img").length; i++) {
            let objImg = document.getElementsByName("img")[i];
            let objImgsrc = document.getElementsByName("imgsrc")[i];
            let objParam = document.getElementsByName("param")[i];
            let objContentsBox = document.getElementsByName("contentsBox")[i];
            let objJparam = document.getElementById("jparam");
            console.log(num);
            console.log(numWidth);
            if (numWidth == "10%") {
                changeStyle([objImg],[{stylename:"height",value:"20vw"}]);
                changeStyle([objImgsrc],[{stylename:"width",value:"100%"}]);
                changeStyle([objParam],[{stylename:"width",value:"auto"},{stylename:"fontSize",value:"3vw"},{stylename:"paddingLeft",value:""}]);
                changeStyle([objProfieleCard,objAccordionCard,objWorkCard,objJumbotronCard],[{stylename:"height",value:"0rem"},{stylename:"display",value:"none"}]);
                let ContentsBoxstyleObj = [
                    {stylename:"width",value:"0%"},
                    {stylename:"height",value:"0%"},
                    {stylename:"left",value:"100%"},
                    {stylename:"color",value:"Transparent"}
                ]
                changeStyle([objContentsBox],ContentsBoxstyleObj);
                changeStyle([objJparam],[{stylename:"top",value:"0rem"},{stylename:"color",value:"Transparent"}]);
                actionAccBtn('close');
                
            } else {
                if (num != i) {
                    //passive
                    changeStyle([objImg],[{stylename:"height",value:"10vw"}]);
                    changeStyle([objImgsrc],[{stylename:"width",value:"100%"}]);
                    changeStyle([objParam],[{stylename:"width",value:"auto"},{stylename:"fontSize",value:"1.5vw"},{stylename:"paddingLeft",value:""}]);
                    let ContentsBoxstyleObj = [
                        {stylename:"width",value:"0%"},
                        {stylename:"height",value:"0%"},
                        {stylename:"left",value:"100%"},
                        {stylename:"color",value:"Transparent"}
                    ]
                    changeStyle([objContentsBox],ContentsBoxstyleObj);
                    changeCardStyle(i,'passive','small');
                    actionAccBtn('close');
                    
                } else {
                    //active
                    let ContentsBoxstyleObj = [
                        {stylename:"width",value:"100%"},
                        {stylename:"height",value:"auto"},
                        {stylename:"left",value:"100%"},
                        {stylename:"color",value:"Transparent"}
                    ]
                    changeStyle([objContentsBox],ContentsBoxstyleObj);

                    if(num==0){
                        document.getElementById("profieleCard").style.display = "block";
                        changeStyle([objProfieleCard],[{stylename:"height",value:"auto"},{stylename:"width",value:"80%"}]);
                        imgHeight = objProfieleCard.clientHeight + 100;
                    }else if(num==1){
                        document.getElementById("accordionCard").style.display = "block";
                        document.getElementById("accordionCard").style.width = "80%";
                        let ContentsBoxstyleObj = [
                            {stylename:"width",value:"100%"},
                            {stylename:"height",value:"auto"},
                            {stylename:"marginLeft",value:"-80px"},
                            {stylename:"color",value:"Transparent"}
                        ]
                        changeStyle([objContentsBox],ContentsBoxstyleObj);
                        
                        imgHeight = document.getElementById("collapseOne").clientHeight+150;
                        actionAccBtn('open');
                    }else if(num==2){
                        changeStyle([objWorkCard],[{stylename:"display",value:"block"}]);
                        changeStyle([objImg],[{stylename:"height",value:"500px"}]);

                        objWorkCard.addEventListener('transitionend', function() {
                            imgHeight = objWorkCard.clientHeight + 100;
                            changeStyle([objImg],[{stylename:"height",value:imgHeight+"px"}]);
                        });
                    }else if(num==3){
                        document.getElementById("jumbotronCard").style.display = "inline-block";
                        imgHeight = objJumbotronCard.clientHeight +100;
                    }
                    
                    changeStyle([objImgsrc],[{stylename:"height",value:"100%"},{stylename:"width",value:"10%"}]);
                    changeStyle([objParam],[{stylename:"width",value:"100%"},{stylename:"fontSize",value:"3vw"},{stylename:"paddingLeft",value:"5rem"}]);

                    document.getElementsByName("contentsBox")[i].style.left = "15%";
                    document.getElementsByName("contentsBox")[i].style.height = "100%";
                    document.getElementsByName("contentsBox")[i].style.color = "#808080";
                    
                    
                }
            }
        }
        
    }
    return

}


function convertTable(json) {
    Object.keys(json);

}

var handleWindowResize = function () {
    var objthumbnail = document.getElementById('thumbnail');

    // モバイル
    if (/Android|iPhone|iPod/i.test(navigator.userAgent)) {
        // TODO
        return;
    }

    if (window.matchMedia('(max-width: 1200px)').matches) {
        // max-width 以下になったら
        changeStyle([objthumbnail],[{stylename:"height",value:"5rem"},{stylename:"width",value:"5rem"}]);
        changeStyle([objProfieleCard,objAccordionCard,objWorkCard,objJumbotronCard],[{stylename:"display",value:"none"}]);
        changeStyle([objProfieleCard,objAccordionCard,objWorkCard,objJumbotronCard],[{stylename:"height",value:"auto"},{stylename:"width",value:"80%"}]);
        

        for (var i = 0; i < document.getElementsByName("img").length; i++) {
            let objImg = document.getElementsByName("img")[i];
            let objImgsrc = document.getElementsByName("imgsrc")[i];
            let objParam = document.getElementsByName("param")[i];
            let objContentsBox = document.getElementsByName("contentsBox")[i];
            let objJparam = document.getElementById("jparam");
            let ContentsBoxstyleObj = [
                {stylename:"width",value:"80%"},
                {stylename:"height",value:"0%"},
                {stylename:"left",value:"100%"},
                {stylename:"color",value:"Transparent"},
                {stylename:"paddingTop",value:"0"},
                {stylename:"top",value:"0"}
            ]

            changeStyle([objImg],[{stylename:"height",value:"20vw"},{stylename:"width",value:"100%"}]);
            changeStyle([objImgsrc],[{stylename:"width",value:"100%"},{stylename:"filter",value:"blur(0px)"}]);
            changeStyle([objParam],[{stylename:"width",value:"auto"},{stylename:"fontSize",value:"3vw"},{stylename:"top",value:"0.5rem"},{stylename:"paddingLeft",value:""}]);
            changeStyle([objContentsBox],ContentsBoxstyleObj);


            document.getElementsByClassName("img-box")[i].style.width = "100%";

            objParam.addEventListener('transitionend', function() {
                imgHeight = objParam.clientHeight + 20;
                objContentsBox.style.paddingTop = imgHeight+"px";
            });

            
        }
    } else if (window.matchMedia('(min-width:1201px)').matches) {
        changeStyle([objthumbnail],[{stylename:"height",value:"10rem"},{stylename:"width",value:"10rem"}]);
        changeStyle([objProfieleCard,objAccordionCard,objWorkCard,objJumbotronCard],[{stylename:"display",value:"none"}]);        

        for (let i = 0; i < document.getElementsByName("img").length; i++) {
            let objImg = document.getElementsByName("img")[i];
            let objImgsrc = document.getElementsByName("imgsrc")[i];
            let objParam = document.getElementsByName("param")[i];
            let objContentsBox = document.getElementsByName("contentsBox")[i];
            let ContentsBoxstyleObj = [
                {stylename:"width",value:"150%"},
                {stylename:"height",value:"0%"},
                {stylename:"left",value:"100%"},
                {stylename:"color",value:"Transparent"},
                {stylename:"paddingTop",value:"10rem"},
                {stylename:"top",value:"20rem"}
            ]

            changeStyle([objImg],[{stylename:"height",value:"50rem"},{stylename:"width",value:"25%"}]);
            changeStyle([objImgsrc],[{stylename:"width",value:"100%"},{stylename:"filter",value:"blur(0px)"}]);
            changeStyle([objParam],[{stylename:"width",value:"auto"},{stylename:"fontSize",value:"3vw"},{stylename:"paddingLeft",value:"3rem"},{stylename:"top",value:"3rem"}]);
            changeStyle([objProfieleCard,objAccordionCard,objWorkCard,objJumbotronCard],[{stylename:"height",value:"0rem"},]);
            changeStyle([objContentsBox],ContentsBoxstyleObj);
            objParam.addEventListener('transitionend', function() {
                objContentsBox.style.paddingTop = "10rem";
            });
        }
    }

};
handleWindowResize(); // 最初の調整

// レスポンシブ処理をイベントに登録
window.addEventListener('resize', function () {
    handleWindowResize();
});

function recursion(obj){
    var tempArray = Array.prototype.slice.call(obj.children);
    /*ここで要素を何か操作する*/
    tempArray.forEach(recursion);
}

//docObj:document object
function changeStyle(docObj,style){
    let objStyle,stylestylename,stylevalue;

    for(let i = 0;i<docObj.length;i++){
        objStyle = docObj[i].style;

        for(let j = 0;j<style.length;j++){
            stylestylename = style[j].stylename;
            stylevalue = style[j].value;
            objStyle[stylestylename] = stylevalue;
        }
    }
}
function changeCardStyle(num,mode,windowSize){
    let heightSize;
    let btnAction;
    if(mode=='passive'){
        if(windowSize=='large'){
            heightSize = '0rem';
        }else if(windowSize=='small'){
            heightSize = '0rem';
        }
        
        btnAction = 'close';
    }else if(mode=='active'){
        if(windowSize=='large'){
            heightSize = '30rem';
        }else if(windowSize=='small'){
            heightSize = '0rem';
        }
        
        btnAction = 'open';
    }
    if(num==3){
        if(windowSize=='large'){
            document.getElementById("jumbotronCard").style.height = heightSize;
        }else if(windowSize=='small'){
            document.getElementById("jumbotronCard").style.height = 'none';
        }
        
    }else if(num==2){
        if(windowSize=='large'){
            document.getElementById("workCard").style.height = heightSize;
        }else if(windowSize=='small'){
            document.getElementById("workCard").style.height = 'none';
        }
    }else if(num==1){
        if(windowSize=='large'){
            document.getElementById("accordionCard").style.height = heightSize;
        }else if(windowSize=='small'){
            document.getElementById("accordionCard").style.height = 'none';
        }
        actionAccBtn(btnAction);
    }else if(num==0){
        if(windowSize=='large'){
            document.getElementById("profieleCard").style.height = heightSize;
        }else if(windowSize=='small'){
            document.getElementById("profieleCard").style.height = 'none';
        }
    }else{
    }
}

function actionAccBtn(mode){
    let objAccBtn = document.getElementById("accBtn");
    if(mode=='open'){
        if(document.getElementById("collapseOne").getAttribute("class")=="collapse"){
            objAccBtn.click();
        }
    }else if(mode=='close'){
        if(document.getElementById("collapseOne").getAttribute("class")=="collapse show"){
            objAccBtn.click();
        }
    }
    

}