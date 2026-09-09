function throttle(fn, delay) {
    let waiting = false;

    return function () {

        if (waiting) {
            return;
        }

        fn();

        waiting = true;

        setTimeout(() => {
            waiting = false;
        }, delay);
    };
}