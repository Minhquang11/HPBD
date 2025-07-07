function fireEmoji(emoji = '❤️', sec = 0.1) {
    var duration = sec * 1000;
    var end = Date.now() + duration;
    var scalar = 2.5;
    var heart = confetti.shapeFromText({ text: emoji, scalar });

    (function frame() {
        confetti({
            spread: 360,
            ticks: 60,
            gravity: 0,
            decay: 0.96,
            startVelocity: 20,
            shapes: [heart],
            scalar,
            particleCount: 30
        });
        confetti({
            spread: 360,
            ticks: 60,
            gravity: 0,
            decay: 0.96,
            startVelocity: 20,
            shapes: [heart],
            scalar,
            particleCount: 5,
            flat: true
        });
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}   


fireEmoji('🦄', 0.5);
fireEmoji('🎉', 0.5);
fireEmoji('❤️', 0.5);
fireEmoji('🎂', 0.5);
fireEmoji('🎈', 0.5);
fireEmoji('💖', 0.5);