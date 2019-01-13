/* Set the width of the side navigation to 250px */
function openNav(num) {
    var numWidth = document.getElementsByName("img")[num].style.width;
    for (var i = 0; i < document.getElementsByName("img").length; i++) {


        if (numWidth == "70%") {
            document.getElementsByName("img")[i].style.width = "25%";
            document.getElementsByName("imgsrc")[i].style.width = "100%";
            document.getElementsByName("param")[i].style.width = "auto";
            document.getElementsByName("param")[i].style.fontSize = "50px";
            document.getElementsByName("test")[i].style.left = "100%";
            document.getElementsByName("test")[i].style.color = "Transparent";

        } else {

            if (num != i) {
                document.getElementsByName("img")[i].style.width = "10%";
                document.getElementsByName("imgsrc")[i].style.width = "100%";
                document.getElementsByName("param")[i].style.width = "auto";
                document.getElementsByName("param")[i].style.fontSize = "30px";
                document.getElementsByName("test")[i].style.left = "100%";
                document.getElementsByName("test")[i].style.color = "Transparent";
            } else {
                document.getElementsByName("img")[i].style.width = "70%";
                document.getElementsByName("imgsrc")[i].style.width = "10%";
                document.getElementsByName("param")[i].style.width = "100%";
                document.getElementsByName("param")[i].style.fontSize = "50px";
                document.getElementsByName("test")[i].style.left = "15%";
                document.getElementsByName("test")[i].style.color = "#808080";
            }
        }
    }
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