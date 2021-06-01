class Anime < ApplicationRecord
    has_many :anime_lists
    has_many :lists, through: :anime_lists
end
