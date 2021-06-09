class ListSerializer < ActiveModel::Serializer
  attributes :name, :id, :desc,  :user_id
  has_many :animes
  belongs_to :user
end
