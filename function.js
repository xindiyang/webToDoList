(function () {
    var i; //index全局变量
    /*为每一个li后面添加关闭按钮 */
    function addcloseBtn() {
        var myNodelist = document.getElementsByTagName("li");
        for (i = 0; i < myNodelist.length; i++) {
            var span = document.createElement("span");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            myNodelist[i].appendChild(span);
        }
    }
    /**当点击关闭按钮是隐藏这一行的item */
    function closeElement() {
        var close = document.getElementsByClassName("close");
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var div = this.parentElement; /*关闭按钮的父元素 - li*/
                div.style.display = "none";
            }
        }
    }
    /*点击li的时候，加上.checked，再点击则取消 */
    function isChecked() {
        var list = document.querySelector('ul');
        list.onclick = function (ev) {
            if (ev.target.tagName === 'LI') {
                ev.target.classList.toggle('checked');
            }
        }
    }
    /**创建一个新的事件，然后在尾端添加事件 */
    function newElement() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("input").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            alert('请先输入一个事件！');
        } else {
            document.getElementById("myUL").appendChild(li);
        }
        document.getElementById("input").value = "";
    }
    /**初始化list */
    function initList() {
        addcloseBtn();
        closeElement();
        isChecked();
    }
    /**初始化 */
    function init() {
        //初始化添加按钮
        var addButton = document.getElementById("addButton");
        initList();
        //为按钮添加点击事件
        addButton.onclick = function () {
            newElement();
            initList();
        }
        /*按回车时亦执行*/
        document.onkeydown = function (event) {
            if (event.keyCode == 13) {
                newElement();
                initList();
            }
        }
    }
    init();
})();