class AnimeSerializer < ActiveModel::Serializer
  attributes :id, :name, :desc, :image, :api_id
  has_many :lists
end
