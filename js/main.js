
			$(document).ready(function(){

				var msnry = new Masonry( '#container', {
				  itemSelector: '.post',
				  columnWidth: '.post'
				});
				var isActive = true;
				$(".name-box").click(function(){
					if($(".li-arrow").hasClass('fa-caret-right')){
						$(".li-arrow").removeClass('fa-caret-right');
						$(".li-arrow").addClass('fa-caret-down');
						$(".name-box").addClass('active');
					}else{
						$(".li-arrow").removeClass('fa-caret-down');
						$(".li-arrow").addClass('fa-caret-right');
						$(".name-box").removeClass('active');
					}
					$('.logout').toggle();
				});
				$(".share-icon").click(function(){
					$(this).parent().children('.share_box').toggle();
				});
				$(document).mouseup(function (e)
				{
				    var container = $(".name-box");
				    var report_container =$(".post .user-share-area .down");
				    var meeting_request =$(".meeting-request");
				    var notification=$(".notification");
				    var events=$(".events");
				    var share_icon=$(".share-icon");
				   	if (!share_icon.is(e.target) // if the target of the click isn't the container...
					        && share_icon.has(e.target).length === 0 ) // ... nor a descendant of the container
					    {

					    	if($('.share_box').has(e.target).length !=1 || $('.post').find( ".share_box" ).css('display')=='block'){
					    		$('.share_box').hide();
					    		
					    	}
					    }
						  
					
				    if (!container.is(e.target) // if the target of the click isn't the container...
				        && container.has(e.target).length === 0 ) // ... nor a descendant of the container
				    {
				    	if($('.logout').has(e.target).length !=1 && $('.logout').css('display')=='block'){
				    		$(".li-arrow").removeClass('fa-caret-down');
							$(".li-arrow").addClass('fa-caret-right');
							$(".name-box").removeClass('active');
							$('.logout').toggle();
				    	}
				    }
				    if (!report_container.is(e.target) // if the target of the click isn't the container...
				        && report_container.has(e.target).length === 0 ) // ... nor a descendant of the container
				    {
				    	if($('.post .report').has(e.target).length !=1 && $('.post .report').css('display')=='block'){
							$('.post .report').hide();
				    	}
				    }
				    if (!meeting_request.is(e.target) // if the target of the click isn't the container...
				        && meeting_request.has(e.target).length === 0 ) // ... nor a descendant of the container
				    {
				    	if($('.meetings').has(e.target).length !=1 && $('.meetings').css('display')=='block'){
							$('.meetings').hide();
				    	}
				    }
				    if (!notification.is(e.target) // if the target of the click isn't the container...
				        && notification.has(e.target).length === 0 ) // ... nor a descendant of the container
				    {
				    	if($('.messages').has(e.target).length !=1 && $('.messages').css('display')=='block'){
							$('.messages').hide();
				    	}
				    }
				    if (!events.is(e.target) // if the target of the click isn't the container...
				        && events.has(e.target).length === 0 ) // ... nor a descendant of the container
				    {
				    	if($('.events').has(e.target).length !=1 && $('.events').css('display')=='block'){
							$('.events').hide();
				    	}
				    }
				});
				$(".poll-option i").click(function(){
					if($(this).hasClass('fa-circle-o')){
						$(this).removeClass('fa-circle-o');
						$(this).addClass('fa-dot-circle-o');
					}else{
						$(this).removeClass('fa-dot-circle-o');
						$(this).addClass('fa-circle-o');
					}
				});
				$('.animated').autosize({
					callback:function(){

						msnry = new Masonry( '#container',{
							  itemSelector: '.post',
							  columnWidth: '.post'
						});	
					}
				});
				$('.comment').focus(function(){
					$(this).parent().children('.link-lookalike').show();
					msnry = new Masonry( '#container',{
						itemSelector: '.post'
					});	
				});
				$(".link-lookalike.cancel").click(function(){
					$(this).parent().children('.link-lookalike').hide();
					$(this).parent().children('.animated').val('');
					$('.animated').trigger('autosize.resize');
					msnry = new Masonry( '#container',{
						itemSelector: '.post',
						columnWidth: '.post'
					});	
				});
				$(".comment_box .close").click(function(){
					$(this).parent().remove();
					msnry = new Masonry( '#container',{
						itemSelector: '.post',
						columnWidth: '.post'
					});
				});
				$("aside .post .user-share-area .close").click(function(){
					$(this).parent().parent().remove();
				});
				$(".post .report .item").click(function(){
					if($(this).hasClass('this')){ 
						$(this).parent().parent().children('.new_contain').filter(function(index){
							return $(this).hasClass('this');
						}).show();
					}
					if($(this).hasClass('all')){ 
						$(this).parent().parent().children('.new_contain').filter(function(index){
							return $(this).hasClass('all');
						}).show();
					}
					if($(this).hasClass('ab')){ 
						$(this).parent().parent().children('.new_contain').filter(function(index){
							return $(this).hasClass('ab');
						}).show();
					}
				});
				$(".post .new_contain .area .abuse").click(function(){
					$(this).parent().parent().hide();
					$(this).parent().parent().parent().children('.new_contain').filter(function(index){
						return $(this).hasClass('ab');
					}).show();
				});
				$(".report_button").click(function(){
					var $this=$(this).parent().parent().parent().remove();
					msnry.destroy();
					msnry = new Masonry( '#container',{
						itemSelector: '.post',
						columnWidth: '.post'
					});
				});
				$(".post .new_contain .area .cancel_button,.post .new_contain .area .undo").click(function(){
					$(this).parent().parent().hide();
				});
				$(".post .user-share-area .down").click(function(){
					$(this).parent().parent().children('.report').show();
				});
				$(".meeting-request").click(function(){
					$(".meetings").toggle();
				});
				$(".notification").click(function(){
					$(".messages").toggle();
				});
				$(".events-request").click(function(){
					$(".events").toggle();
				});
				$(".comment_box .user-comment-box .user-name,.user-identity .user-name").hover(function(e) {
				    	$('.comment_box .user-comment-box').find('.contact').hide();
				    	$(this).parent().parent().children('.contact').show();
				},function(e){
					$(this).parent().parent().children('.contact').hide();
				});
				$(".like-modal .user-name").hover(function(e) {
				    	$('.like-model').find('.contact').hide();
				    	$(this).parent().children('.contact').show();
				},function(e){
					$(this).parent().children('.contact').hide();
				});
				$(".contact").hover(function(){
					$(this).show();
				},function(){
					$(this).hide();
				});
				$(".post .fake").focus(function(e){
					var arr=new Array();
					arr.push($(this).parent());
					msnry.hide(arr);
					msnry.layout();
					$('.openpost.share').show();
				});
				$(".post .input-setting ul li span.share").click(function(){
					var arr=new Array();
					arr.push($(this).parent().parent().parent().parent());
					msnry.hide(arr);
					msnry.layout();
					$('.openpost.share').show();
				});
				$(".post .input-setting ul li span.meet").click(function(){
					var arr=new Array();
					arr.push($(this).parent().parent().parent().parent());
					msnry.hide(arr);
					msnry.layout();
					$('.openpost.meet').show();
				});
				$(".post .input-setting ul li span.poll").click(function(){
					var arr=new Array();
					arr.push($(this).parent().parent().parent().parent());
					msnry.hide(arr);
					msnry.layout();
					$('.openpost.cpoll').show();
				});
				$(".post .input-setting ul li span.qa").click(function(){
					var arr=new Array();
					arr.push($(this).parent().parent().parent().parent());
					msnry.hide(arr);
					msnry.layout();
					$('.openpost.qa').show();
				});
				$(".openpost.share .top .textarea .type-input ul li").click(function(){
						var $parent_this=$(this).parent().parent().parent().parent();
						var $this=$(this);
						$parent_this.children('.upload_area').hide();
						$parent_this.children('.upload_area').filter(function(index){
							if($this.hasClass('pic')){
								$parent_this.parent().children('.bottom').children('#la-buttons').attr('data-anim',"la-anim-1");
								return $(this).hasClass('pic')===$this.hasClass('pic');
							}
							if($this.hasClass('vid')){
								$parent_this.parent().children('.bottom').children('#la-buttons').attr('data-anim',"la-anim-2");
								return $(this).hasClass('vid')===$this.hasClass('vid');	
							}
							if($this.hasClass('doc')){
								$parent_this.parent().children('.bottom').children('#la-buttons').attr('data-anim',"la-anim-3");
								return $(this).hasClass('doc')===$this.hasClass('doc');	
							}
							
						}).css('display','inline-block');
				});
				$('.openpost .bottom .cancel_button').click(function(){
					$(this).parent().parent().hide();
					var arr=new Array();
					$(".post .fake").parent().show();
					msnry.layout();
				});
				$(document).on('click','.openpost .top .textarea .more .add',function(){
					$(this).parent().children("textarea").removeClass('poll');
					$(this).parent().parent().append('<div class="more"><textarea class="poll margin-top-10 animated" placeholder="Add Option"></textarea><div class="add"></div></div>');
					$('.animated').autosize();
					$(this).remove();
				});
				$(".openpost .top .textarea .more textarea").each(function(){

				});
				
				$('.openpost .top .textarea .more .close').click()
				$( '#la-buttons' ).on( 'click', function() {
					$( ".la-anim-1" ).width(0);
					$( ".la-anim-1" ).animate({
					    "width": "+=100%"
					  },6000,function(){
					  	$( ".la-anim-1" ).width(0);
					  });

				});
				$(".gn-search").keyup(function(){
					if($(this).val()!=''){
						$(this).parent().parent().children('ul').hide();
						$(this).parent().parent().children('.list').show();
					}else{
						$(this).parent().parent().children('ul').show();
						$(this).parent().parent().children('.list').hide();
					}
				});
				$(".contact .request_meeting,.contact .send_message").click(function(){
					if($(this).hasClass('request_meeting')){
						$(".modal p").html("Request Meeting With");
					}else{
						$(".modal p").html("Start Conversation With");
					}
					$(".modal").show();
					$(".like-modal").hide();
					$(".overlay").show();
				});
				$(".like-icon").click(function(){
					if($(this).hasClass('on')){
						$(this).removeClass('on');
					}else{
						$(this).addClass('on');
					}
				});
				$(".req").keyup(function(){
					if($(this).val()!=''){
						$('.send-result').show();
					}else{
						$('.send-result').hide();
					}
				});
				$(".input-box .selected .close").click(function(){
					$('.selected').hide();
				});
				$(".modal .request-box .input-box .send-result .list .item").click(function(){
					$('.selected').show();
					$('.send-result').hide();
				});
				$('.overlay,.cancel_button').click(function(){
					$(".modal").hide();
					$(".like-modal").hide();
					$(".overlay").hide();
				});
				$(document).keyup(function(e) {
 					 if (e.keyCode == 27) { 
 					 	$(".modal").hide();
 					 	$(".like-modal").hide();
						$(".overlay").hide(); 
					}  
				});
				$(".who-like").click(function(){
					$(".modal").hide();
					$(".like-modal").show();
					$(".overlay").show();
				});
				$(".intrest").click(function(e){
					e.preventDefault();
					if($(this).hasClass('selected')){
						$(this).removeClass('selected');
					}else{
						$(this).addClass('selected');
					}
				});
			});
			