

export interface User {
    email: string;
    firstName: string;
    lastName: string;
    avatar: string;
}

export interface Money {
    currency: string;
    amount: number;
}

export interface SubscriptionPlanOption {
    text: string;
    available: boolean;
}

export interface SubscriptionPlan {
    id: string;
    name: string;
    options: SubscriptionPlanOption[];
    price: Money;
}


export interface BillingRecord {
    id: string;
    date: string;
    amount: Money;
}


export interface VideoActor {
    id: string;
    name: string;
    picture: string;
}

export interface VideoVoice {
    id: string;
    name: string;
}

export enum VideoAlignment {
    left = 'left',
    center = 'center',
    right = 'right'
}

export enum VideoBackgroundType {
    image = 'image',
    color = 'color',
    video = 'video'
}

export interface VideoBackground {
    id: string;
    type: VideoBackgroundType;
    name: string;
    value: string;
}

export interface VideoTag {
    id: string;
    name: string;
}
export interface Video {
    id: string;
    name: string;
    text: string;

    actor: VideoActor;
    voice: VideoVoice;
    alignment: VideoAlignment;
    background: VideoBackground;
    tags: VideoTag[];
}


