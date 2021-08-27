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

  # def create
  #   @electronic = Electronic.new(@electronic_params)
  #     @electronic.user = @current_user
  #   if @electronic.save
  #     render json: @electronic, include: :electronic, status: :ok
  #   else
  #     render json: @electronic.errors, status: :unprocessable_entity
  #   end

    # Only allow a list of trusted parameters through.
    def electronic_params
      params.require(:electronic).permit(:name, :description, :imageUrl)
    end
end
