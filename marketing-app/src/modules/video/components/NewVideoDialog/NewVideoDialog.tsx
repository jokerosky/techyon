import React, { FormEventHandler, useCallback, useEffect, useState } from 'react';
import { NavigateFunction } from 'react-router';

import { Button, Chip, MaterialInput } from 'shared/ui-kit';
import { VideoTag, VideoService, MarketingAppRoutesTree } from 'shared/marketing-app-core';

import './NewVideoDialog.scss';

export interface NewVideoDialogProps {
    videoService: VideoService;
    navigate: NavigateFunction;
}

export const NewVideoDialog: React.FC<NewVideoDialogProps> = props => {
    const { videoService, navigate } = props;

    // TODO: maybe combine to one state or move to reducer
    const [videoName, setVideoName] = useState('Saying Hi to my customers');
    const [selectedVideoTagsIds, setSelectedVideoTagsIds] = useState<string[]>([]);
    const [videoTags, setVideoTags] = useState<VideoTag[]>([]);

    const formSubmit = useCallback<FormEventHandler>(async (e) => {

        try {
            const vid = await videoService.createNewVideo({
                name: videoName,
                tagIds: selectedVideoTagsIds
            });

            navigate(`${MarketingAppRoutesTree.editVideo}?vid=${vid}`);
        }
        catch (exp: any) {
            alert(exp.message);
        }
        finally {
            e.preventDefault();
            return false;
        }

    }, [videoService]);

    const getTags = useCallback(async () => {
        const tags = await videoService.getTags();
        setVideoTags(tags);
    }, [videoService]);

    useEffect(() => {
        getTags();
    }, [videoService]);

    const selectTag = useCallback((tagId: string) => {
        const inTags = selectedVideoTagsIds.find(id => id === tagId);
        const newTags = inTags ? selectedVideoTagsIds.filter(id => id !== tagId) : [...selectedVideoTagsIds, tagId];
        setSelectedVideoTagsIds(newTags);
    }, [selectedVideoTagsIds, setSelectedVideoTagsIds]);

    return <div className='new-video-dialog'>
        <form onSubmit={formSubmit} >
            <div>
                <MaterialInput focus value={videoName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setVideoName(e.target.value);
                }} />
            </div>
            <p>Fusce quis magna vel ex pellentesque consequat sed et turpis. Vivamus bibendum rutrum euismod. Sed non sagittis est, semper</p>
            <div className="video-tags">
                {videoTags.map(tag => <Chip key={tag.id}
                    active={Boolean(selectedVideoTagsIds.find(id => tag.id === id))}
                    onClick={() => { selectTag(tag.id) }} >
                    {tag.name}
                </Chip>)}
            </div>
            <div className='actions'>
                <Button color='primary'>Save</Button>
            </div>
        </form>;
    </div>

}