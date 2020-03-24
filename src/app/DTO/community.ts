export class Community {
    communityId: Number;
    communityName: string;
    //community_desc: string;
    username: string;
    public constructor(
        communityId: Number,
        communityName: string,
        //community_desc: string,
        username: string) {
        this.communityId = communityId;
        this.communityName = communityName;
        //this.community_desc = community_desc;
        this.username = username;
    }
}


