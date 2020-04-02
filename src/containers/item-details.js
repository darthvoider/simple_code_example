import React from 'react';
import {connect} from 'react-redux';
import { ItemAction } from '../components/item-action';
import { ItemDetail } from '../components/item-detail';
import { ItemDetailsSubtitle } from '../components/item-details-subtitle';

const ItemDetailsConnected = ({ resources, actions, activeItemId }) => {
    const activeItem = resources.find(resource => resource.id === activeItemId);
    if (!activeItem) return null;

    const { name, description, resourceType, path, actionIds } = activeItem;

    const itemActions = actions.filter(action => actionIds.find(id => id === action.id));
    const generalDetails = [
        {
            title: 'Name',
            value: name,
        },
        {
            title: 'Description',
            value: description,
        },
        {
            title: 'Resource Type',
            value: resourceType,
        },
        {
            title: 'Path',
            value: path,
        },
    ];

    const renderItemDetailsHeader = () => (
        <div className='item-details-header'>
            <h2>{name}</h2>
        </div>
    );

    const renderItemDetailsBody = () => (
        <div className='item-details-body'>
            {renderGeneralDetails()}
            {renderPermittedActions()}
        </div>
    );

    const renderGeneralDetails = () => (
        <div className='item-details'>
            <ItemDetailsSubtitle subtitle='General Details'/>
            {generalDetails.map(({ title, value }) => (
                <ItemDetail title={title} value={value} key={value} />
            ))}
        </div>
    );

    const renderPermittedActions = () => (
        <div className='item-actions'>
            <ItemDetailsSubtitle subtitle='Permitted Actions'/>
            {itemActions.map(({id, name}) => (
                <ItemAction key={id} name={name} />
            ))}
        </div>
    );

    return (
        <div className='item-details-wrapper'>
            <div className='item-details-inner'>
                {renderItemDetailsHeader()}
                {renderItemDetailsBody()}
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    resources: state.resources,
    actions: state.actions,
    activeItemId: state.activeItemId
});

export const ItemDetails = connect(mapStateToProps)(ItemDetailsConnected);
