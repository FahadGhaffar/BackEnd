

import { COUNTER_CHANGE } from '../constants/index.js'

export function changeCount(count) {
    return {
        type: COUNTER_CHANGE,
        payload: count
    }
}