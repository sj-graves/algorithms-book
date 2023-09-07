# Name: Frodo Baggins
planes = 100
seats_per_plane = 12.0
pilots = 30
passengers = 110
planes_not_flown = planes - pilots
planes_flown = pilots

airpool_capacity = planes_flown * seats_per_plane
average_passengers_per_plane = passengers / planes_flown

print("There are", planes, " small planes in the fleet.")
print("We have", pilots, "pilots today.")
print("There will be", planes_not_flown, "grounded planes today.")
print("We can transport", air_pool_capacity - pilots, "passengers today.")
print("We have", passengers, "today.")
print("We will need to put about", average_passengers_per_plane, "passengers on each plane.")
