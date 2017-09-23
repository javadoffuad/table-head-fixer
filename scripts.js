function tHeadFixer(e){
    $this = $(e.target);
    var $table = e.data.table;
    var top = $this.offset().top;
    var distance = e.data.distance || 60;

    if($this.scrollTop() > distance && !window.thead2){
        window.thead2 = $("<div>")
                .addClass("scroll-thead")
                .css("top", top);

        $.each($table.find(".table__thead tr").children(), function(){
            $("<div>").addClass("scroll-thead__item")
                .text($(this).text())
                .css("width", $(this).innerWidth())
                .appendTo(window.thead2);
        });

        $this.find("> div").append(window.thead2);
    }
    else if($this.scrollTop() < distance && window.thead2){
        $this.find(".scroll-thead").remove();
        delete window.thead2;
    }
}

console.log("Test!!!");