new Vue({
    el:'#app',
    data:{content:""},
    created:function(){
        var url="json.jsp";
        var _self=this;
        $.ajax({
            url:"http://localhost:8080/guns",
        })
        /*
        this.$http.get(url).then(function(data){
          var json=data.body;
          this.data=eval("(" + json +")");
        },function(response){
          console.info(response);
        })*/
    }
});