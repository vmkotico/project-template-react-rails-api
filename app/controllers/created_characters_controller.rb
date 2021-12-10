class CreatedCharactersController < ApplicationController
    def index
        createdCharacter =  CreatedCharacter.all
        render json: createdCharacter, status: :ok
    end
  
    def show
        createdCharacter = find_createdCharacter
        render json: createdCharacter 
    end

    post '/createdCharacter' do
        createdCharacter = createdCharacter.create(
          name: params[:name],
          age: params[:age],
          bio: params[:bio],
          image: params[:image],
          equipment: params[:equipment],
          outfit: params[:outfit],
          minion: params[:minion],
          spell: params[:spell],
        )
        createdCharacter.to_json
      end
      delete '/createdCharacter/:id' do
        createdCharacter = createdCharacter.find(params[:id])
        createdCharacter.destroy
      end
    
end
