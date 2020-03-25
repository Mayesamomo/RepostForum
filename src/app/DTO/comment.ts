export class Comment {
    commentId: number;
    userId: number;
    commentDate: string;
    commentDesc: string;
    postId: number;
    username: string;


    public constructor(
        commentID: number,
        userId: number,
        commentDate: string,
        commentDesc: string,
        postId: number,
        username: string,
    ) {
        this.postId = postId,
            this.commentId = commentID,
            this.userId = userId,
            this.commentDate = commentDate,
            this.commentDesc = commentDesc,
            this.postId = postId,
            this.username = username
    }
}