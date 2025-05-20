import type { Accordion5ColorScheme } from "@djcali570/component-lib";

export type link = {
    href: string,
    title: string,
    sublinks?: link[],
}

export type Carousel = {
    title: string,
    subtitle: string,
    text: string,
    img: string
}

export type Gym = {
    name: string;
    address: string;
    phone: string;
    image?: string;
    email?: string;
    link?: string;
}

export type weekday = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
export type scheduleType = 'Crossfit' | 'Open Gym' | 'Strength';

export interface ScheduleItem {
    day: weekday;
    time: string;
    scheduleType: scheduleType;
}

export let acs: Accordion5ColorScheme = {
    bgColor: '#FFF',
    textColor: '#010001',
    triggerColor: '#010001',
}
