export interface Account {
    account_id: string;
    username: string;
    user_email: string;
    user_password: string;
  };
  export interface Song {
    song_id: string;
    song_title: string;
    song_writer: string;
    song_producer: string;
    song_length: string;
    release_date: string;
  };
  
  export interface Album {
    album_id: string;
    album_title: string;
    album_length: number;
    artwork_url: string;
    num_of_songs: number;
    release_date: Date;
  };
  export interface Group {
    group_id: string;
    group_name: string;
    group_num_members: string;
  };
  export interface Artist {
    artist_id: string;
    artist_name: string;
    artist_bio: string;
  };
  