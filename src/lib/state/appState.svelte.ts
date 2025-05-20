import type { link } from "$lib/types";

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
    { href: '/meet-the-team', title: 'Meet The Team' },
];

