import { checkingProgress } from '../../slices/messageCreated';
import { useGetUsersQuery, useRenewTokenQuery, useUpdateUserMutation } from './accountApi';

export const loadingUsers = () => {

    const { data, error, isLoading } = useGetUsersQuery();
    const users = data ?? [];

    return {
        users,
        error,
        isLoading
    }
}

export const updateUserAccount = (user = {}) => {

    return async (dispatch, getState) => {
        const [updateUser] = useUpdateUserMutation();
        console.log("🚀 ~ user:", user)

        if (!user) return;

        dispatch(checkingProgress());

        await updateUser(user)
            .then((res) => {
                console.log(res);
            })

    }
}