$(function(){var n=($(".header"),$(".content")),i=$("#nav>ul>li"),t=$("#main"),o=$("h3").add("h4").add("h6"),h=$("#showmenu"),e=$(window).width();i.on("click",function(){var t=$(this).index();n.hide().eq(t).show(),i.removeClass("on"),$(this).addClass("on"),720>=e&&$("#nav").slideUp()}),o.on("click",function(){$(this).next("div,ul").slideToggle("slow");var n=$(this).children("span").html();"-"==n?$(this).children("span").html("+"):"+"==n&&$(this).children("span").html("-")}),t.on("mouseover","h4+ul>li",function(n){$(this).children("span").css({left:n.pageX+12+"px",top:n.pageY+8+"px",display:"block"})}).on("mouseout","h4+ul>li",function(){$(this).children("span").hide()}),$("#closebox").click(function(){$("#snippet").hide()}),$("#snippet").draggable({handle:"h6",cursor:"move"}),$("#main").on("click","h4+ul>li",function(){var n=$(this).html();$("#snippet").show(),$("#box").html(n)}),$("a:not([href^=http])").each(function(){$(this).click(function(n){n.preventDefault()})}),$("a[href^='http']").each(function(){$(this).click(function(n){n.stopPropagation()})}),h.on("click",function(){$("#nav").slideToggle()})});