class LikesController < ApplicationController

    def create
        permitted_params = like_params
        @like = Like.create(permitted_params)
        render json: @like
    end

    def destroy
        @like = Like.where(user_id: session[:user]['id'], post_id: params['post_id'])
        like_id = @like[0]['id']
        Like.destroy(like_id)
        render json: @like
    end

    def find_if_post_is_liked
        @users_likes = Like.where(user_id: session[:user]['id'], post_id: params['post_id'])
        if @users_likes.length > 0
            render json: {loading: false, liked: true}
        else
            render json: {loading: false, liked: false}
        end
    end

    private

    def like_params
        user_id = session[:user]['id']
        params.require(:like).permit(:post_id).merge(:user_id => user_id)
    end
end
