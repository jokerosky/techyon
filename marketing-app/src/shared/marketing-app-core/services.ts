import { Filter } from "shared/infrastructure";
import { Video, VideoActor, VideoAlignment, VideoBackground, VideoTag, VideoVoice } from "./Entites";
import { NewVideoDTO } from "./DTOs";
import { BillingRecord } from "./Entites";

export interface VideoService {

    getVideo(id: string): Promise<Video | undefined>;
    getTags(): Promise<VideoTag[]>;
    getVoices(): Promise<VideoVoice[]>;
    getActors(): Promise<VideoActor[]>;
    getAlignments(): Promise<VideoAlignment[]>;
    getBackgrounds(): Promise<VideoBackground[]>;

    createNewVideo(newVideo: NewVideoDTO): Promise<string>;
}


export interface BillingService {
    getInvoices(filter: Filter): Promise<BillingRecord[]>;
}