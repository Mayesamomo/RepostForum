export class Comment {
    commentID: number;
    userId: number;
    commentDate: number;
    commentDesc: string;
    postId: string;
    username: string;
    status: number;

    public constructor(
        commentID: number,
        userId: number,
        commentDate: number,
        commentDesc: string,
        postId: string,
        username: string,
        status: number
    ) {
        this.postId = postId,
            this.commentID = commentID,
            this.userId = userId
        this.commentDate = commentDate,
            this.commentDesc = commentDesc,
            this.postId = postId,
            this.username = username,
            this.status = status
    }
}