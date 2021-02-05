class SessionsController < ApplicationController
  # skip_before_action :login_required, :only => [:new, :create]

  def new
    @user = User.new
  end

  def create
    user = User.find_by_email(params[:session][:email])
    if user && user.authenticate(params[:session][:password])
      session[:user] = user
      redirect_to posts_url, :notice => "Welcome back, #{user.email}"
    else
      render :new
    end
  end

  def destroy
    session[:user] = nil
    redirect_to new_session_url
  end

end
