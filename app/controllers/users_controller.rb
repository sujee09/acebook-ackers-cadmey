class UsersController < ApplicationController
  def index
    check_for_user
    @users = User.all
  end

  def show
    check_for_user
    @user = User.find_by(id: session[:user]['id'])
  end

  def posts_api
    @posts = Post.where(user_id: session[:user]['id']).as_json()
    @posts_with_name_and_likes = @posts.each do |post|
      post[:user_name] = User.find(post["user_id"]).name
      post[:short_time] = post['created_at'].strftime('%H:%M - %d/%h')
      post[:number_of_likes] = Like.where(post_id: post["id"]).length
    end
    render json: @posts_with_name_and_likes, status: :created
  end

  def new
    session[:user] = nil
    @user = User.new
  end

  def create
    @user = User.create(user_params)

    session[:user] = @user
    if @user.save
      redirect_to posts_url
    else
      render :new
    end
  end

  private
    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation)
    end

    def check_for_user
      if session[:user] === nil
        redirect_to new_user_url
      end
    end
end
