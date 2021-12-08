class SpellsController < ApplicationController
  def index
    spell =  Spell.all
    render json: spell, status: :ok
  end

  def show
    spell = find_spell
    render json: spell 
  end
end
