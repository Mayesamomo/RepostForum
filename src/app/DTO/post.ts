export class Post {
    postId: number;
    userId: number;
    postTitle: string;
    postDesc: string;
    postDate: string;
    media: string;
    status: number;
    username: string;
    communityName: string;
    votesNum: number;
    upVote: boolean;
    downVote: boolean;
    commentNum: number;
    /*public constructor(
        postId: number,
        userId: number,
        postTitle: string,
        postDesc: string,
        postDate: string,
        media: string,
        status: number,
        username: string,
        communityName: string,
        votesNum: number,
        commentNum: number,
        upVote: boolean,
        downVote: boolean
    ) {
        this.postId = postId,
            this.userId = userId,
            this.postTitle = postTitle,
            this.postDesc = postDesc,
            this.postDate = postDate,
            this.media = media,
            this.status = status,
            this.username = username,
            this.communityName = communityName,
            this.votesNum = votesNum;
        this.commentNum = commentNum;
        this.upVote = upVote;
        this.downVote = downVote;
    }*/
}