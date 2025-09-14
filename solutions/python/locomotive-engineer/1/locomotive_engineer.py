"""Functions which helps the locomotive engineer to keep track of the train."""


def get_list_of_wagons(*wagon_ids):
    """Return a list of wagons.

    :param: arbitrary number of wagons.
    :return: list - list of wagons.
    """
    return list(wagon_ids)


def fix_list_of_wagons(each_wagons_id, missing_wagons):
    """Fix the list of wagons.

    :param each_wagons_id: list - the list of wagons.
    :param missing_wagons: list - the list of missing wagons.
    :return: list - list of wagons.
    """
    first, second, locomotive, *rest = each_wagons_id
    
    return [locomotive, *missing_wagons, *rest, first, second]


def add_missing_stops(route, **stops):
    """Add missing stops to route dict.

    :param route: dict - the dict of routing information.
    :param: arbitrary number of stops.
    :return: dict - updated route dictionary.
    """
    updated_route = {**route}
    
    sorted_stops = sorted(stops.items())
    
    stops_list = [stop_city for stop_number, stop_city in sorted_stops]
    
    updated_route["stops"] = stops_list
    
    return updated_route


def extend_route_information(route, more_route_information):
    """Extend route information with more_route_information.

    :param route: dict - the route information.
    :param more_route_information: dict -  extra route information.
    :return: dict - extended route information.
    """
    return {**route, **more_route_information}


def fix_wagon_depot(wagons_rows):
    """Fix the list of rows of wagons.

    :param wagons_rows: list[list[tuple]] - the list of rows of wagons.
    :return: list[list[tuple]] - list of rows of wagons.
    """
    row1, row2, row3 = wagons_rows
    
    (wagon1_1, wagon1_2, wagon1_3) = row1
    (wagon2_1, wagon2_2, wagon2_3) = row2  
    (wagon3_1, wagon3_2, wagon3_3) = row3
    
    return [
        [wagon1_1, wagon2_1, wagon3_1], 
        [wagon1_2, wagon2_2, wagon3_2], 
        [wagon1_3, wagon2_3, wagon3_3] 
    ]
