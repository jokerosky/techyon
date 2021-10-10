import { UpdateUserAction } from 'modules/account/types/Account';
import React, { useCallback, useRef, useState } from 'react';
import { User } from 'shared/marketing-app-core';
import { Button, InputElement, InputType } from 'shared/ui-kit';
import { Fab, UserAvatar } from 'shared/ui-kit/Forms';

import { ReactComponent as Pencil } from '../../assets/pencil.svg';

import './Profile.scss'

export interface ProfileProps {
    user: User;
    updateUser: UpdateUserAction
}

export const Profile: React.FC<ProfileProps> = props => {
    const { user: userData, updateUser } = props;
    const [user, setUser] = useState<User>(userData);

    const submit = useCallback(async (e: React.FormEvent) => {
        console.log('new User State', user);

        const success = await updateUser(user);

        alert(success ? 'User updated' : 'Something went wrong');

        e.preventDefault();
        return false;
    }, [user, updateUser]);

    const fileRef = useRef<HTMLInputElement>(null);

    const fabClick = () => {
        fileRef.current?.click();
    }

    const avatarChanged = () => {
        if (fileRef.current?.files) {
            var reader = new FileReader();
            const file = fileRef.current?.files[0];
            reader.readAsDataURL(file);

            reader.onload = function () {
                setUser({ ...user, avatar: reader.result as string });
            };
        }
    }

    return <form onSubmit={submit} className="profile-form">
        <div className="row v-aligned">
            <UserAvatar avatar={user.avatar} />
            <Fab onClick={fabClick}>
                <Pencil />
            </Fab>
            <input ref={fileRef} type='file' id="avatar-selector" className="hidden" accept="image/*" onChange={avatarChanged} />
        </div>


        <div className="row">

            <InputElement
                type={InputType.text}
                label='First Name'
                value={user.firstName}
                onChange={e => { setUser({ ...user, firstName: e.target.value }) }}

            />
            <InputElement
                type={InputType.text}
                label='Last Name'
                value={user.lastName}
                onChange={e => { setUser({ ...user, lastName: e.target.value }) }}
            />
        </div>
        <div className="row">
            <InputElement
                type={InputType.text}
                label='Email'
                value={user.email}
                onChange={e => { setUser({ ...user, email: e.target.value }) }}
            />
        </div>
        <div className="actions-section">
            <Button color="primary" type="submit" >Save Changes</Button>
        </div>


    </form>;
}

export default Profile;