function setSpeFlow(){
    window.setInterval(function(){           
     for(let index = 0; index < textObject.links[1].length; index++){    
        flowTrue(dm.getDataByTag(textObject.links[1][index].device1+"-"+textObject.links[1][index].device2))
     }
    },6000);
  
     keyStag=new Array;
     var i=0;
     timer=new Array;
    for(let index = 0; index < textObject.links[1].length; index++){ 
        var tag1=textObject.links[1][index].device1;
        var tag2=textObject.links[1][index].device2;
         for(let index = 0; index < textObject.links[2].length; index++){    //找出攻击链路中与控制器相连的交换机
         if(tag1==textObject.links[2][index].device1||tag1==textObject.links[2][index].device2){
             keyStag[i]=tag1;
             timer[i]=window.setInterval(flowFalse(tag1+"-"+tag2),9000);
             console.log(timer[i]);
             i++;
             break;
         }
         else{
             window.setInterval(flowFalse(tag1+"-"+tag2),9000);
         }
     }
   }
   
   

 }
 function attack(){
     for (let index = 0; index < textObject.links[2].length; index++) {
         doubtAttack(textObject.links[2][index].device1,textObject.links[2][index].device2);
     };
     window.setTimeout(function(){
       for(var i=0;i<timer.length;i++){
         window.clearInterval(timer[i]); //持续
       }
      
       for(var i=0;i<keyStag.length;i++){             //攻击链路上的交换机持续向控制器发数据信息
          dm.getDataByTag(keyStag[i]+"-"+"con").s({
             'flow.element.background':"darkblue",
             'flow':true,
           })
       }
     },2000);
   
 }
 
 function doubtAttack(tag1,tag2){
     tag = tag1 + '-' + tag2;
     var edge = dm.getDataByTag(tag);
     if(!edge){                //需流动反向
         tag = tag2 + '-' + tag1;
         edge = dm.getDataByTag(tag);
         edge.s({
             'flow.reverse':true,
             'flow.element.background': "orange",
             'flow.count': 5,
             'flow.step':6,
             'flow.element.max': 13,
         })
     }
     else{
     
         edge.s({
             'flow.element.background': "orange",
             'flow.count': 5,
             'flow.step':6,
             'flow.element.max': 13
         })
     }
 }
 function sureAttack(tag1,tag2){    
     tag = tag1 + '-' + tag2;
     var edge = dm.getDataByTag(tag);
     if(!edge){                //需流动反向
         tag = tag2 + '-' + tag1;
         edge = dm.getDataByTag(tag);
         edge.s({
             'flow.reverse':true,
             'flow.element.background': "red",
             'flow.count': 5,
             'flow.step':6,
             'flow.element.max': 13,
         })
     }
     else{
     
         edge.s({
             'flow.element.background': "red",
             'flow.count': 5,
             'flow.step':6,
             'flow.element.max': 13
         })
     }
 }
 
 function detect(){
     for (let index = 0; index < textObject.links[2].length;index++){          //确认为攻击路径变红
        sureAttack(textObject.links[2][index].device1,textObject.links[2][index].device2);
     }
     window.setTimeout(function(){                //控制器向核心交换机发送流表
         for(var i=0;i<keyStag.length;i++){
             dm.getDataByTag(keyStag[i]+"-"+"con").s({
             'flow.element.background':"purple",
             'flow':true,
             'flow.reverse':true
         })
         }
     
     },3000);
     window.setTimeout(function(){
         for(let index = 1; index < textObject.links[2].length; index++){                  //丢包
             flowFalse(dm.getDataByTag(textObject.links[2][index].device1+"-"+textObject.links[2][index].device2))
         }
         for(var i=0;i<keyStag.length;i++){                                    //控制器与交换机间的交互状态恢复
             dm.getDataByTag(keyStag[i]+"-"+"con").s({
             'flow.element.background':"blue",
             'flow.reverse':false
         })
         }
         window.setInterval(function(){
             for(var i=0;i<keyStag.length;i++){
                 flowFalse(getDataByTag(keyStag[i]+"-"+"con"));
             }
     },9000);                                  //9秒停一次
 },6000);                                     //6秒后开始
 }