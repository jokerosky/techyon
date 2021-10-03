import { MarketingAppRoutesTree } from 'apps/marketing';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { Video } from 'shared/marketing-app-core';
import { Button, PageLayout } from 'shared/ui-kit';


// TODO: replace gettting videos from global state with a service and initialization on mount
export interface SavedVideosProps {
    videos: Video[];
}

export const SavedVideos: React.FC<SavedVideosProps> = props => {

    const navigate = useNavigate();

    // TODO: move to domain service?
    const gotoVideo = useCallback(() => {
        navigate(MarketingAppRoutesTree.createVideo);
    }, [navigate]);

    const pageActions = <Button color='primary' onClick={gotoVideo} >Create New</Button>;

    return <PageLayout headerTitle="Saved Videos" showDivider headerActions={pageActions} >

    </PageLayout>
}

export default SavedVideos;