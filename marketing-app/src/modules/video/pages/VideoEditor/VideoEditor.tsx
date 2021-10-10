import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { VideoPreview } from 'modules/video/components/VideoPreview/VideoPreview';
import { VideoProperties } from 'modules/video/components/VideoProperties/VideoProperties';
import { Button, PageLayout } from 'shared/ui-kit';
import { SiteSearchParams } from 'shared/infrastructure';
import { Video, VideoService } from 'shared/marketing-app-core';
import { StandardVideoService } from 'modules/video/services';
import { NewVideoDialog } from 'modules/video/components/NewVideoDialog/NewVideoDialog';
import { VideoSelector } from 'modules/video/components/VideoSelector/VideoSelector';

export interface VideoEditorProps {
}

export const VideoEditor: React.FC<VideoEditorProps> = props => {
    const navigate = useNavigate();
    const [params] = useSearchParams();

    const vid = params.get(SiteSearchParams.vid);
    const create = params.get(SiteSearchParams.create);

    const videoService: VideoService = useMemo(() => new StandardVideoService(), []);
    const [currentVideo, setCurrentVideo] = useState<Video | undefined>(undefined);

    const getVideo = useCallback(async () => {
        // todo: get first video from exisitng
        const video = vid ? await videoService.getVideo(vid) : undefined;
        setCurrentVideo(video);
    }, [videoService]);

    useEffect(() => {
        getVideo();
    }, [vid]);


    const createNewVideoDialog = create !== null
        ? <NewVideoDialog videoService={videoService} navigate={navigate} />
        : null;

    const videoSelector = <VideoSelector videoService={videoService} />;

    const saveVideoButton = <Button color='primary' >Save</Button>;


    return <PageLayout headerTitle={videoSelector} showDivider headerActions={saveVideoButton} flexDirection='row' >
        <VideoPreview videoService={videoService} />
        <VideoProperties />
        {createNewVideoDialog}
    </PageLayout>
}

export default VideoEditor;