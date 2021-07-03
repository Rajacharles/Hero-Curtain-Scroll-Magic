
var controller = new ScrollMagic.Controller();

$(function() {
	var scene = new ScrollMagic.Scene({
		triggerElement: "#curtain-over",
		triggerHook: "0",
		duration: "100%"
	})

	.setPin("#curtain-under")
	.addIndicators({ name: "1" }) 
	.addTo(controller);
	
});
