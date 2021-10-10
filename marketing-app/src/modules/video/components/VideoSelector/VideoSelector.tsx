import React from 'react';
import { VideoService } from 'shared/marketing-app-core';

export interface VideoSelectorProps {
    videoService: VideoService;
}

export const VideoSelector: React.FC<VideoSelectorProps> = props => {
    const { videoService } = props;
    return <select>
        <option>Video 1</option>
        <option>Video 2</option>
    </select>;
}