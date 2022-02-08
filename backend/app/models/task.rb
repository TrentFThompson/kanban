class Task < ApplicationRecord
    has_one :status
    belongs_to :user
    validates :user_id, presence: true
    validates :status_id, presence: true
end