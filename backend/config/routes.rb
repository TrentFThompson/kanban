Rails.application.routes.draw do
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

  # Defines the root path route ("/")
  # root "articles#index"
end
