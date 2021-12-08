class CharactersController < ApplicationController
    def index
        characters =  Character.all
        render json: characters, status: :ok
      end
  
      def show
        characters = Characters.find(params[:id])
        render json: characters
      end 
end
