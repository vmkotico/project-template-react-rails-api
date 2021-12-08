class OutfitsController < ApplicationController
  def index
    outfit =  Outfit.all
    render json: outfit, status: :ok
  end

  def show
    outfit = find_outfit
    render json: outfit 
  end
end
