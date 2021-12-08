class MinionsController < ApplicationController
 
  def index
    minion =  Minion.all
    render json: minion, status: :ok
  end

  def show
    minion = find_minion
    render json: minion 
  end

end
