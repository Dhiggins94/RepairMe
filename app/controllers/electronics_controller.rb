class ElectronicsController < ApplicationController

  # GET /electronics
  def index
    @electronics = Electronic.all

    render json: @electronics, include: :repair_guide, status: :ok
  end

  # GET /electronics/1
  def show
    render json: @electronic, include: :repair_guide, status: :ok
  end


    # Only allow a list of trusted parameters through.
    def electronic_params
      params.require(:electronic).permit(:name, :description, :imageUrl)
    end
end
