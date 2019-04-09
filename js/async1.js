window.onload=function async1() {
    $.ajax({
        type:"get",
        url:"data/tb_blog.json",
        dataType:"json",
        success:function (data) {
            var user=data;
            for (var i=0;i<data.length;i++) {
                var title = user[i].title;
                var blogid=user[i].blogid;
                var blogdate=user[i].blogdate;
                var content=user[i].content
				if(blogid<=7){
                $('#list').append("<li><i><a>"+"<img src='img/1.jpg'>"+"</a></i>"+"<h3>"+"<a href='/pack2/info.html?blogid="+blogid+"'>"+title+"</a>"+"<span style='margin-left: 20px; font-size: 10px'>"+blogdate+"</span>"+"</h3>"
                    +"<p></p><p>"+content+"</p><p></p></li>")

            }
			}
        },error:function () {
            alert("系统错误")
        }

    })

}