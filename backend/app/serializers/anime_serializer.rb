class AnimeSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :list
end
