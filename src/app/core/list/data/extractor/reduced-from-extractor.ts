import {AbstractExtractor} from './abstract-extractor';
import {ItemData} from '../../../../model/garland-tools/item-data';
import {DataType} from '../data-type';
import {Item} from '../../../../model/garland-tools/item';

export class ReducedFromExtractor extends AbstractExtractor<number[]> {

    protected canExtract(item: Item): boolean {
        return item.reducedFrom !== undefined && item.reducedFrom.length > 0;
    }

    protected doExtract(item: Item, itemData: ItemData): number[] {
        return item.reducedFrom;
    }

    isAsync(): boolean {
        return false;
    }

    getDataType(): DataType {
        return DataType.REDUCED_FROM;
    }

}
