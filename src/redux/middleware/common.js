
import * as commentAction from "../actions/CommentAction"

export default function common({dispatch}) {
    return next => action => {
        const { payload, error, meta={} } = action;
        if (error && payload && payload.message) {
            commentAction.showErrorDialog(payload.message)
        }
        next(action);
    }
}