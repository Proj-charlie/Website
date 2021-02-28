$(document).ready(function() {
    $('#flowbaseSlider')
        .on('click', '.back-button-custom', function() {
            // alert("back");
            $('.slide-1').first().fadeIn("slow").css('display', 'block');
            $('.slide-2').first().fadeIn("slow").css('display', 'none');
        })
        .on('click', '.next-button-custom', function() {
            $('.slide-1').first().fadeIn("slow").css('display', 'none');
            $('.slide-2').first().fadeIn("slow").css('display', 'block');
            // alert("next");
        });


    $('#flowbaseSlider')
        .on('click', '#submit', function() {
            swal("Good job!", "Thanks! I have received your form submission, I'll get back to you shortly! 💖", "success");
        });
});