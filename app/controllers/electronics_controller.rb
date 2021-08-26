class ElectronicsController < ApplicationController
  before_action :set_electronic, only: [:show, :update, :destroy]

  # GET /electronics
  def index
    @electronics = Electronic.all

    render json: @electronics
  end

  # GET /electronics/1
  def show
    render json: @electronic
  end

  # POST /electronics
  def create
    @electronic = Electronic.new(electronic_params)

    if @electronic.save
      render json: @electronic, status: :created, location: @electronic
    else
      render json: @electronic.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /electronics/1
  def update
    if @electronic.update(electronic_params)
      render json: @electronic
    else
      render json: @electronic.errors, status: :unprocessable_entity
    end
  end

  # DELETE /electronics/1
  def destroy
    @electronic.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_electronic
      @electronic = Electronic.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def electronic_params
      params.require(:electronic).permit(:name, :description, :imageUrl)
    end
end
