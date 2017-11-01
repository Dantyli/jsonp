/*
 * Dantyli 2017-11-01
 * Add baidu search demo
 * */
//window.onload = function() {
	  //豆瓣api
	var listCon=document.querySelector('#list');
	var oBtn=document.getElementById('btn');
	function show(data,type){
		if(type=='n'){
			return 	typeof data=='undefined'?'--':data;
		}else{
			if(typeof data=='undefined'){
				return '--';
			}else{
				return data[0].name;
			}
		}
	}
	function mInfo(data){
		var data=data.musics;
		if(data.length>0){
			var list='<p>共为你搜到'+data.length+'条数据</p>'
			for(var i=0;i<data.length;i++){
				list+='<li><p><img src="'+data[i].image+'"></p><p>歌名:'+data[i].title+'</p><p>歌手:'+show(data[i].author,'nn')+'</p>';
				list+='<p>发布时间:'+show(data[i].attrs.pubdate,'n')+'</p><a href="'+data[i].alt+'">豆瓣评分</a></li>'
			}
		    listCon.innerHTML=list;
		}else{
			listCon.innerHTML='';
			alert('没有找到相关歌曲?_?');
		}
	}
	oBtn.onclick=function(){
		var con=document.querySelector('#search').value;
		var oA=document.createElement('script');
		oA.src=' https://api.douban.com/v2/music/search?q='+con+'&callback=mInfo';
		document.body.appendChild(oA);
		document.body.removeChild(oA);
	}
	//百度搜索实现
	let b=$,
	    timer;
    b('#bdSearch').on('input change',function(){
		searchBD();
    });
    function searchBD(){
    	let bd=$('#bdSearch').val();
		b.ajax({
			url:'http://suggestion.baidu.com/su',
			dataType:'jsonp',
			data:{wd:bd},
			jsonp:'cb',
			success:function(data){
				let s=data.s,
				    list='',
				    $ul=b('ul');
				b.each(s,function(i,obj){
					list+='<li data-title="'+obj+'">'+highLight(bd,obj)+'</li>';
				});
				$ul.html('');
				$ul.append(list);
			}
		});
    }
    b('#bdSearch').on('focusin',function(){
    	clearTimeout(timer);
		b('ul').css('display','block');
    });
    b('#bdSearch').on('blur',function(){
    	timer=setTimeout(function(){
    		b('ul').css('display','none');
    	},300)
    });
    b('ul').on('click','li',function(){
    	let that=b(this).attr('data-title');
    	b('#bdSearch').val(that);
    })
    function highLight(val,obj){
    	let reg = RegExp(val,"g"); 
    	return obj.replace(reg,'<b>'+val+'</b>');
    }
//}