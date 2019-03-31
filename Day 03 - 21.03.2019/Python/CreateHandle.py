from HomeActionFacade import*
single = None


def Handle():
    global single
    try:
        single = HomeActionFacade()
    except Exception:
        pass
    return single
