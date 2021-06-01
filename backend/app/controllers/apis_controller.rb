class ApisController < ApplicationController
  before_action :set_api, only: [:show, :update, :destroy]

  # GET /apis
  def index
    @apis = Api.all

    render json: @apis
  end

  # GET /apis/1
  def show
    render json: @api
  end

  # POST /apis
  def create
    @api = Api.new(api_params)

    if @api.save
      render json: @api, status: :created, location: @api
    else
      render json: @api.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /apis/1
  def update
    if @api.update(api_params)
      render json: @api
    else
      render json: @api.errors, status: :unprocessable_entity
    end
  end

  # DELETE /apis/1
  def destroy
    @api.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api
      @api = Api.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def api_params
      params.fetch(:api, {})
    end
end
