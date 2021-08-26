# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Repair_guide.destroy_all
Electronic.destroy_all
User.destroy_all


@admin = User.create!(username: 'divine', email: 'divine@email.com', password: '123456')

puts "#{User.count} users created"


@nintendoSwitch = Electronic.create!( name:"nintendo switch" , text:"The Nintendo Switch is a hybrid video game console, consisting of a console unit, a dock, and two Joy-Con controllers.", imageUrl: "https://i.imgur.com/7dpAuXC.jpg")

@repair1 = Repair_guide.create!(
image_url:"https://i.imgur.com/7dpAuXC.jpg",
title: "how to repalce the nintendo switch rear panel"
steps: "step 1: remove the joycons from the switch, step 2: remove the back-side screws of the switch, step 3: remove the top and bottom screws of the switch, step 4: remove the center screws, step 5: lift the kickstand on the back and unscrew the kickstand, step 6: open the game card cartridge flap and lift the rear panel up from the bottom of the device and remove it.")

puts "#{Repair_guide.count} Repair_guide created!"
puts "#{Electronic.count} Electronic created!"























