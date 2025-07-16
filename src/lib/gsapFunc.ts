import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export function slideIn(element: HTMLElement, delay: number = 0.3, y: number = 30) {

    // Ensure the element starts fully transparent
    gsap.set(element, { opacity: 0, y });

    const tween = gsap.fromTo(
        element,
        { y: y, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 1, // Increase duration for a slower, more visible fade
            delay,
            ease: 'power2.out', // Smoother easing for a natural fade-in
            paused: true
        }
    );

    // Create ScrollTrigger to start animation when element enters viewport
    const trigger = ScrollTrigger.create({
        trigger: element,
        start: 'top bottom',
        onEnter: () => tween.play(), // Play the animation when entering the viewport
        once: true // Animation plays only once (optional, remove if you want it to replay on scroll)
    });

    // Return cleanup function
    return () => {
        tween.kill(); // Kill the GSAP tween
        trigger.kill(); // Kill the ScrollTrigger instance
    };
}

export function fade(element: HTMLElement, delay: number = 0.3) {

    const tween = gsap.fromTo(
        element,
        { opacity: 0 },
        { delay: delay, opacity: 1, duration: 1.75, paused: true, ease: 'power2.out' } // Smoother easing for a natural fade-in}
    );

    // Create ScrollTrigger to start animation when element enters viewport
    const trigger = ScrollTrigger.create({
        trigger: element,
        start: 'top bottom',
        onEnter: () => tween.play(), // Play the animation when entering the viewport
        once: true // Animation plays only once (optional, remove if you want it to replay on scroll)
    });

    // Return cleanup function
    return () => {
        tween.kill(); // Kill the GSAP tween
        trigger.kill(); // Kill the ScrollTrigger instance
    };
}