import React, { useCallback } from 'react';
import {connect} from 'react-redux';
import { useAsync } from 'react-async';
import { getData } from '../api/get-data';
import { Loader } from '../components/loader';
import { ItemDetails } from './item-details';
import { Sidebar } from './sidebar';
import {setResources, setActions} from '../store/actions';

const HomeConnected = ({setResources, setActions}) => {
    const { isPending } = useAsync({
        promiseFn: getData,
        onResolve: useCallback(resp => {
            if (!resp) return;
            setResources(resp.resources);
            setActions(resp.actions);
        }, [setResources, setActions])
    });
    if (isPending) {
        return (
            <Loader />
        );
    }

    return (
        <div className='home-page'>
            <Sidebar/>
            <ItemDetails/>
        </div>
    );
};

const mapDispatchToProps = {
    setResources,
    setActions
};

export const Home = connect(null, mapDispatchToProps)(HomeConnected);
