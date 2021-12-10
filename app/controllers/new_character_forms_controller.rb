class NewCharacterFormsController < ApplicationController

    post '/newCharacterForm' do
        newCharacterForm = newCharacterForm.create(
          name: params[:name],
          age: params[:age],
          bio: params[:bio],
          image: params[:image],
          equipment: params[:equipment],
          outfit: params[:outfit],
        #   minion: params[:minion],
          spell: params[:spell],
        )
        createdCharacter.to_json
      end

end
