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
/**
 * Menu Links
 */
export const links: link[] = [
    { href: '/', title: 'get started', sublinks: [{ href: '/memberships', title: 'Membership Options' }, { href: '/new-to-guerrilla-fitness', title: 'New To Guerrilla Fitness' }, { href: '/our-workouts', title: 'Our Workouts' }, { href: '/nutrition', title: 'Nutrition Coaching' }] },
    { href: '/', title: 'Locations', sublinks: [{ href: '/montclair', title: 'Montclair' }, { href: '/paramus', title: 'Paramus' }] },
    { href: '/meet-the-team', title: 'Meet The Team' }, { href: '/contact', title: 'Contact Us' },
];

export const gyms: Gym[] = [
    {
        name: 'Montclair',
        address: '19 Elm St, Montclair NJ 07042',
        phone: '1-973-337-6538',
        phoneDisplay: '973-337-6538',
        image: `${PUBLIC_WEB_IMAGE_ENDPOINT}/montclair-map/view?project=guerrilla&project=guerrilla`,
        link: '/montclair',
        servicing: [
            'Servicing all of Essex County. Montclair, Glen Ridge, Bloomfield, Clifton, Cedar Grove, Verona and West Orange'
        ],
        lat: 40.80928,
        lng: -74.21330
    },
    {
        name: 'Paramus',
        address: '348 Evelyn St, Paramus NJ 07652',
        phone: '1-201-967-5000',
        phoneDisplay: '201-967-5000',
        image: `${PUBLIC_WEB_IMAGE_ENDPOINT}/paramus-map/view?project=guerrilla&project=guerrilla`,
        link: '/paramus',
        access: [
            'Back Access to the Gym (not available on GPS):',
            'Off E. Midland Ave take Sette Dr behind Trader Joe’s to Powers Dr to Evelyn St.',
            'Off E. Midland Ave enter Humdinger’s parking lot through to Evelyn St. ',
            'Parking lot and street parking available'
        ],
        servicing: [
            'Servicing all of Bergen County. Paramus, Fair Lawn, Oradell, Ridgewood, Westwood, Glen Rock, Waldwick, Midland Park, River Edge, Dumont, Bergenfield, Hackensack and Hawthorne'
        ],
        lat: 40.94462,
        lng: -74.06975
    }
];

export const mainCarouselitems: Carousel[] = [
    {
        title: 'What To Expect',
        subtitle: 'Expert Coaching',
        text: 'Learn how to move well, safely, and with purpose.  Our coaches tailor every workout to your current ability.  Ensuring you get the challenge you need and the support to reach your goals.',
        img: `${PUBLIC_WEB_IMAGE_ENDPOINT}/wte-01c/view?project=${PUBLIC_PROJECT_ID}`,
        showButton: true,
        buttonText: 'Join Now',
        link:'/memberships'
    },
    {
        title: 'What To Expect',
        subtitle: 'Positive Culture',
        text: 'Thrive in an environment where encouragement is the norm and everyone’s effort is respected.  Here we train for strength, health, and longevity.  We are better together.',
        img: `${PUBLIC_WEB_IMAGE_ENDPOINT}/wte-02/view?project=${PUBLIC_PROJECT_ID}`,
        showButton: true,
        buttonText: 'Join Now',
        position: 'object-[50%_0%]',
        link:'/memberships'
    },
    {
        title: 'What To Expect',
        subtitle: 'Long Term Health',
        text: 'Get ready to transform how you look and feel for the rest of your life.',
        img: `${PUBLIC_WEB_IMAGE_ENDPOINT}/wte-03c/view?project=${PUBLIC_PROJECT_ID}`,
        showButton: true,
        buttonText: 'Join Now',
        position: 'object-[70%_50%] md:object-[80%_50%]',
        link:'/memberships'
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
        name: 'Alex',
        img: `${PUBLIC_WEB_IMAGE_ENDPOINT}/alex/view?project=${PUBLIC_PROJECT_ID}`,
        text: 'I’ve been a coach at Guerrilla for roughly four years and a CrossFitter for about eight! I love playing sports like Baseball and Soccer and at times love riding my skateboard; I like to think I still got it, haha. My passion is everything revolving around health and fitness. I’m a big advocate of working on the small things to help compliment the bigger picture.\n\nI made myself a guinea pig for many different projects, such as trying out multiple diets to see what is realistic and what isn’t, competing in various challenges like the Ragnar Relay/Trail, CrossFit comps, Men’s Physique, etc.\n\nI enjoy breaking things down and helping others better understand particular concepts in both the realms of health and fitness. So let me help you achieve the best version of yourself!',
        title: 'L2 Coach, Nutrition',
        newClients: true
    },
    {
        name: 'Kendra',
        img: `${PUBLIC_WEB_IMAGE_ENDPOINT}/kendra/view?project=${PUBLIC_PROJECT_ID}`,
        text: 'It was truly “love at first sight” with CrossFit, and that passion has only grown stronger over time. I’m a Level 2 Certified CrossFit Coach and also hold a CrossFit Nutrition certification. Competing is one of the ways I stay motivated, set training goals, and push myself to new levels—I’ve had the privilege of winning individual events, placing high in team competitions, and qualifying multiple times for the CrossFit Open quarterfinals. Beyond CrossFit, I enjoy taking on new challenges like Spartan Races, GoRuck events, and even the occasional triathlon. I especially love bringing people together to test our fitness outside the gym and create shared experiences that carry over into life. Most importantly, I’m the proud mother of two daughters, and they are the driving force behind everything I do.',
        title: 'L2 Coach',
        newClients: true
    },
    {
        name: 'Keith',
        img: `${PUBLIC_WEB_IMAGE_ENDPOINT}/keith/view?project=${PUBLIC_PROJECT_ID}`,
        text: 'I have been fascinated with teaching people how to move their bodies for a long time.  It started with jiujitsu, then yoga, and then CrossFit.  When I discovered CrossFit in the early 2000s it was all new and foreign to me, but I was captivated and had to learn all I could about every facet of CrossFit. I started organizing workouts in Central Park and that evolved into opening CrossFit NYC in 2005. The next step was opening CrossFit Virtuosity and The Brooklyn Barbell Club in 2009. Then I started coaching on seminars for olympic weightlifting, gymnastics, kettlebells, and starting strength. In 2010, I began coaching CrossFit Level 1 and Level 2 seminars. I have now worked over 375 seminars for CrossFit and I\’m still going.\n\n In addition to coaching CrossFit and Jiujitsu, I try to spend as much time with my kids as I can, eat a carnivore diet, and play my guitar.',
        title: 'L4 Coach',
        newClients: true,
        zoomLevel: '1.25'
    },
    {
        name: 'Fernando',
        img: `${PUBLIC_WEB_IMAGE_ENDPOINT}/fernando/view?project=${PUBLIC_PROJECT_ID}`,
        text: 'Hi, I’m Coach Fernando! I’ve been part of the CrossFit community since 2017, and I bring more than a decade of experience in education to my coaching. That blend of teaching and training has shaped the way I approach every class—with clarity, patience, and purpose. For me, CrossFit is so much more than fitness. It’s a community and an experience that has the power to be the best hour of someone’s day.\n\nI bring energy, encouragement, and a genuine commitment to helping every athlete I work with thrive. I want people to leave my sessions not just with a great workout, but with something useful they can carry with them—whether that’s confidence, a new skill, or just a better understanding of their own potential. You’ll find me coaching classes at Guerrilla Fitness Montclair each week, and I also offer individualized one-on-one training for those looking for more personal attention.\n\nAnd here’s a fun fact: I don’t just use my quads for squatting. On my days off, you’ll probably catch me out mountain biking, climbing, or skiing—because moving well and living strong extends far beyond the gym.',
        title: 'L2 Coach',
        newClients: true
    },
    {
        name: 'Dr. Alex',
        img: `${PUBLIC_WEB_IMAGE_ENDPOINT}/dr_alex/view?project=${PUBLIC_PROJECT_ID}`,
        text: 'I\'m passionate about helping athletes of all levels reach their full potential. With a foundation in health and exercise science, I have over a decade of experience as a Certified Strength and Conditioning Specialist, a USAW Olympic lifting coach, and a Level-1 CrossFit coach. My background in Physical Therapy allows me to approach training from a holistic perspective.\n\nAs a Level-1 CrossFit coach, I\'m dedicated to supporting athletes who want to make the most of their training. With a strong grasp of CrossFit principles and techniques, I\'m in a unique position to guide you on your journey towards improved fitness and performance.',
        title: 'L2 Coach, Physical Therapist',
        newClients: true
    },
    {
        name: 'Rodrigo',
        img: `${PUBLIC_WEB_IMAGE_ENDPOINT}/rodrigo/view?project=${PUBLIC_PROJECT_ID}`,
        text: 'I started my CrossFit journey back in 2010 after watching the CrossFit Games on ESPN.  I was so inspired by the athletes I ran to join a CrossFit gym. My dedication to the sport soon turned to a passion for coaching. I quickly fell in love with the job of helping people achieve their health and fitness goals solidifying my decision to pursue coaching as a professional career.  In my 8 years as a Coach I’ve accumulated thousands of hours enjoying every minute along the way.\n\nMy competitive achievements include qualifying for the CrossFit Games in 2019 and 2020 as the Bolivian National Champion. I’ve held the title of National Champion of Bolivia in 2019, 2020, 2021, and 2024.\n\nI’m a Level 2 Certified CrossFit Coach.  I specialize in Olympic Lifting and Functional Bodybuilding.  My Opex and nutrition certifications allow me to individualize programming if you are looking for personal training and have specific performance and/or weight loss goals.\n\nI’m excited be a part of the Guerrilla Fitness staff and community. I take great pride in leading a class and connecting with members. I’m here to help and guide you on your fitness journey.  The overall goal is to make a healthier and happier YOU!\n\nSee you in class.',
        title: 'L2 Coach, Nutrition',
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
    {
        name: 'Naama',
        img: `${PUBLIC_WEB_IMAGE_ENDPOINT}/naama/view?project=${PUBLIC_PROJECT_ID}`,
        text: 'My favorite part about being a coach is seeing the look on someone’s face when they do something they didn’t think possible. If I’m able to be even the smallest part of that moment, people change their perspective of what they can do - be it a squat PR, a handstand, a double under, a loss of pounds on the scale - then that’s the best reward I could ever want.  No matter your fitness level or what stage in life you are at, there is always something you can improve, and I’m here to help you with that.',
        title: 'L3 Coach',
        newClients: true
    },

]

export const paramusSliderImages: string[] = ['p-slider-04', 'p-slider-02', 'p-slider-01', 'p-slider-05', 'p-slider-07', 'p-slider-08', 'p-slider-11', 'p-slider-12', 'p-slider-13', 'p-slider-10', 'p-slider-03'];;

export const montclairSliderImages: string[] = ['m-slider-01', 'm-slider-02', 'm-slider-03', 'm-slider-04', 'm-slider-05', 'm-slider-06', 'm-slider-07', 'm-slider-08', 'm-slider-09', 'm-slider-10'];