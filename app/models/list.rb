class List < ActiveRecord::Base
	has_many :tasks, dependent: :destroy
	validate :list_count, :on => :create
	validates :title, presence: true

	def list_count
		if List.all.count >= 5
			errors.add(:base, "Exceeded list limit")
		end
	end

end
