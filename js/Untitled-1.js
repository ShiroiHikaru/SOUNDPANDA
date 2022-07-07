/* 오늘 하루동안 열지않기(쿠키) */
$(function() {     
	$(".bs_top_banner .xi-close").click(function(){
        var bs_topBanner_confirm = confirm("오늘 하루동안 열지않기");
        
        function bs_top_banner() {
            if (bs_topBanner_confirm) {
                $('.bs_top_banner').removeClass('bs_on');
                $('.bs_top_banner').addClass('bs_off');
                $.cookie('bs_top_banner', 'bs_1', { expires:1, path:'/'})
            };   
        };        
                
        bs_top_banner();
	});
    if ($.cookie('bs_top_banner') == 'bs_1') {
        $('.bs_top_banner').addClass('bs_off');
    } else {
        $('.bs_top_banner').addClass('bs_on');      
    };     
    
    /* 띠배너 사라졌을시 헤더 조절 */
    if ( $('.bs_top_banner').hasClass('bs_off') ){
        $('#header .bsTopBtn').addClass('bs_off')
    	$('#contentsWrap .secMain').addClass('bs_off')
    } else {
        $('#header .bsTopBtn').slidetoggle('bs_off')
    	$('#contentsWrap .secMain').removeClass('bs_off')
    }
});
