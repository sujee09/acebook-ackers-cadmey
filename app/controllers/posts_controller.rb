class PostsController < ApplicationController

  def new
    check_for_user
    @post = Post.new
  end


  def create
    check_for_user
    @post = Post.create(post_params)
    render json: @post, status: :created, location: @post
    # redirect_to posts_url
  end

  def index
    check_for_user
    @posts = Post.all
    render json: @posts
  end

  private

  def post_params
    params.require(:post).permit(:message, :user_id)
  end

  def check_for_user
    if session[:user] === nil
      redirect_to new_user_url
    end
  end
end
