import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const sortedList = [...state].sort(function (a, b) {
                if (a.name > b.name) {
                    return action.payload === 'up' ? 1 : -1;
                }
                if (a.name < b.name) {
                    return action.payload === 'up' ? -1 : 1;
                }
                return 0;
            });

            return sortedList;
        }
        case 'check': {
            return [...state].filter(u => u.age >= action.payload);
        }
        default:
            return state
    }
}
