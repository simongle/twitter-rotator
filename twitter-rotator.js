// Load jQuery in compatibility mode for Wordpress

var $ = jQuery;

var twitter_module = {

	init: function(){
		var self = this;
		self.rotate_tweets();

	},

  // Create Twitter Rotator Module
	rotate_tweets: function(){
		var self = this;
		if($(".tweet").length <= 1) return;
		$(".twitter_timeline .container .tweet:eq(0)").show().css({"opacity":1}).addClass("current");
		var current = $(".twitter_timeline .container .tweet.current");

		setInterval(function(){
			current.animate({"opacity" : "0"}, 400, function(){
				$(this).removeClass("current");
			});
			if(current.next(".tweet").length > 0){
				current.next(".tweet").animate({"opacity" : "1"}, 400, function(){
					$(this).addClass("current");
				});
			}
			else {
				$(".twitter_timeline .container .tweet:eq(0)").animate({"opacity" : "1"}, 400, function(){
					$(this).addClass("current");
				});
			}
			current = $(".twitter_timeline .container .tweet.current");
		}, 5000);
	},

};
});
