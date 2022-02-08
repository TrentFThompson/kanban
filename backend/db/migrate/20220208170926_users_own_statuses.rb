class UsersOwnStatuses < ActiveRecord::Migration[7.0]
  def change
    add_reference :statuses, :user, index: true
  end
end
