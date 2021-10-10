import { SubscriptionPlan } from "shared/marketing-app-core";

export const DEFAULT_PLANS: SubscriptionPlan[] = [
    {
        id: 'free',
        name: 'Free',
        options: [
            {
                text: 'Pellentesque interdum libero et',
                available: true
            },
            {
                text: 'Pellentesque posuere jdfkdfkdfhd',
                available: true
            },
            {
                text: 'Cras sed felis eget',
                available: true
            },
            {
                text: 'Maecenas eget luctus',
                available: true
            },
            {
                text: 'Nullam vitae augue',
                available: true
            }
        ],
        price: {
            amount: 0,
            currency: 'USD'
        }
    },
    {
        id: 'pro',
        name: 'Pro',
        options: [
            {
                text: 'Maecenas eget luctus purus',
                available: true
            },
            {
                text: 'Graesent in sollicitudin velit',
                available: true
            },
            {
                text: 'Donec in orci vitae nisi ',
                available: true
            },
            {
                text: 'Class aptent taciti',
                available: true
            },
            {
                text: 'Ut blandit vestibulum',
                available: false
            }

        ],
        price: {
            amount: 12,
            currency: 'USD'
        }
    },
    {
        id: 'team',
        name: 'Team',
        options: [
            {
                text: 'Etiam ac finibus nisi, a porttitor',
                available: true
            },
            {
                text: 'Quisque tincidunt velit a sapien vulputate ',
                available: true
            },
            {
                text: 'Vivamus pulvinar',
                available: true
            },
            {
                text: 'In hac habitasse plateas',
                available: true
            },
            {
                text: 'Nullam vitae augue',
                available: false
            }

        ],
        price: {
            amount: 23,
            currency: 'USD'
        }
    },
    {
        id: 'agency',
        name: 'Agency',
        options: [
            {
                text: 'Praesent in sollicitudin velit',
                available: true
            },
            {
                text: 'Nulla tincidunt finibus interdum',
                available: true
            },
            {
                text: 'Nullam vitae augue',
                available: true
            },
            {
                text: 'Curabitur eleifend',
                available: true
            },
            {
                text: 'Quisque vel ex enim',
                available: true
            }

        ],
        price: {
            amount: 43,
            currency: 'USD'
        }
    },
]