require 'rails_helper'

RSpec.describe UsersController, type: :controller do

  describe "GET #index" do
    it "returns http success" do
      request.session[:user] = User.create(name: "Will", email: "will@will.com", password: "hello12", password_confirmation: "hello12")
      get :index
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST #create" do
    it "returns http success" do
      post :create, params: { user: { email: "john@john.com" } }
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #new" do
    it "returns http success" do
      get :new
      expect(response).to have_http_status(:success)
    end
  end

  describe "Get #show" do
    it "returns http success" do
      session[:user] = User.create(name: "Will", email: "will@will.com", password: "hello12", password_confirmation: "hello12")
      get :show, params: { id: 'will' }
      expect(response).to have_http_status(:success)
    end

  end

  describe "Get #user_posts_api" do
    it "return json object" do
      session[:user] = User.create(name: "Will", email: "will@will.com", password: "hello12", password_confirmation: "hello12")
      get :posts_api
      expect(response).to have_http_status(:created)
      expect(response.content_type).to eq('application/json')
    end
  end

 end
