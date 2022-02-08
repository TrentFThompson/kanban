class SessionsController < ApplicationController
  def create
		# Search for the user by email
		@user = User.find_by(email: params[:email].downcase)

		# If there is a user, and the password matches
		if @user && @user.authenticate(params[:password])
			# Create a session for the user
			log_in @user
			render json: @user, status: :created
		else
      render json: {}, status: :unauthorized
		end
  end

  def logged_in
    if logged_in?
      render json: current_user, status: :ok
    else
      render json: {}, status: :unauthorized
		end
  end

  def destroy
    session.delete :user_id
    render json: {}, status: :ok
  end
end
