class TasksController < ApplicationController
  before_action :set_task, only: %i[ show update destroy ]
  before_action :authenticated_route

  # GET /tasks
  def index
    render json: current_user.tasks
  end

  # GET /tasks/1
  # def show
  #   render json: @task
  # end

  # POST /tasks
  def create
    @task = Task.new(task_params)
    if @task.save
      render json: @task, status: :created
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tasks/1
  # def update
  #   if @task.update(task_params)
  #     render json: @task
  #   else
  #     render json: @task.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /tasks/1
  def destroy
    @task.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_task
      @task = current_user.tasks.find_by(id: params[:id])
    end

    # Only allow a list of trusted parameters through.
    def task_params
      params.require(:task).permit(:title, :description, :status_id).merge(user: current_user)
    end
end
