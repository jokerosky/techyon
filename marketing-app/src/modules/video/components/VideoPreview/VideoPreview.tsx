import React from 'react';
import { Video, VideoService } from 'shared/marketing-app-core';

import './VideoPreview.scss';

export interface VideoPreviewProps {
    videoService: VideoService;
}

export const VideoPreview: React.FC<VideoPreviewProps> = props => {
    return <section className="video-preview">
        Video Previwe
    </section>
}