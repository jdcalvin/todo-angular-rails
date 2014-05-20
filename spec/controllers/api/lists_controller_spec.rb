require 'spec_helper'

describe Api::ListsController do
	describe 'POST #create' do
		it "should create a new record" do
			expect do
				post :create, list: {title:"hello"}, format: :json
			end.to change(List, :count).by(1)
		end

		it 'should save as New List' do
			list = List.create
			expect(list.title).to eq 'New List'
		end
	end
		
end