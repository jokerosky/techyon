import React, { ReactElement, useState } from 'react';

import { VideoActor } from '../VideoActor/VideoActor';
import { VideoPropertiesNav } from '../VideoPropertiesNav/VideoPropertiesNav';

import './VideoProperties.scss';

export interface VideoPropertiesProps {

}

enum VideoPropertiesStep {
    Actor = 'Actor',
    Voice = 'Voice',
    Alignment = 'Alignment',
    Background = 'Background'
}

export const VideoProperties: React.FC<VideoPropertiesProps> = props => {
    // TODO: reimplent as url navigation
    const navigationItems = [
        {
            name: 'Actor',
            step: VideoPropertiesStep.Actor
        },
        {
            name: 'Voice',
            step: VideoPropertiesStep.Voice
        },
        {
            name: 'Alignement',
            step: VideoPropertiesStep.Alignment
        },
        {
            name: 'Background',
            step: VideoPropertiesStep.Background
        },
    ]

    const [step, setStep] = useState<VideoPropertiesStep>(VideoPropertiesStep.Actor);

    const steps = {
        [VideoPropertiesStep.Actor]: () => <VideoActor />
    } as Record<VideoPropertiesStep, () => ReactElement>;

    const getComponent = steps[step] || (() => <>unknown step</>);
    const component = getComponent();



    return <section className="video-properties">
        <VideoPropertiesNav />

        {/* <InternalNavigation links={navigationLinks} /> */}

        {component}
    </section>
}