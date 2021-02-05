require 'rails_helper'

RSpec.describe SessionsController, type: :controller do

  before :each do
    session[:user] = User.create(name: "Will", email: "will@will.com", password: "hello12", password_confirmation: "hello12")
  end

  describe "Post /destroy" do
    it 'redirects to login' do
      post :destroy
      expect(response).to redirect_to(new_session_url)
    end
  end

  describe "Get /new" do
    it 'responds with 200' do
      get :new
      expect(response).to have_http_status(:ok)
    end
  end

  describe "Post /create" do
    subject { get :new }
    it 'responds with 302' do
      post :create, params: { session: { email: "will@will.com", password: "hello12"  } }
      expect(response).to have_http_status(302)
    end

    it 're renders new if incorrect login' do
      post :create, params: { session: { email: "will@will.com", password: "hello10"  } }
      expect(subject).to render_template(:new)
    end
  end
end
