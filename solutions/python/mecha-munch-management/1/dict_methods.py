"""Functions to manage a users shopping cart items."""


def add_item(current_cart, items_to_add):
    """Add items to shopping cart.

    :param current_cart: dict - the current shopping cart.
    :param items_to_add: iterable - items to add to the cart.
    :return: dict - the updated user cart dictionary.
    """

    updated_cart = current_cart.copy()

    for item in items_to_add:
        updated_cart[item] = updated_cart.get(item, 0) + 1
    
    return updated_cart


def read_notes(notes):
    """Create user cart from an iterable notes entry.

    :param notes: iterable of items to add to cart.
    :return: dict - a user shopping cart dictionary.
    """

    return dict.fromkeys(notes, 1)


def update_recipes(ideas, recipe_updates):
    """Update the recipe ideas dictionary.

    :param ideas: dict - The "recipe ideas" dict.
    :param recipe_updates: iterable -  with updates for the ideas section.
    :return: dict - updated "recipe ideas" dict.
    """

    updated_ideas = ideas.copy()
    
    # 遍历更新项，每个更新项是(recipe_name, recipe_dict)的元组
    for recipe_name, recipe_dict in recipe_updates:
        updated_ideas[recipe_name] = recipe_dict
    
    return updated_ideas


def sort_entries(cart):
    """Sort a users shopping cart in alphabetically order.

    :param cart: dict - a users shopping cart dictionary.
    :return: dict - users shopping cart sorted in alphabetical order.
    """

    return dict(sorted(cart.items()))


def send_to_store(cart, aisle_mapping):
    """Combine users order to aisle and refrigeration information.

    :param cart: dict - users shopping cart dictionary.
    :param aisle_mapping: dict - aisle and refrigeration information dictionary.
    :return: dict - fulfillment dictionary ready to send to store.
    """

    fulfillment_cart = {}
    
    for item, quantity in cart.items():
        aisle, refrigeration = aisle_mapping[item]
        fulfillment_cart[item] = [quantity, aisle, refrigeration]
    
    return dict(sorted(fulfillment_cart.items(), reverse=True))


def update_store_inventory(fulfillment_cart, store_inventory):
    """Update store inventory levels with user order.

    :param fulfillment cart: dict - fulfillment cart to send to store.
    :param store_inventory: dict - store available inventory
    :return: dict - store_inventory updated.
    """

    updated_inventory = {}
    
    for item, inventory_info in store_inventory.items():
        updated_inventory[item] = inventory_info.copy()
    
    for item, order_info in fulfillment_cart.items():
        ordered_quantity = order_info[0]
        
        if item in updated_inventory:
            current_stock = updated_inventory[item][0]
            new_stock = current_stock - ordered_quantity
            
            if new_stock <= 0:
                updated_inventory[item][0] = 'Out of Stock'
            else:
                updated_inventory[item][0] = new_stock
    
    return updated_inventory
