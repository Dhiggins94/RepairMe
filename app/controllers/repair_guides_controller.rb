class RepairGuidesController < ApplicationController
  before_action :set_repair_guide, only: [:show, :update, :destroy]

  # GET /repair_guides
  def index
    @repair_guides = RepairGuide.all

    render json: @repair_guides
  end

  # GET /repair_guides/1
  def show
    render json: @repair_guide
  end

  # POST /repair_guides
  def create
    @repair_guide = RepairGuide.new(repair_guide_params)

    if @repair_guide.save
      render json: @repair_guide, status: :created, location: @repair_guide
    else
      render json: @repair_guide.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /repair_guides/1
  def update
    if @repair_guide.update(repair_guide_params)
      render json: @repair_guide
    else
      render json: @repair_guide.errors, status: :unprocessable_entity
    end
  end

  # DELETE /repair_guides/1
  def destroy
    @repair_guide.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_repair_guide
      @repair_guide = RepairGuide.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def repair_guide_params
      params.require(:repair_guide).permit(:user_id, :electronic_id, :image_url, :title, :steps)
    end
end
