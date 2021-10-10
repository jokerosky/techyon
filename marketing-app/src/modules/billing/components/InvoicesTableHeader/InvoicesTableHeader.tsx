import React from 'react';
import { ChangeFilterActionType, Filter, FilteringDirection, getNextDirection } from 'shared/infrastructure';

import './InvoicesTableHeader.scss';

export interface InvoicesTableHeaderProps {
    filter: Filter;
    changeFilter: ChangeFilterActionType;
}

export const InvoicesTableHeader: React.FC<InvoicesTableHeaderProps> = props => {
    const { changeFilter, filter } = props;

    const filterDirectionIcons = {
        [FilteringDirection.desc]: '↓',
        [FilteringDirection.asc]: '↑',
        [FilteringDirection.no]: ''
    } as Record<FilteringDirection, string>;

    const filterDirectionIcon = filterDirectionIcons[filter.direction];


    const headers = [
        {
            name: 'Reference Id',
            canFilter: false
        },
        {
            name: 'Date',
            canFilter: true

        },
        {
            name: 'Amount',
            canFilter: true
        },
        {
            name: 'Invoice',
            canFilter: false
        }
    ]



    return <thead className="invoice-table-header">
        <tr>
            {headers.map(header => <th key={header.name}
                onClick={header.canFilter
                    ? () => {
                        changeFilter({
                            field: header.name,
                            direction: header.name === filter.field
                                ? getNextDirection(filter.direction)
                                : FilteringDirection.desc
                        })
                    }
                    : undefined}
                className={`${header.canFilter ? 'clickable' : ''}`}>
                {header.name} {header.name === filter.field ? <span>{filterDirectionIcon}</span> : ''}
            </th>)}
        </tr>
    </thead>;
}