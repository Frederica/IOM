IOM::Application.routes.draw do
  root :to => 'visitors#new'
  get '/intro' , :to => 'visitors#intro', :as => 'intro'
end
