import React, { useContext, useState, useEffect } from 'react';
import { SelectProfileContainer } from './profiles';
import { FirebaseContext } from '../context/firebase';

export function BrowseContainer({ slides }) {
    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(true)
    
    const { firebase } = useContext(FirebaseContext)
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        console.log('profile', profile)
        console.log('loading', loading)
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [profile.firstName])

    console.log('profile', profile)
    console.log('loading', loading)

    return <SelectProfileContainer user={user} setProfile={setProfile} />
}