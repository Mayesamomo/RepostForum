export class Community {
    communityId: Number;
    community_name: string;
    community_desc: string;
    user_id: number;
    public constructor(
        communityId: Number,
        community_name: string,
        community_desc: string,
        user_id: number) {
        this.communityId = communityId;
        this.community_name = community_name;
        this.community_desc = community_desc;
        this.user_id = user_id;
    }
}


