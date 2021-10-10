import { NewVideoDTO, Video, VideoActor, VideoAlignment, VideoBackground, VideoTag, VideoVoice } from "shared/marketing-app-core";
import { VideoService } from "shared/marketing-app-core/services";
import { VIDEO_ACTORS, VIDEO_BACKGROUNDS, VIDEO_TAGS, VIDEO_VOICES } from "../mockData/mockData";


export class StandardVideoService implements VideoService {

    private readonly videos: Video[] = [];

    constructor() {

    }

    getVideo(id: string): Promise<Video | undefined> {
        // throw new Error("Method not implemented.");

        return Promise.resolve(this.videos.find(video => video.id === id));
    }
    getVoices(): Promise<VideoVoice[]> {
        throw new Error("Method not implemented.");
    }
    getActors(): Promise<VideoActor[]> {
        return Promise.resolve(VIDEO_ACTORS);
    }
    getAlignments(): Promise<VideoAlignment[]> {
        return Promise.resolve([VideoAlignment.left, VideoAlignment.center, VideoAlignment.right]);
    }
    getBackgrounds(): Promise<VideoBackground[]> {
        return Promise.resolve(VIDEO_BACKGROUNDS);
    }

    getTags(): Promise<VideoTag[]> {
        return Promise.resolve(VIDEO_TAGS);
    }




    createNewVideo(newVideo: NewVideoDTO): Promise<string> {

        // some communication with server

        const defaultActor = VIDEO_ACTORS[1] as VideoActor;
        const defaultVoice = VIDEO_VOICES[0] as VideoVoice;
        const defaultBackground = VIDEO_BACKGROUNDS[0] as VideoBackground;

        const video = {
            name: newVideo.name,
            tags: [],
            actor: defaultActor,
            voice: defaultVoice,
            text: '',
            id: Math.random().toString().substr(2, 3),
            background: defaultBackground,
            alignment: VideoAlignment.center,
        } as Video;

        this.videos.push(video);

        return Promise.resolve(video.id);
    }

}