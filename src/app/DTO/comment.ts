export class Comment {
    commentId: number;
    userId: number;
    commentDate: string;
    comment_text: string;
    postId: number;
    user_name: string;


    public constructor(
        commentID: number,
        userId: number,
        commentDate: string,
        comment_text: string,
        postId: number,
        user_name : string
      
    ) {
        this.postId = postId,
            this.commentId = commentID,
            this.userId = userId,
            this.commentDate = commentDate,
            this.comment_text = comment_text,
            this.postId = postId,
            this.user_name=user_name
          
    }
}