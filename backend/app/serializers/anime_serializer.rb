class AnimeSerializer < ActiveModel::Serializer
  attributes :id, :name, :desc, :image, :api_id, :ep_count
  has_many :lists
end
