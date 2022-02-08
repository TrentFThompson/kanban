module SessionsHelper
    def current_user
        if session[:user_id]
          @current_user ||= User.find_by(id: session[:user_id])
        end
    end

    def logged_in?
        !current_user.nil?
    end

    def authenticated_route
        render json: {}, status: :unauthorized unless logged_in?
    end

    # Logs in the given user.
    def log_in(user)
        session[:user_id] = user.id
    end
end