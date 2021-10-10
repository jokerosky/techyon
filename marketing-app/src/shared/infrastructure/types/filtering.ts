export enum FilteringDirection {
    asc = 'ASC',
    desc = 'DESC',

    no = ''
}

export interface Filter {
    field: string,
    direction: FilteringDirection
}

export function getNextDirection(dir: FilteringDirection): FilteringDirection {
    const map = {
        [FilteringDirection.no]: FilteringDirection.desc,
        [FilteringDirection.desc]: FilteringDirection.asc,
        [FilteringDirection.asc]: FilteringDirection.no,
    } as Record<FilteringDirection, FilteringDirection>

    return map[dir];
}

export type ChangeFilterActionType = (filter: Filter) => void;