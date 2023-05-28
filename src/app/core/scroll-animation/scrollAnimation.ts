export function startTextAnimations() {
    const container = document.querySelector(
        ".scroll-sequence__container"
    ) as HTMLElement;
    const headings = document.querySelectorAll(".fade-animation");

    const canvas = document.querySelector(".scene-canvas") as HTMLElement;
    const heroSection = document.querySelector(".hero-section") as HTMLElement;

    window.addEventListener("scroll", () => {
        const scrollPosition = window.pageYOffset;
        const containerHeight = container.offsetHeight;
        const scrollPercentage = (scrollPosition / containerHeight) * 100;

        if (scrollPercentage <= 1) {
            heroSection.style.opacity = "1";
        }

        if (scrollPercentage >= 1 && scrollPercentage < 3) {
            const opacity = Math.abs(1 - scrollPercentage / 3);
            heroSection.style.opacity = opacity.toString();
        }

        if (scrollPercentage >= 3) {
            heroSection.style.opacity = "0";
        }

        if (scrollPercentage < 5) {
            canvas.style.opacity = "0";
        }

        if (scrollPercentage >= 3.5 && scrollPercentage < 5) {
            const currentOpacity = Number(canvas.style.opacity);
            canvas.style.opacity = (
                currentOpacity +
                scrollPercentage / 10
            ).toString();
        }

        if (scrollPercentage >= 5) {
            canvas.style.opacity = "1";
        }

        if (scrollPercentage >= 95.5) {
            canvas.style.opacity = "0";
        }

        headings.forEach((heading, index) => {
            if (
                scrollPercentage > 5 &&
                scrollPercentage >= index * 10 &&
                scrollPercentage < (index + 1) * 10
            ) {
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
