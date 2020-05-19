$("#burger").on("click", function (event) {
        event.preventDefault();

        $("#nav").toggleClass("active")
        $(".nav__inner").toggleClass("active")
})