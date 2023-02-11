//$(selector).accion()

//$("h1").hide()

$(() =>{

    $(".hide-btn").click(() => {
        //$("h1").hide()
        $("h1").fadeOut()
    })

    $(".show-btn").click(() => {
        //$("h1").show()
        $("h1").fadeIn()
    })

    $("li").dblclick(() =>{
        $("h1").css({color: "red"})
    })

    $(".new-element").click(() =>{
        $("ul").append("<li>New Element</li>")  //append para agregar al final //prepend para agregar al principio
    })

    $("li").mouseenter((elem)=>{
        elem.target.style.color = "blue";
    })

    $("li").mouseleave((elem)=>{
        elem.target.style.color = "black";
    })
})

