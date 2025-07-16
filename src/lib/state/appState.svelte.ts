import { PUBLIC_WEB_IMAGE_ENDPOINT } from "$env/static/public";
import type { Carousel, Gym, link } from "$lib/types";

/**
 *  Menu Actions
 */
export function menuActions() {
    let menuStatus = $state(false);

    function updateStatus() {
        menuStatus = !menuStatus;
    }

    return {
        get menuStatus() { return menuStatus; },
        updateStatus
    }
}

export const counter = $state({
    count: 0
});

/**
 * Menu Links
 */
export const links: link[] = [
    { href: '/', title: 'get started', sublinks: [{ href: '/memberships', title: 'Membership Options' }, { href: '/new-to-guerrilla-fitness', title: 'New To Guerrilla Fitness' }, { href: '/our-workouts', title: 'Our Workouts' }, { href: '/nutrition', title: 'Nutrition Coaching' }] },
    { href: '/', title: 'Locations', sublinks: [{ href: '/montclair', title: 'Montclair' }, { href: '/paramus', title: 'Paramus' }] },
    { href: '/meet-the-team', title: 'Meet The Team' }, { href: '/contact', title: 'Conact Us' },
];

export const gyms: Gym[] = [
    {
        name: 'Montclair',
        address: '19 Elm St, Montclair NJ 07042',
        phone: '1-973-337-6538',
        image: `${PUBLIC_WEB_IMAGE_ENDPOINT}/temp_gym1/view?project=guerrilla&project=guerrilla`,
        link: '/montclair'
    },
    {
        name: 'Paramus',
        address: '348 Evelyn St, Paramus NJ 07652',
        phone: '1-201-967-5000',
        image: `${PUBLIC_WEB_IMAGE_ENDPOINT}/temp_gym2/view?project=guerrilla&project=guerrilla`,
        link: '/paramus'
    }
];

export const mainCarouselitems: Carousel[] = [
    {
        title: 'What To Expect',
        subtitle: 'Create Your Plan',
        text: 'Work with our Guerrilla Fitness and nutrition experts to create a simple and sustainable plan to reach your goals',
        img: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110',
        showButton: true,
        buttonText: 'Join Now'
    },
    {
        title: 'What To Expect',
        subtitle: 'Get Results',
        text: 'Get ready to transform how you look and feel with a fitness nutrition program that works',
        img: 'https://images.unsplash.com/photo-1550259979-ed79b48d2a30',
        showButton: true,
        buttonText: 'Join Now'
    },
    {
        title: 'What To Expect',
        subtitle: 'Set Your Goals',
        text: 'Set your goals with a Guerrilla Fitness team member and take biometric measurements to measure your success',
        img: 'https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e',
        showButton: true,
        buttonText: 'Join Now'
    }
];

export const nutritionCarouselitems: Carousel[] = [
    {
        title: 'What to expect',
        subtitle: 'Track your progress',
        text: 'Monthly in-person check-ins to measure biometrics and track your progress',
        img: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110'
    },
    {
        title: 'What To Expect',
        subtitle: 'Accountability',
        text: 'Weekly videos and check-ins from your nutrition coach to provide support and accountability',
        img: 'https://images.unsplash.com/photo-1550259979-ed79b48d2a30'
    },
    {
        title: 'What To Expect',
        subtitle: 'Habit-based method',
        text: 'Custom habits and goals developed to set you up for success',
        img: 'https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e'
    }
];