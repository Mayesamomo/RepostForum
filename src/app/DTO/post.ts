export class Post {
    postId: number;
    userId: number;
    postTitle: string;
    postDesc: string;
    postDate: string;
    media: string;
    status: number;
    userName: string;
    communityName: string;
    votes: number;

    public constructor(
        postId: number,
        userId: number,
        postTitle: string,
        postDesc: string,
        postDate: string,
        media: string,
        status: number,
        userName: string,
        communityName: string,
        votes: number
    ) {
        this.postId = postId,
            this.userId = userId,
            this.postTitle = postTitle,
            this.postDesc = postDesc,
            this.postDate = postDate,
            this.media = media,
            this.status = status,
            this.userName = userName,
            this.communityName = communityName,
            this.votes = votes
    }
    VoteUp() {
        this.votes += 1;
    }
    VoteDown() {
        this.votes -= 1;
    }
}