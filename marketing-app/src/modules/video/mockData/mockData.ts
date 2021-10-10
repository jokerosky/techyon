import { VideoActor, VideoBackground, VideoBackgroundType, VideoTag, VideoVoice } from "shared/marketing-app-core";

import Anna from './pictures/Anna.jpg';
import Office from './pictures/office.jpg';
import Space from './pictures/space.jpg';

export const VIDEO_TAGS: VideoTag[] = [
    {
        id: 'email',
        name: 'Email'
    },
    {
        id: 'marketing',
        name: 'Marketing'
    },
    {
        id: 'greeting',
        name: 'Greeting'
    },
    {
        id: 'another_email',
        name: 'Email'
    },
    {
        id: 'another_marketing',
        name: 'Marketing'
    },
    {
        id: 'another_greeting',
        name: 'Greeting'
    },
]


export const VIDEO_ACTORS: VideoActor[] = [
    {
        id: 'anna',
        name: 'Anna',
        picture: Anna
    }
];

export const VIDEO_VOICES: VideoVoice[] = [
    {
        id: 'asian',
        name: 'Asian'
    },
    {
        id: 'british',
        name: 'British'
    },
    {
        id: 'american',
        name: 'American'
    }
];

export const VIDEO_BACKGROUNDS: VideoBackground[] = [
    {
        id: 'office',
        name: 'Office',
        type: VideoBackgroundType.image,
        value: Office
    },
    {
        id: 'space',
        name: 'Space',
        type: VideoBackgroundType.image,
        value: Space
    }

];