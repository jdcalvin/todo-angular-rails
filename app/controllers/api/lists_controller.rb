module Api
	class ListsController < ApplicationController
		before_filter :set_list, only: [:show, :update, :destroy]
		respond_to :json

		def index
			respond_with(List.all.order("Updated_at DESC"))
		end

		def show
			respond_with(@list)
		end

		def create
			@list = List.new(list_params)
			if @list.save
				respond_to do |format|
					format.json { render :json => @list}
				end
			end
		end

		def update
			if @list.update(list_params)
				respond_to do |format|
					format.json { render :json => @list}
				end
			end
		end

		def destroy
			respond_with @list.destroy
		end

		private

		def set_list
			@list = List.find(params[:id])
		end

		def list_params
			params.require(:list).permit(:id, :title, :color)
		end
	end
end