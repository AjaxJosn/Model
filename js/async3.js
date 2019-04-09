function async3() {
    $.ajax({
        type:"get",
        url:"data/tb_class.json",
        dataType:"json",
        success:function (data) {
            var class1=[];
            var class1_1=[];
            var class1_2=[];
            for(var i=0;i<data.length;i++){
                var classname=data[i].classname;
                var classid=data[i].classid;
                var depth=data[i].depth;
                var parentid=data[i].parentid;
                if(depth==3 && parentid == 1){
                    class1.push(classname);
                }else if (depth == 4 && parentid == 3) {
                    class1_1.push(classname);
                }else if(depth == 4 && parentid == 4){
                    class1_2.push(classname);
                }
            }
            for(var i=0;i<class1.length;i++){
                $('#ulist').append("<li>"+class1[i]+"<br/><ul id='slist"+i+"'></ul></li>");
            }
            for(var i=0;i<class1_1.length;i++){
                $('#slist0').append("<li>"+class1_1[i]+"<br/></li>");
            }
            for(var i=0;i<class1_2.length;i++){
                $('#slist1').append("<li><a href=''>"+class1_2[i]+"</a><br/></li>");
            }
            console.log(class1);
            console.log(class1_1);
            console.log(class1_2);
        },error:function () {
            alert("系统错误")
        }

    })

}