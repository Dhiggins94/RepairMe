# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.destroy_all
# Electronic.destroy_all
# RepairGuide.destroy_all


# @user = User.create!(username: 'divine', email: 'divine@email.com', password: '12345789')
# puts '#{User.count} users created'


# @nintendo_switch = Electronic.create!( name:'nintendo switch' , description:'The Nintendo Switch is a hybrid video game console, consisting of a console unit, a dock, and two Joy-Con controllers.', 
#   image_url: 'https://i.imgur.com/7dpAuXC.jpg',)
# puts '#{Electronic.count} Electronic created!'


# @repair_guide = RepairGuide.create!(user_id: @user,
# electronic_id: @nintendo_switch,
# image_url:'https://i.imgur.com/7dpAuXC.jpg',
# title: 'how to repalce the nintendo switch rear panel',
# steps: 'step 1 remove the joycons from the switch  , step 2 remove the back-side screws of the switch,
# step 3 remove the top and bottom screws of the console, step 4 remove the center screws, step 5 lift the kickstand on the back and unscrew the kickstand,
# step 6 open the game card cartridge flap and lift the rear panel up from the bottom of the device and remove it.',)
# puts '#{RepairGuide.count} RepairGuide created!'






RepairGuide.destroy_all
Electronic.destroy_all
User.destroy_all


@user = User.create!(username: 'divine', email: 'divine@email.com', password: '123456')
puts "#{User.count} users created"


@nintendo_switch = Electronic.create!( name:'nintendo switch' , description:'The Nintendo Switch is a hybrid video game console, consisting of a console unit, a dock, and two Joy-Con controllers.', image_url: 'https://i.imgur.com/4tncUDi.png',)
puts "#{Electronic.count} Electronic created!"


@iphoneXs = Electronic.create!( name:'iphoneXs' , description:'The iPhone XS models are equipped with a new 7-nanometer A12 Bionic chip that is faster and more efficient than the A11 in the previous-generation iPhone X', image_url: 'https://i.imgur.com/UKiIer0.png',)
puts "#{Electronic.count} Electronic created!"


@repair_guide1 = RepairGuide.create!( user: @user, electronic: @nintendo_switch, image_url:'https://i.imgur.com/EdRXP6as.png',
title: 'how to replace the nintendo switch rear panel',
steps: 'step 1: remove the joycons from the switch, 
step 2: remove the back-side screws of the switch, 
step 3: remove the top and bottom screws of the switch, 
step 4: remove the center screws, 
step 5: lift the kickstand on the back and unscrew the kickstand, 
step 6: open the game card cartridge flap and lift the rear panel up from the bottom of the device and remove it.',)
puts "#{RepairGuide.count} RepairGuide created!"
 


@repair_guide2 = RepairGuide.create!( user: @user, electronic: @iphoneXs, image_url:'https://i.imgur.com/GqdBHIRs.png',
  title: 'iPhone XS Screen Replacement  ',
  steps: 'step 1: tape over any cracks, preferable with packing tape, 
  step 2: soften the adhesive using an heatgun,hairdresser if avalible, 
  step 3:  use a section handle to firmly lift the screen to create a small gap, 
  step 4: use a small pick to go around the phone adhesive removing it, take care to not shove the pick far or it may damage the phone, 
  step 5: once completed, remove the suction cup and lift the phone
  step 6:  once lifted remove the screws on the logic board connector bracket and disconnect the battery connector, front panel sensor assembly connector, oled connector, digitizer cable connector
  step 7: remove the display assembly
  ',)
  puts "#{RepairGuide.count} RepairGuide created!"
   












