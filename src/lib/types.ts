import type { Accordion5ColorScheme, DropDown5ColorScheme, DropDownItem, Input5ColorScheme } from "@djcali570/component-lib";

export type link = {
    href: string,
    title: string,
    sublinks?: link[],
}

export type Carousel = {
    title: string,
    subtitle: string,
    text: string,
    img: string,
    showButton?: boolean,
    buttonText?: string,
    link?: string,
}

export type Gym = {
    name: string;
    address: string;
    phone: string;
    phoneDisplay: string;
    image?: string;
    email?: string;
    link?: string;
    access?: string[];
    servicing?: string[];
}

export type weekday = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
export type scheduleType = 'Crossfit' | 'Open Gym' | 'Strength' | 'Specialty';

export interface ScheduleItem {
    day: weekday;
    time: string;
    scheduleType: scheduleType;
    desc?: string;
}

export let acs: Accordion5ColorScheme = {
    bgColor: '#FFF',
    textColor: '#010001',
    triggerColor: '#010001',
    panelBgColor: '#FFF'
}

export let acs_dark: Accordion5ColorScheme = {
    textColor: '#FFF',
    bgColor: 'transparent',
    triggerColor: '#FFF',
    panelBgColor: 'transparent'
}

export let ics: Input5ColorScheme = {
    mainBgColor: '#FFF',
    mainTextColor: '#010001',
    focusedColor: '#010001',
    counterBgColor: '#FFF',
    counterTextColor: '#010001'
}

export let d5cs: DropDown5ColorScheme = {
    bgColor: '#FFF',
    textColor: '#010001',
    focusedColor: '#010001',
    itemHoverBgColor: '#BF1E2D',
    dropdownBgColor: '#FFF',
    itemTextColor: '#010001',
    itemHoverTextColor: '#FFF'
}

export type MembershipCardData = {
    price?: string;
    priceAbbv?: string;
    subTitle?: string;
    title?: string;
    desc?: string;
    buttonTitle?: string;
    bullets?: string[];
    link?: string;
}

export let gymDropdown: DropDownItem[] = [
    {
        value: 'Montclair'
    },
    {
        value: 'Paramus'
    }
];

// Define coach type
export interface Coach {
    name: string;
    img: string;
    text: string;
    title: string;
    newClients: boolean;
}
