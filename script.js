function fun() {
    $(".home").html("Registred activity: "+$(".button.register").length+", Not registred: "+$(".button.unregister").length);
};
setTimeout(fun, 5000);