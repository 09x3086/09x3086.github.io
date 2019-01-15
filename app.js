/* Set the width of the side navigation to 250px */
function openNav(num) {

    if (window.matchMedia('(min-width: 1201px)').matches) {
        //recursion(document.getElementsByName("img")[num]);
        document.getElementById("profieleCard").style.display = "block";
        document.getElementById("accordionCard").style.display = "block";
        document.getElementById("workCark").style.display = "block";
        document.getElementById("jumbotronCard").style.display = "block";

        //document.getElementsByClassName("row")[0].style.width = "150%";
        //表示されているコンテンツのサイズ
        var numWidth = document.getElementsByName("img")[num].style.width;

       
        //リストボックスの開閉
        if (num == 1 && document.getElementById("collapseOne").getAttribute('class') == "collapse") {
            document.getElementById("collapseOne").setAttribute('class', 'collapse show')
        } else {
            document.getElementById("collapseOne").setAttribute('class', 'collapse')
        }
        for (var i = 0; i < document.getElementsByName("img").length; i++) {
        //for (var i = document.getElementsByName("img").length - 1; i >= 0; i--) {
            


            if (numWidth == "70%") {
                document.getElementsByName("img")[i].style.width = "25%";
                document.getElementsByName("imgsrc")[i].style.width = "100%";
                document.getElementsByName("param")[i].style.width = "auto";
                document.getElementsByName("param")[i].style.fontSize = "3vw";
                document.getElementsByName("test")[i].style.left = "100%";
                if(i==3){
                    document.getElementsByName("test")[i].style.width = "0%";
                }else{
                    document.getElementsByName("test")[i].style.width = "50%";
                }
                document.getElementsByName("test")[i].style.height = "50%";
                document.getElementsByName("test")[i].style.color = "Transparent";
                document.getElementsByClassName("testa")[0].style.top = "0rem";
                document.getElementsByClassName("testa")[0].style.color = "Transparent";
            } else {
                if (num != i) {
                    //passive
                    
                    document.getElementsByName("img")[i].style.width = "10%";
                    document.getElementsByName("imgsrc")[i].style.width = "100%";
                    document.getElementsByName("param")[i].style.width = "auto";
                    document.getElementsByName("param")[i].style.fontSize = "1.5vw";

                    document.getElementsByName("test")[i].style.left = "100%";
                    if(i==3){
                        document.getElementsByName("test")[i].style.width = "0%";
                    }else{
                        document.getElementsByName("test")[i].style.width = "50%";
                    }
                    
                    document.getElementsByName("test")[i].style.height = "50%";
                    document.getElementsByName("test")[i].style.color = "Transparent";


                    document.getElementsByClassName("testa")[0].style.top = "0rem";
                    document.getElementsByClassName("testa")[0].style.color = "Transparent";
                } else {
                    //active
                    document.getElementsByName("img")[i].style.width = "70%";
                    document.getElementsByName("imgsrc")[i].style.width = "10%";
                    document.getElementsByName("param")[i].style.width = "100%";
                    document.getElementsByName("param")[i].style.fontSize = "3vw";

                    document.getElementsByName("test")[i].style.width = "80%";
                    document.getElementsByName("test")[i].style.height = "20vw";
                    document.getElementsByName("test")[i].style.left = "15%";
                    document.getElementsByName("test")[i].style.color = "#808080";

                    document.getElementsByClassName("testa")[0].style.top = "10rem";
                    document.getElementsByClassName("testa")[0].style.color = "#808080";
                }
            }
        }
    } else if (window.matchMedia('(max-width: 1200px)').matches) {
        document.getElementById("profieleCard").style.display = "none";
        document.getElementById("accordionCard").style.display = "none";
        document.getElementById("workCark").style.display = "none";
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
            document.getElementById("accordionchild").getAttribute('aria-expanded').value = "false";
            if (numWidth == "10%") {
                document.getElementsByName("img")[i].style.height = "20vw";
                document.getElementsByName("imgsrc")[i].style.width = "100%";
                document.getElementsByName("param")[i].style.width = "auto";
                document.getElementsByName("param")[i].style.fontSize = "3vw";
                document.getElementsByName("test")[i].style.left = "100%";
                document.getElementsByName("test")[i].style.height = "0%";
                document.getElementsByName("test")[i].style.color = "Transparent";
                
            } else {
                if (num != i) {
                    //passive
                    document.getElementsByName("img")[i].style.height = "10vw";
                    document.getElementsByName("imgsrc")[i].style.width = "100%";
                    document.getElementsByName("param")[i].style.width = "auto";
                    document.getElementsByName("param")[i].style.fontSize = "1.5vw";
                    document.getElementsByName("test")[i].style.left = "100%";
                    document.getElementsByName("test")[i].style.height = "0%";
                    document.getElementsByName("test")[i].style.color = "Transparent";
                    
                    
                } else {
                    //active
                    if(num==0){
                        document.getElementById("profieleCard").style.display = "block";
                        document.getElementsByName("img")[i].style.height = "30rem";

                        
                    }else if(num==1){
                        document.getElementById("accordionCard").style.display = "block";
                        document.getElementsByName("img")[i].style.height = "40rem";
                        
                    }else if(num==2){
                        document.getElementById("workCark").style.display = "block";
                        document.getElementsByName("img")[i].style.height = "40rem";
                        
                    }else{
                        document.getElementById("jumbotronCard").style.display = "inline-block";
                        document.getElementsByName("img")[i].style.height = "30rem";
                    }
                    
                    document.getElementsByName("imgsrc")[i].style.height = "100%";
                    document.getElementsByName("imgsrc")[i].style.width = "10%";
                    document.getElementsByName("param")[i].style.width = "100%";
                    document.getElementsByName("param")[i].style.fontSize = "3vw";

                    document.getElementsByName("test")[i].style.left = "15%";
                    document.getElementsByName("test")[i].style.height = "50%";
                    document.getElementsByName("test")[i].style.color = "#808080";
                    
                }
            }
        }
    }
    //document.getElementsByClassName("row")[0].style.width = "100%";
    return

}

window.onload = function () {
    console.log(jsondata);
    console.log(jsondata.skill.programming[0]);
    console.log(Object.entries(jsondata));
    console.log(Object.keys(jsondata)[0]);
    console.log(Object.keys(jsondata.skill));


}


function convertTable(json) {
    Object.keys(json);

}

var handleWindowResize = function () {
    // モバイル
    if (/Android|iPhone|iPod/i.test(navigator.userAgent)) {
        // TODO
        return;
    }

    if (window.matchMedia('(max-width: 1200px)').matches) {
        // max-width 以下になったら

        document.getElementById("profieleCard").style.display = "none";
        document.getElementById("accordionCard").style.display = "none";
        document.getElementById("workCark").style.display = "none";
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

            document.getElementsByName("test")[i].style.left = "100%";
            document.getElementsByName("test")[i].style.width = "80%";
            document.getElementsByName("test")[i].style.color = "Transparent";
        }




        //setTimeout('enableCon()',2000)

        // TODO
    } else if (window.matchMedia('(min-width:1201px)').matches) {
        // min-width 以上になったら
        //reloadCss();
        /* document.getElementById("profieleCard").style.display = "none";
        document.getElementById("accordionCard").style.display = "none";
        document.getElementById("workCark").style.display = "none";
        document.getElementById("jumbotronCard").style.display = "none";
 */
        for (var i = 0; i < document.getElementsByName("img").length; i++) {
            //for (var i = document.getElementsByName("img").length - 1; i >= 0; i--) {
            console.log(i);
            document.getElementsByName("img")[i].style.height = "50rem";
            document.getElementsByName("img")[i].style.width = "25%";

            //表示されている画像
            document.getElementsByName("imgsrc")[i].style.width = "100%";

            document.getElementsByName("param")[i].style.width = "auto";
            document.getElementsByName("param")[i].style.fontSize = "3vw";
            document.getElementsByName("param")[i].style.top = "3rem";

            document.getElementsByName("test")[i].style.left = "100%";
            document.getElementsByName("test")[i].style.color = "Transparent";
        }
        //setTimeout('enableCon()',2000)
        // TODO
    }

};
handleWindowResize(); // 最初の調整

// レスポンシブ処理をイベントに登録
window.addEventListener('resize', function () {
    console.log('test');
    handleWindowResize();
});

function enableCon() {
    document.getElementById("profieleCard").style.display = "block";
}

function disable() {
    document.getElementById("profieleCard").style.display = "none";
        document.getElementById("accordionCard").style.display = "none";
        document.getElementById("workCark").style.display = "none";
        document.getElementById("jumbotronCard").style.display = "none";
}
function recursion(obj){
    var tempArray = Array.prototype.slice.call(obj.children);
    /*ここで要素を何か操作する*/
    console.log('"obj.localName" = ' + obj.localName);
    tempArray.forEach(recursion);
}