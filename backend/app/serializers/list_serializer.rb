class ListSerializer < ActiveModel::Serializer
  attributes :name, :id, :desc,  :user_id
  belongs_to :user
end
