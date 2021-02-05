require 'rails_helper'

RSpec.describe LikesController, type: :controller do
  before :each do
    session[:user] = User.create(name: "Will", email: "will@will.com", password: "hello12", password_confirmation: "hello12")
    post :create, params: { like: { post: 1, user: session[:user]['id']} }
  end

  describe "Post /create" do
    pending 'responds with 200' do
      post :create
      expect(response).to have_http_status(:ok)
    end
  end

  describe "Post /destroy" do
    pending 'responds with 200' do
      post :destroy
      expect(response).to have_http_status(:ok)
    end
  end

  describe "Post /find_if_post_is_liked" do
    it 'responds with 200' do
      post :find_if_post_is_liked
      expect(response).to have_http_status(:ok)
    end
  end

end


# before :each do
#   session[:user] = User.create(name: "Will", email: "will@will.com", password: "hello12", password_confirmation: "hello12")
#   post :create, params: { post: { message: "Hello, world!", user_id: session[:user]['id'] } }
# end
#
# describe "GET /new " do
#   it "responds with 200" do
#     get :new
#     expect(response).to have_http_status(:ok)
#   end
# end
#
# describe "POST /" do
#   it "responds with 200" do
#     expect(response).to redirect_to(posts_url)
#
#   end
#
#   it "creates a post" do
#     expect(Post.find_by(message: "Hello, world!")).to be
#   end
# end
#
# describe "GET /" do
#   it "responds with 200" do
#     get :index
#     expect(response).to have_http_status(:ok)
#   end
# end
