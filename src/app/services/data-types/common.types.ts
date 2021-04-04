export type Banner = {
    targetId: number;
    url: string;
    imageUrl:string;
}

export type HotTag = {
    id: number;
    name:string;
    position:number;
}

export type SongSheet = {
    id: number;
    name:string;
    picUrl:string;
    playCount:number;
}

export type Singer = {
    id:number;
    name:string;
    picUrl:string;
    albumSize:number;
}

export interface SingerDetail {
    artist: Singer;
    hotSongs: Song[];
  }

// 歌曲
export interface Song {
    id: number;
    name: string;
    url: string;
    ar: Singer[];
    al: { id: number; name: string; picUrl: string };
    dt: number;
  }