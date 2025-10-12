def flatten(nested_array):
    result = []
    
    def _flatten_recursive(item):
        if item is None:
            return
        elif isinstance(item, (list, tuple)):
            for element in item:
                _flatten_recursive(element)
        else:
            result.append(item)
    
    _flatten_recursive(nested_array)
    return result
