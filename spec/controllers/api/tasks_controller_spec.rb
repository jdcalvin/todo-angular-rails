require 'spec_helper'

describe Api::TasksController do
	let (:list) { List.create}
	describe 'POST #create' do
		it "should create a new record" do
			expect do
				post :create, list_id: list.id, task: {title: "Testing", list_id: list.id}, format: :json
			end.to change(Task, :count).by(1)
		end
	end

	describe 'GET #index' do
		before do
			["hi","hello", "hey"].each do |x|
				Task.create(title:x)
			end
		end
	end
		
end