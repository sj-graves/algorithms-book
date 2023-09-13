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
print("We can transport", airpool_capacity - pilots, "passengers today.")
print("We have", passengers, "today.")
print("We will need to put about", average_passengers_per_plane, "passengers on each plane.")

airline = "Arkenstone Air"

print("The type of 'airline' is %s" % type(airline))
print(
    "The type of {} is {}".format(
        "average_passengers_per_plane",
        type(average_passengers_per_plane)
    )
    )
print(f"The type of 'planes' is {type(planes)}")

strange_number = 3+5j
print("The type of 'strange_number' is {}".format(
    type(strange_number)
))

format_string = "Are the types of '{}' and the type of '{}' both {}? {}"
print(format_string.format(
    True, False,
    type(True),type(True)==type(False)
))