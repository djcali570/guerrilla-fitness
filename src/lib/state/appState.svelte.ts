import { PUBLIC_PROJECT_ID, PUBLIC_WEB_IMAGE_ENDPOINT } from "$env/static/public";
import type { Carousel, Coach, Gym, link } from "$lib/types";

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

export const coaches: Coach[] = [
    {
        name: 'Gregg',
        img: `${PUBLIC_WEB_IMAGE_ENDPOINT}/gregg/view?project=${PUBLIC_PROJECT_ID}`,
        text: 'When I decided to follow my calling and open a gym... with a methodology, philosophy, and a culture that I believed in, it was quite serendipitous that I also stumbled across CrossFit. It was the perfect fit for me and my new gym. And I was excited to make Guerrilla Fitness a reality.\n\nMany years later, and with tens of thousands of coaching hours under my belt, I am still excited about the work we do here at Guerrilla Fitness. And I am infinitely proud and grateful for my team of coaches and members, all of whom have contributed to building our long respected reputation in the greater CrossFit community.\n\nCoaching continues to be one of my life\'s most significant rewards and one of my most humbling experiences. And I am relentlessly dedicated to the service of fitness and providing aspace that is equally welcoming and inspiring. I believe anyone can thrive in a culture of purpose, discipline, support, and inclusivity. And that all paths and trajectories to our shared goals of being healthier and fitter... happier even are equally respected, supported, and celebrated.\n\nAt Guerilla Fitness, we will always be Better Together.',
        title: 'L3 Coach',
        newClients: true
    },
    {
        name: 'Joe',
        img: `${PUBLIC_WEB_IMAGE_ENDPOINT}/joe/view?project=${PUBLIC_PROJECT_ID}`,
        text: 'I always wanted to help people at a very young age but just wasn\'t sure where my journey would lead me to connect that passion to a career. I instructed martial arts, gymnastics, hip-hop & breakdancing, but CrossFit allowed me to help a bigger pool of people get healthier and happier, quite frankly...quicker. Seeing our members achieve their goals with smiles, hugs, hi-5s, and sometimes tears is the biggest reward. I enjoy every moment in the gym. There\'s nothing like CrossFit and no place like the magic at Guerrilla Fitness.',
        title: 'L3 Coach',
        newClients: true
    },
    {
        name: 'Naama',
        img: `${PUBLIC_WEB_IMAGE_ENDPOINT}/naama/view?project=${PUBLIC_PROJECT_ID}`,
        text: 'My favorite part about being a coach is seeing the look on someone’s face when they do something they didn’t think possible. If I’m able to be even the smallest part of that moment, people change their perspective of what they can do - be it a squat PR, a handstand, a double under, a loss of pounds on the scale - then that’s the best reward I could ever want.  No matter your fitness level or what stage in life you are at, there is always something you can improve, and I’m here to help you with that.',
        title: 'L3 Coach',
        newClients: true
    },
    {
        name: 'Alex',
        img: `${PUBLIC_WEB_IMAGE_ENDPOINT}/alex/view?project=${PUBLIC_PROJECT_ID}`,
        text: 'I’ve been a coach at Guerrilla for roughly four years and a CrossFitter for about eight! I love playing sports like Baseball and Soccer and at times love riding my skateboard; I like to think I still got it, haha. My passion is everything revolving around health and fitness. I’m a big advocate of working on the small things to help compliment the bigger picture.\n\nI made myself a guinea pig for many different projects, such as trying out multiple diets to see what is realistic and what isn’t, competing in various challenges like the Ragnar Relay/Trail, CrossFit comps, Men’s Physique, etc.\n\nI enjoy breaking things down and helping others better understand particular concepts in both the realms of health and fitness. So let me help you achieve the best version of yourself!',
        title: 'L2 Coach',
        newClients: true
    },
    {
        name: 'Kendra',
        img: `${PUBLIC_WEB_IMAGE_ENDPOINT}/kendra/view?project=${PUBLIC_PROJECT_ID}`,
        text: 'Need BIO',
        title: 'L2 Coach',
        newClients: true
    },
    {
        name: 'Fernando',
        img: `${PUBLIC_WEB_IMAGE_ENDPOINT}/fernando/view?project=${PUBLIC_PROJECT_ID}`,
        text: 'Need BIO',
        title: 'L2 Coach',
        newClients: true
    },
    {
        name: 'Dr. Alex',
        img: `${PUBLIC_WEB_IMAGE_ENDPOINT}/dr_alex/view?project=${PUBLIC_PROJECT_ID}`,
        text: 'I\'m passionate about helping athletes of all levels reach their full potential. With a foundation in health and exercise science, I have over a decade of experience as a Certified Strength and Conditioning Specialist, a USAW Olympic lifting coach, and a Level-1 CrossFit coach. My background in Physical Therapy allows me to approach training from a holistic perspective.\n\nAs a Level-1 CrossFit coach, I\'m dedicated to supporting athletes who want to make the most of their training. With a strong grasp of CrossFit principles and techniques, I\'m in a unique position to guide you on your journey towards improved fitness and performance.',
        title: 'L2 Coach',
        newClients: true
    },
    {
        name: 'Rodrigo',
        img: `${PUBLIC_WEB_IMAGE_ENDPOINT}/rodrigo/view?project=${PUBLIC_PROJECT_ID}`,
        text: 'Need BIO',
        title: 'L2 Coach',
        newClients: true
    },

    {
        name: 'Dan',
        img: `${PUBLIC_WEB_IMAGE_ENDPOINT}/dan/view?project=${PUBLIC_PROJECT_ID}`,
        text: 'I joined Guerilla CrossFit over a year ago and instantly felt at home.  This is an awesome community where members show up, work hard, and build each other up.\n\nI am excited to coach here and continue my passion for helping others achieve their goals. Since I began CrossFit almost a decade ago, it has taught me the true meaning of resilience, discipline, and perseverance.\n\nIt\'s not just about physical strength but also about mental fortitude and the relentless pursuit of self-improvement.  I have competed in many competitions and encourage everyone to try one.  There is no better feeling than hearing your community have your back.',
        title: 'L2 Coach',
        newClients: true
    },
    {
        name: 'Allison',
        img: `${PUBLIC_WEB_IMAGE_ENDPOINT}/allison/view?project=${PUBLIC_PROJECT_ID}`,
        text: 'My journey into becoming a Nutrition Coach was inspired by my own struggles - body dysmorphia, yo-yo dieting, alcohol abuse, and a wave of bad advice. But I was determined to turn things around, and once I found a healthier path, I knew I wanted to guide others down it too.\n\nNow, as your Nutrition Coach at Guerrilla Fitness, my mission is to help you make the best nutritional choices when you\'re not sweating it out in the gym. My approach is a blend of science-based nutrition principles and practical, realistic plans tailored to your unique needs.\n\nI\'m thrilled to work with the passionate, dedicated athletes at Guerrilla Fitness, with a goal to enhance performance and boost confidence both inside and outside the gym. I look forward to being part of your journey towards healthier choices and a stronger self!',
        title: 'Nutrition Coach',
        newClients: true
    },





]