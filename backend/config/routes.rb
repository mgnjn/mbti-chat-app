Rails.application.routes.draw do
    root "users#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
    get "/users", to: "users#index"
  # Defines the root path route ("/")
  # root "articles#index"
end
