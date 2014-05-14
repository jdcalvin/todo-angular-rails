module Api
	class TasksController < ApplicationController
		before_filter :set_task, only: [:show, :update, :destroy]
		respond_to :json

		def index
			respond_with(Task.all.order("completed ASC").order("id DESC"))
		end

		def show
			respond_with(@task)
		end

		def create
			@task = Task.new(task_params)
			if @task.save
				respond_to do |format|
					format.json { render :json => @task}
				end
			end
		end

		def update
			if @task.update(task_params)
				respond_to do |format|
					format.json { render :json => @task}
				end
			end
		end

		def destroy
			respond_with Task.destroy(params[:id])
		end

		private

		def set_task
			@task = Task.find(params[:id])
		end

		def task_params
			params.require(:task).permit(:title, :completed)
		end
	end
end