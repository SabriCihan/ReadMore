jQuery(function ($) {
    var show_char = 280;
    var ellipses = "... ";
    $(".long-text").each(function (index) {
      var $longText = $(this);
      var content = $longText.html();
      if (content.length > show_char) {
        var firstPart = content.substr(0, show_char);
        var secondPart = content.substr(show_char - content.length);
        var html = firstPart + "<span class='truncated'>" + ellipses + "</span><span class='truncated' style='display:none'>" + secondPart + "</span><a class='btn btn-xs btn-secondary read-more' href='#'>▼ Read more</a>";
        $longText.html( html);
      }
    })
    
    $(".read-more").click(function (e) {
      e.preventDefault();
      var $this = $(this);
      $this.html() == '▼ Read more' ? $this.html('▲ Read less') : $this.html('▼ Read more') //change here..
      $this.parent("p").find(".long-text").toggle();
      $this.parent("p").find(".truncated").toggle();
    });
  });
  