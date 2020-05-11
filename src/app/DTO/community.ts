export class Community {
    community_id: Number;
    community_name: string;
    community_desc: string;
    community_status: number;
    user_id: number
    public constructor(
        community_id: Number,
        community_name: string,
        community_desc: string,
        user_id: number,
        community_status: number) {
        this.community_id = community_id;
        this.community_name = community_name;
        this.community_desc = community_desc;
        this.user_id = user_id;
        this.community_status=community_status;
    }
}


