class TvShowsController < ApplicationController
  before_action :set_tv_show, only: [:show, :update, :destroy]

  # GET /tv_shows
  def index
    @tv_shows = TvShow.all

    render json: @tv_shows
  end

  # GET /tv_shows/1
  def show
    render json: @tv_show
  end

  # POST /tv_shows
  def create
    @tv_show = TvShow.new(tv_show_params)

    if @tv_show.save
      render json: @tv_show, status: :created, location: @tv_show
    else
      render json: @tv_show.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tv_shows/1
  def update
    if @tv_show.update(tv_show_params)
      render json: @tv_show
    else
      render json: @tv_show.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tv_shows/1
  def destroy
    @tv_show.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tv_show
      @tv_show = TvShow.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def tv_show_params
      params.fetch(:tv_show, {})
    end
end
