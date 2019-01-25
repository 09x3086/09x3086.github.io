/* Set the width of the side navigation to 250px */
function openNav(num) {
    var objProfieleCard = document.getElementById("profieleCard");
    var objAccordionCard = document.getElementById("accordionCard");
    var objWorkCard = document.getElementById("workCard");
    var objJumbotronCard = document.getElementById("jumbotronCard");

    
    

    if (window.matchMedia('(min-width: 1201px)').matches) {
        //recursion(document.getElementsByName("img")[num]);
        changeStyle([objProfieleCard,objAccordionCard,objWorkCard,objJumbotronCard],{key:"display",value:"block"});
        //document.getElementById("profieleCard").style.display = "block";
        //document.getElementById("accordionCard").style.display = "block";
        //document.getElementById("workCard").style.display = "block";
        //document.getElementById("jumbotronCard").style.display = "block";

        //document.getElementsByClassName("row")[0].style.width = "150%";
        //表示されているコンテンツのサイズ
        var numWidth = document.getElementsByName("img")[num].style.width;

        
        //リストボックスの開閉
        if (num == 1 && document.getElementById("collapseOne").getAttribute('class') == "collapse") {
            document.getElementById("collapseOne").setAttribute('class', 'collapse show');
        } else {
            document.getElementById("collapseOne").setAttribute('class', 'collapse');
        }
        for (var i = 0; i < document.getElementsByName("img").length; i++) {
        //for (var i = document.getElementsByName("img").length - 1; i >= 0; i--) {
            

        

            if (numWidth == "70%") {
                document.getElementsByName("img")[i].style.width = "25%";
                document.getElementsByName("imgsrc")[i].style.width = "100%";
                document.getElementsByName("imgsrc")[i].style.filter = "blur(0px)";


                document.getElementsByName("param")[i].style.width = "auto";
                document.getElementsByName("param")[i].style.fontSize = "3vw";
                document.getElementsByName("param")[i].style.paddingLeft = "";
                
                document.getElementsByName("contentsBox")[i].style.left = "100%";
                if(i==3){
                    document.getElementById("jumbotronCard").style.height = "0rem";
                    document.getElementsByName("contentsBox")[i].style.width = "150%";
                }else if(i==2){
                    document.getElementById("workCard").style.height = "0rem";
                    document.getElementsByName("contentsBox")[i].style.width = "150%";
                }else if(i==1){
                    document.getElementById("accordionCard").style.height = "0rem";

                    document.getElementsByName("contentsBox")[i].style.width = "150%";
                }else if(i==0){
                    document.getElementById("profieleCard").style.height = "0rem";
                    document.getElementsByName("contentsBox")[i].style.width = "150%";
                }else{
                    document.getElementsByName("contentsBox")[i].style.width = "150%";
                }
                document.getElementsByName("contentsBox")[i].style.height = "0%";
                document.getElementsByName("contentsBox")[i].style.color = "Transparent";
                document.getElementsByName("contentsBox")[i].style.top = "20rem";
                
                document.getElementsByClassName("testa")[0].style.top = "0rem";
                document.getElementsByClassName("testa")[0].style.color = "Transparent";
            } else {
                if (num != i) {
                    //passive
                    //document.getElementsByName("contentsBox")[i].style.zIndex = "-1";
                    
                    document.getElementsByName("img")[i].style.width = "10%";
                    document.getElementsByName("imgsrc")[i].style.width = "100%";
                    document.getElementsByName("imgsrc")[i].style.filter = "blur(0px)";


                    document.getElementsByName("param")[i].style.width = "auto";
                    document.getElementsByName("param")[i].style.fontSize = "1.5vw";
                    document.getElementsByName("param")[i].style.paddingLeft = "";

                    document.getElementsByName("contentsBox")[i].style.left = "100%";
                    if(i==3){
                        document.getElementById("jumbotronCard").style.height = "0rem";
                    document.getElementsByName("contentsBox")[i].style.width = "150%";
                    }else if(i==2){
                        document.getElementById("workCard").style.height = "0rem";
                        document.getElementsByName("contentsBox")[i].style.width = "150%";
                    }else if(i==1){
                        document.getElementById("accordionCard").style.height = "0rem";
                        document.getElementsByName("contentsBox")[i].style.width = "150%";
                    }else if(i==0){
                        document.getElementById("profieleCard").style.height = "0rem";
                        document.getElementsByName("contentsBox")[i].style.width = "150%";
                    }else{
                        document.getElementsByName("contentsBox")[i].style.width = "150%";
                    }
                    
                    document.getElementsByName("contentsBox")[i].style.height = "0rem";
                    document.getElementsByName("contentsBox")[i].style.color = "Transparent";
                    document.getElementsByName("contentsBox")[i].style.top = "20rem";
                    


                    document.getElementsByClassName("testa")[0].style.top = "0rem";
                    document.getElementsByClassName("testa")[0].style.color = "Transparent";
                } else {
                    //active
                    document.getElementsByName("img")[i].style.width = "70%";
                    document.getElementsByName("imgsrc")[i].style.width = "100%";
                    document.getElementsByName("imgsrc")[i].style.filter = "blur(3px)";

                    document.getElementsByName("param")[i].style.width = "100%";
                    document.getElementsByName("param")[i].style.fontSize = "3vw";
                    document.getElementsByName("param")[i].style.paddingLeft = "10rem";

                    document.getElementsByName("contentsBox")[i].style.width = "80%";
                    document.getElementsByName("contentsBox")[i].style.height = "20vw";
                    document.getElementsByName("contentsBox")[i].style.left = "15%";
                    document.getElementsByName("contentsBox")[i].style.color = "#808080";
                    document.getElementsByName("contentsBox")[i].style.top = "0rem";
                    if(i==3){
                        document.getElementById("jumbotronCard").style.height = "30rem";
                    }else if(i==2){
                        document.getElementById("workCard").style.height = "30rem";
                    }else if(i==1){
                        document.getElementById("accordionCard").style.height = "40rem";
                    }else if(i==0){
                        document.getElementById("profieleCard").style.height = "30rem";
                    }else{
                        //document.getElementsByName("contentsBox")[i].style.width = "150%";
                    }

                    

                    document.getElementsByClassName("testa")[0].style.top = "10rem";
                    document.getElementsByClassName("testa")[0].style.color = "#808080";
                }
            }
        }
    } else if (window.matchMedia('(max-width: 1200px)').matches) {
        

        document.getElementById("profieleCard").style.display = "none";
        document.getElementById("accordionCard").style.display = "none";
        document.getElementById("workCard").style.display = "none";
        document.getElementById("jumbotronCard").style.display = "none";

        //document.getElementsByName("param")[num].style.position="sticky";
        

        var numWidth = document.getElementsByName("imgsrc")[num].style.width;

        //リストボックスの開閉
        if (num == 1 && document.getElementById("collapseOne").getAttribute('class') == "collapse") {
            document.getElementById("collapseOne").setAttribute('class', 'collapse show')
        } else {
            document.getElementById("collapseOne").setAttribute('class', 'collapse')
        }

        for (var i = 0; i < document.getElementsByName("img").length; i++) {
            

            //document.getElementById("accordionchild").getAttribute('aria-expanded').value = "false";
            if (numWidth == "10%") {
                document.getElementsByName("img")[i].style.height = "20vw";
                document.getElementsByName("imgsrc")[i].style.width = "100%";
                document.getElementsByName("param")[i].style.width = "auto";
                document.getElementsByName("param")[i].style.fontSize = "3vw";
                document.getElementsByName("contentsBox")[i].style.left = "100%";
                document.getElementsByName("contentsBox")[i].style.height = "0%";
                document.getElementsByName("contentsBox")[i].style.color = "Transparent";
                
                
            } else {
                if (num != i) {
                    //passive
                    document.getElementsByName("img")[i].style.height = "10vw";
                    document.getElementsByName("imgsrc")[i].style.width = "100%";
                    document.getElementsByName("param")[i].style.width = "auto";
                    document.getElementsByName("param")[i].style.fontSize = "1.5vw";
                    document.getElementsByName("contentsBox")[i].style.left = "100%";
                    document.getElementsByName("contentsBox")[i].style.height = "0%";
                    document.getElementsByName("contentsBox")[i].style.color = "Transparent";
                    
                    
                } else {
                    //active
                    if(num==0){
                        document.getElementById("profieleCard").style.display = "block";
                        
                        var imgHeight = objProfieleCard.clientHeight +100;
                        document.getElementsByName("img")[i].style.height = imgHeight+"px";
                        document.getElementsByName("imgsrc")[i].style.height = "100%";

                        


                        
                    }else if(num==1){
                        document.getElementById("accordionCard").style.display = "block";
                        //var imgHeight = objAccordionCard.clientHeight +100;
                        var imgHeight = document.getElementById("collapseOne").clientHeight+150;
                        document.getElementsByName("img")[i].style.height = imgHeight+"px";
                        document.getElementsByName("imgsrc")[i].style.height = "100%";
                        
                    }else if(num==2){
                        document.getElementById("workCard").style.display = "block";
                        var imgHeight = objWorkCard.clientHeight +100;
                        document.getElementsByName("img")[i].style.height = imgHeight+"px";
                        document.getElementsByName("imgsrc")[i].style.height = "100%";
                        
                    }else{
                        document.getElementById("jumbotronCard").style.display = "inline-block";
                        var imgHeight = objJumbotronCard.clientHeight +100;
                        document.getElementsByName("img")[i].style.height = imgHeight+"px";
                        document.getElementsByName("imgsrc")[i].style.height = "100%";
                    }
                    
                    
                    document.getElementsByName("imgsrc")[i].style.width = "10%";
                    document.getElementsByName("param")[i].style.width = "100%";
                    document.getElementsByName("param")[i].style.fontSize = "3vw";

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
        objthumbnail.style.height = "5rem";
        objthumbnail.style.width = "5rem";

        document.getElementById("profieleCard").style.height = "auto";
        document.getElementById("accordionCard").style.height = "auto";
        document.getElementById("workCard").style.height = "auto";
        document.getElementById("jumbotronCard").style.height = "auto";

        document.getElementById("profieleCard").style.display = "none";
        document.getElementById("accordionCard").style.display = "none";
        document.getElementById("workCard").style.display = "none";
        document.getElementById("jumbotronCard").style.display = "none";

        for (var i = 0; i < document.getElementsByName("img").length; i++) {
            //document.getElementById("test").style.display = "none"
            document.getElementsByClassName("img-box")[i].style.width = "100%";

            document.getElementsByName("img")[i].style.height = "20vw";
            document.getElementsByName("img")[i].style.width = "100%";


            document.getElementsByName("imgsrc")[i].style.width = "100%";
            document.getElementsByName("param")[i].style.width = "auto";
            document.getElementsByName("param")[i].style.fontSize = "3vw";
            document.getElementsByName("param")[i].style.top = "0.5rem";

            document.getElementsByName("contentsBox")[i].style.left = "100%";
            document.getElementsByName("contentsBox")[i].style.width = "80%";
            document.getElementsByName("contentsBox")[i].style.color = "Transparent";
            document.getElementsByName("contentsBox")[i].style.top = "0";

            var objParam = document.getElementsByName("param")[i];
            console.log(objParam.clientHeight);
            if(objParam.clientHeight>=67){
                imgHeight = objParam.clientHeight+20;

            }else{
                var imgHeight = objParam.clientHeight +20;
            }
            
            document.getElementsByName("contentsBox")[i].style.paddingTop = imgHeight+"px";
            document.getElementById("collapseOne").setAttribute('class', 'collapse');
        }




        //setTimeout('enableCon()',2000)

        // TODO
    } else if (window.matchMedia('(min-width:1201px)').matches) {
        objthumbnail.style.height = "10rem";
        objthumbnail.style.width = "10rem";
        

        for (var i = 0; i < document.getElementsByName("img").length; i++) {
            document.getElementsByName("img")[i].style.height = "50rem";
            document.getElementsByName("img")[i].style.width = "25%";

            //表示されている画像
            document.getElementsByName("imgsrc")[i].style.width = "100%";

            document.getElementsByName("param")[i].style.width = "auto";
            document.getElementsByName("param")[i].style.fontSize = "3vw";
            document.getElementsByName("param")[i].style.top = "3rem";

            document.getElementsByName("contentsBox")[i].style.left = "100%";
            document.getElementsByName("contentsBox")[i].style.color = "Transparent";
            document.getElementsByName("contentsBox")[i].style.paddingTop = "10rem";
        }
        document.getElementById("collapseOne").setAttribute('class', 'collapse');
        //setTimeout('enableCon()',2000)
        // TODO
    }

};
handleWindowResize(); // 最初の調整

// レスポンシブ処理をイベントに登録
window.addEventListener('resize', function () {
    handleWindowResize();
});

function enableCon() {
    document.getElementById("profieleCard").style.display = "block";
}

function disable() {
    document.getElementById("profieleCard").style.display = "none";
        document.getElementById("accordionCard").style.display = "none";
        document.getElementById("workCard").style.display = "none";
        document.getElementById("jumbotronCard").style.display = "none";
}
function recursion(obj){
    var tempArray = Array.prototype.slice.call(obj.children);
    /*ここで要素を何か操作する*/
    //console.log('"obj.localName" = ' + obj.localName);
    tempArray.forEach(recursion);
}


function changeStyle(docObj,style){
    var objStyle;
    var styleKey = style.key;
    var stylevalue = style.value;

    for(var i = 0;i<docObj.length;i++){
        objStyle = docObj[i].style;
        objStyle[styleKey] = stylevalue;
    }
    
}