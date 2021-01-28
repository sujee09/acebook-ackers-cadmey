class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  # before_action :login_required

  # def login_required
  #   if !logged_in?
  #         redirect_to new_sessions_url, :notice => "Log in to edit or delete your post"
  #   end
  # end

  def logged_in?
    !!current_user
  end

  helper_method :logged_in?

  def current_user
    if session[:user]
      @current_user = User.find(session[:user]['id'])

      @current_user
    else
      false
    end
  end

  helper_method :current_user


end
