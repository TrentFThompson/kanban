Rails.application.routes.draw do
  get 'sessions/create'
  # resources :statuses
  # resources :tasks

  # Tasks
  post "/tasks", to: "tasks#create"
  get "/tasks", to: "tasks#index"
  patch "/tasks/:id", to: "tasks#update"
  delete "/tasks/:id", to: "tasks#destroy"

  # Statuses
  post "/statuses", to: "statuses#create"
  get "/statuses", to: "statuses#index"
  delete "/statuses/:id", to: "statuses#destroy"

  # Users
  post "users", to: "users#create"

  # Auth
  post "/login", to: "sessions#create"
  get "/logged_in", to: "sessions#logged_in?"
  delete "/logout", to: "sessions#destroy"

  # Defines the root path route ("/")
  # root "articles#index"
end
