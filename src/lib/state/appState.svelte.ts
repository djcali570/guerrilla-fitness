import { PUBLIC_WEB_IMAGE_ENDPOINT } from "$env/static/public";
import type { Gym, link } from "$lib/types";

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
    { href: '/', title: 'get started', sublinks: [{ href: '/', title: 'Join Now' }, { href: '/', title: 'Nutrition Coaching' }] },
    { href: '/', title: 'Locations', sublinks: [{ href: '/montclair', title: 'Montclair' }, { href: '/paramus', title: 'Paramus' }] },
    { href: '/meet-the-team', title: 'Meet The Team' },{ href: '/contact', title: 'Conact Us' },
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