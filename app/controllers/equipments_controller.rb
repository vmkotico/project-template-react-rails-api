class EquipmentsController < ApplicationController
    
    def index
        equipment =  Equipment.all
        render json: equipment, status: :ok
    end
  
    def show
        equipment = find_equipment
        render json: equipment 
    end
    
end
