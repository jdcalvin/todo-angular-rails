require 'spec_helper'

describe Api::TasksController do
	describe 'POST #create' do
		it "should create a new record" do
			expect do
				post :create, task: {title: "Testing"}, format: :json
			end.to change(Task, :count).by(1)
		end
	end
end