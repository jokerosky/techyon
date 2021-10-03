import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { VideoPreview } from 'modules/video/components/VideoPreview/VideoPreview';
import { VideoProperties } from 'modules/video/components/VideoProperties/VideoProperties';
import { PageLayout } from 'shared/ui-kit';
import { SiteSearchParams } from 'shared/infrastructure';
import { Video } from 'shared/marketing-app-core';

export interface VideoEditorProps {
    videos: Video[];
}

export const VideoEditor: React.FC<VideoEditorProps> = props => {
    const { videos } = props;

    const [params] = useSearchParams();
    const vid = params.get(SiteSearchParams.vid);

    // TODO: externalize logic to services
    // const video = videoService.get(vid);

    const currentVideo = videos.find(v => v.id === vid);

    const videoSelector = currentVideo ? <>Dropdown</> : '';

    return <PageLayout headerTitle={videoSelector} showDivider>
        <VideoPreview />
        <VideoProperties />
    </PageLayout>
}

export default VideoEditor;