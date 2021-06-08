class AnimeSerializer < ActiveModel::Serializer
  attributes :id, :name, :desc, :image
  has_many :lists
end
