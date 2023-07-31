export function startTextAnimations() {
    const container = document.querySelector(
        ".scroll-sequence__container"
    ) as HTMLElement;
    const headings = document.querySelectorAll(".fade-animation");
    const sideHeadings = document.querySelectorAll(".fade-animation-side");

    window.addEventListener("scroll", () => {
        const scrollPosition = window.pageYOffset;
        const containerHeight = container.offsetHeight;
        const scrollPercentage = (scrollPosition / containerHeight) * 100;

        headings.forEach((heading, index) => {
            if (scrollPercentage >= index * 7.5 && scrollPercentage < 70) {
                // Calculate fade-in and fade-out percentages
                const fadeInPercentage = index * 7.5 + 1;
                const fadeOutPercentage = (index + 1) * 7.5 - 1;

                if (
                    scrollPercentage >= fadeInPercentage &&
                    scrollPercentage < fadeOutPercentage
                ) {
                    heading.classList.add("visible", "fade-in");
                    heading.classList.remove("fade-out");
                } else if (scrollPercentage >= fadeOutPercentage) {
                    heading.classList.remove("visible", "fade-in");
                    heading.classList.add("fade-out");
                } else {
                    heading.classList.remove("visible", "fade-out");
                    heading.classList.add("fade-in");
                }
            } else {
                heading.classList.remove("visible", "fade-in");
            }
        });

        if (scrollPercentage >= 69 && scrollPercentage < 73) {
            sideHeadings[1].classList.remove("visible", "fade-in");
            sideHeadings[1].classList.add("fade-out");
            sideHeadings[2].classList.remove("visible", "fade-in");
            sideHeadings[2].classList.add("fade-out");

            sideHeadings[0].classList.add("visible", "fade-in");
            sideHeadings[0].classList.remove("fade-out");
        } else if (scrollPercentage >= 75 && scrollPercentage < 76) {
            sideHeadings[0].classList.remove("visible", "fade-in");
            sideHeadings[0].classList.add("fade-out");
            sideHeadings[2].classList.remove("visible", "fade-in");
            sideHeadings[2].classList.add("fade-out");

            sideHeadings[1].classList.add("visible", "fade-in");
            sideHeadings[1].classList.remove("fade-out");
        } else if (scrollPercentage >= 75 && scrollPercentage < 79) {
            sideHeadings[0].classList.remove("visible", "fade-in");
            sideHeadings[0].classList.add("fade-out");
            sideHeadings[1].classList.remove("visible", "fade-in");
            sideHeadings[1].classList.add("fade-out");

            sideHeadings[2].classList.add("visible", "fade-in");
            sideHeadings[2].classList.remove("fade-out");
        } else {
            sideHeadings.forEach((heading) => {
                heading.classList.remove("visible", "fade-in", "fade-out");
            });
        }
    });
}