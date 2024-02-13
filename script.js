document.addEventListener("DOMContentLoaded", function () {
    // Check if animation has already been played
    if (!sessionStorage.getItem('animationPlayed')) {
        // Add transition effect to body
        document.body.classList.add('transition-effect');

        // Set a flag in sessionStorage indicating animation has been played
        sessionStorage.setItem('animationPlayed', true);

        // Redirect to "bb.html" after 10 seconds
        setTimeout(function () {
            window.location.href = "bb.html";
        }, 10000); // 10 seconds delay
    }
});
