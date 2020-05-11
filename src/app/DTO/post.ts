export class Post {
    post_id: number;
    post_title: string;
    post_desc: string;
    post_date: string;
    user_id: number;
    community_id: number;
    file_path: string;
    username: string;


    public constructor(
        post_id: number,
        post_title: string,
        post_desc: string,
        post_date: string,
        user_id: number,
        community_id: number,
        file_path: string,
        username: string,


    ) {
            this.post_id = post_id,
            this.post_title = post_title,
            this.post_desc = post_desc,
            this.post_date = post_date,
            this.user_id = user_id,
            this.community_id = community_id,
            this.file_path = file_path,
            this.username = username
    }
}