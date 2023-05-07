import { gsap } from "gsap";

export function homepageAnimation(headings, icon) {
    const tl = gsap.timeline({ delay: .40, ease: "ease-in", stagger: 0.35 });

    headings.forEach(heading => {
        tl.from(heading.value, { x: '+50', autoAlpha: 0, duration: 0.40 });
    });

    tl.from(icon.value, { y: '+25', autoAlpha: 0, duration: 0.35, stagger: 0.10 });
};

export function aboutpageAnimation(aboutHeader, contentText) {
    const tl = gsap.timeline({ delay: 0.50, ease: "ease-in" });

    tl.from(aboutHeader.value, { x: '+55', autoAlpha: 0, duration: 0.50 });
    tl.from(contentText.value, { y: '+30', autoAlpha: 0, duration: 0.35, stagger: 0.15});
};

export function projectspageAnimation(projectHeader, projectCard) {
    const tl = gsap.timeline({ delay: 0.50, ease: "ease-in" });

    tl.from(projectHeader.value, { x: '+55', autoAlpha: 0, duration: 0.50 });
    tl.from(projectCard.value, { y: '+30', autoAlpha: 0, duration: 0.50, stagger: 0.20}); 
};

export function projectdetailpageAnimation(projectNameHeader, projectInfoCard) {
    const tl = gsap.timeline({ delay: 0.35, ease: "ease-in" });

    tl.from(projectNameHeader.value, { x: '+45', autoAlpha: 0, duration: 0.40 });
    tl.from(projectInfoCard.value, { y: '+30', autoAlpha: 0, duration: 0.30 });   
}