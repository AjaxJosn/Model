function batch_del() {
    var ids = [];
    $('input:checkbox').each(function(){
        if(this.checked == true){
            if(this.value!=''){
                ids.push(this.value);
            }
        }
    });
    console.log(ids);
    //layer.alert(ids);return;
    //下面的ajax根据自己的情况写
    layer.confirm('批量删除后不可恢复，谨慎操作！', {icon: 7, title: '警告'}, function (index) {
        $.ajax({
            type: 'POST',
            url: "http://localhost:8084/delBlog1?blogid=" + ids,
            data: {"1": "1"},
            dataType: 'json',
            success: function (data) {
                if (data.code == 200) {
                    $(obj).parents("tr").remove();
                    layer.msg(data.message, {icon: 1, time: 1000});
                } else {
                    layer.msg(data.message, {icon: 2, time: 3000});
                }

            },
            error: function (data) {
                console.log(data.msg);
            },
        });
    });
}