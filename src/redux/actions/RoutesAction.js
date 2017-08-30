import { NavigationActions } from 'react-navigation'
import _ from 'lodash'
//返回
export function popBack() {
    return NavigationActions.back()
}

//跳转
export function pushTo(page, params?: Object) {
    return NavigationActions.navigate({
        routeName: page,
        params: {
            ...params,
        },

        // navigate can have a nested navigate action that will be run inside the child router
        // action: NavigationActions.navigate({ routeName: route})
    })
}

//跳转指定Screen
export function popTo(props?: {
    key?: string,
    page?: string,
}) {
    const { page, key } = props || {};
    return (store: Object) => {
        const { routes } = store;
        const currentRoutes = routes.routes;
        if (!_.isEmpty(key) || !_.isEmpty(page)) {
            const backRoute = currentRoutes.find(
                (route: *) => {
                    if (!_.isEmpty(key)) {
                        return route.key === key
                    }

                    return route.routeName === page
                }
            );
            const backRouteIndex = currentRoutes.indexOf(backRoute);
            const currentBackIndex = backRouteIndex + 1;
            if ((currentBackIndex + 1) > currentRoutes.length) {
                return []
            }
            return NavigationActions.back({ key: currentRoutes[currentBackIndex].key })
        }

        if (routes.index === 0) {
            return[]
        }
        return NavigationActions.back()
    }
}

//重置路由
export function resetTo() {
    return NavigationActions.reset()
}