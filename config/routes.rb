IOM::Application.routes.draw do
  root :to => 'visitors#home'

  get 'story', :to => "pages#story", :as => "story"
  get 'cast', :to => "pages#cast", :as => "cast"
  get 'cause', :to => "pages#cause", :as => "cause"
  get 'content', :to => "pages#content", :as => "content"
  get 'engage', :to => "pages#engage", :as => "engage"

 # change to 'visitors#new' for old homepage
end
