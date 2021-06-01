require "test_helper"

class AnimesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @anime = animes(:one)
  end

  test "should get index" do
    get animes_url, as: :json
    assert_response :success
  end

  test "should create anime" do
    assert_difference('Anime.count') do
      post animes_url, params: { anime: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show anime" do
    get anime_url(@anime), as: :json
    assert_response :success
  end

  test "should update anime" do
    patch anime_url(@anime), params: { anime: {  } }, as: :json
    assert_response 200
  end

  test "should destroy anime" do
    assert_difference('Anime.count', -1) do
      delete anime_url(@anime), as: :json
    end

    assert_response 204
  end
end
