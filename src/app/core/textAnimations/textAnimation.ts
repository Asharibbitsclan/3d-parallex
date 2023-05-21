export function startTextAnimations() {
    const container = document.querySelector(
        ".scroll-sequence__container"
    ) as HTMLElement;
    const headings = document.querySelectorAll(".fade-animation");

    window.addEventListener("scroll", () => {
        const scrollPosition = window.pageYOffset;
        const containerHeight = container.offsetHeight;
        const scrollPercentage = (scrollPosition / containerHeight) * 100;

        if (scrollPercentage <= 1) {
            const heroSection = document.querySelector(
                ".hero-section"
            ) as HTMLElement;
            heroSection.style.opacity = "1";
        }

        if (scrollPercentage >= 1 && scrollPercentage < 3) {
            const heroSection = document.querySelector(
                ".hero-section"
            ) as HTMLElement;
            const opacity = Math.abs(1 - scrollPercentage / 10);
            heroSection.style.opacity = opacity.toString();
        }

        if (scrollPercentage < 5) {
            (
                document.querySelector(".scene-canvas") as HTMLElement
            ).style.opacity = "0";
        }

        if (scrollPercentage >= 3) {
            (
                document.querySelector(".hero-section") as HTMLElement
            ).style.opacity = "0";
        }
        if (scrollPercentage >= 3.5) {
            (
                document.querySelector(".scene-canvas") as HTMLElement
            ).style.opacity = "1";
        }

        headings.forEach((heading, index) => {
            if (
                scrollPercentage >= index * 10 &&
                scrollPercentage < (index + 1) * 10
            ) {
                debugger;
                // Calculate fade-in and fade-out percentages
                const fadeInPercentage = index * 10 + 1;
                const fadeOutPercentage = (index + 1) * 10 - 1;

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
                heading.classList.remove("visible", "fade-in", "fade-out");
            }
        });
    });
}
