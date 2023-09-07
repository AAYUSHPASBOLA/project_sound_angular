import{guid} from '@datorama/akita';
export interface Music {
  id: number | string;
  label: string;
  author: string;
  url: string;
  img: string; 
  currentTime?: number;
}

export function createMusic(params: Partial<Music>) {
  return {

    id: guid(),
    label: params.label,
    author: params.author,
    url: params.url,
    img: params.img ,
    currentTime: params.currentTime
  } as Music;
}
