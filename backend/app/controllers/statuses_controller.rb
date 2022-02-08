class StatusesController < ApplicationController
  before_action :set_status, only: %i[ show update destroy ]
  before_action :authenticated_route

  # GET /statuses
  def index
    render json: current_user.statuses
  end

  # GET /statuses/1
  # def show
  #   render json: @status
  # end

  # POST /statuses
  def create
    @status = Status.new(status_params)
    if @status.save
      render json: @status, status: :created
    else
      render json: @status.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /statuses/1
  # def update
  #   if @status.update(status_params)
  #     render json: @status
  #   else
  #     render json: @status.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /statuses/1
  def destroy
    Task.where(status_id: @status.id).destroy_all
    @status.destroy  
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_status
      @status = current_user.statuses.find_by(id: params[:id])
    end

    # Only allow a list of trusted parameters through.
    def status_params
      params.require(:status).permit(:title).merge(user: current_user)
    end
end
