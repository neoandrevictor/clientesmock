jQuery(function(){
    console.log("init...");

    var getCostumersError=function(err){
        console.log(err);
    }
    
    var getCostumersSuccess=function(costumers){
        console.table(costumers);
        var tr=[];
        $.each(costumers,function(idx,costumer){
           tr.push(`
                <tr>
                    <td>${costumer.id}</td>
                    <td>${costumer.name}</td>
                    <td>${costumer.email}</td>
                    <td>${costumer.phone}</td>
                    <td>${costumer.country}</td>
                </tr>
           
           `)

          
        });
        $("table").append(tr.join(""));
        $("#loading").fadeOut(2000);
    }
    

    $.ajax({
        url:"http://www.mocky.io/v2/5c83d8a8300000a0146b0d34",      
        dataType:"jsonp",
        error:getCostumersError,
        success:getCostumersSuccess
    })


});

