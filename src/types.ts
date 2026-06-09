export type SnackId = 
  | 'bamba' 
  | 'bisli_batzal' 
  | 'cheetos' 
  | 'apropo' 
  | 'pesek_zman' 
  | 'klik' 
  | 'tortit' 
  | 'tapuchips' 
  | 'egozi' 
  | 'beigale';

export interface Answer {
  text: string;
  mappedTo: SnackId;
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export interface SnackProfile {
  id: SnackId;
  title: string;
  description: string;
  imageUrl: string;
  color: string;
}
