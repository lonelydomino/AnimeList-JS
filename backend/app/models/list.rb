class List < ApplicationRecord
    belongs_to :user
    has_many :anime_lists
    has_many :animes, through: :anime_lists
end
