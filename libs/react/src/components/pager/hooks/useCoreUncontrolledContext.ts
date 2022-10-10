import {useCallback, useMemo} from 'react';
import {
  createPagerStore,
  PagerState,
  PagerStore,
  validatePageNumber,
  validatePageSize
} from '@dx/core/components/pager';
import {createValidator} from '@dx/core/internal';
import {DeepReadonly} from 'ts-essentials';
import {callPropCallback} from '../../../internal';
import {PagerContextType} from '../dxPagerContext';
import {DxPagerProps} from '../types/public';
import {
  propsToContracts,
  selectedPageChangeUncontrolled,
  selectedPageSizeChangeUncontrolled
} from '../utils';

const useCoreUncontrolledContext = (
  props: DxPagerProps
): [PagerStore, PagerContextType] => {
  const pageNumberValidator = useMemo(() => createValidator(validatePageNumber), []);
  useMemo(() => {
    pageNumberValidator.setCallback((state: DeepReadonly<PagerState>) => {
      callPropCallback(props.selectedPageChange, state.pageNumber.selected);
    });
  }, [props.selectedPageChange]);

  const pageSizeValidator = useMemo(() => createValidator(validatePageSize), []);
  useMemo(() => {
    pageSizeValidator.setCallback((state: DeepReadonly<PagerState>) => {
      callPropCallback(props.selectedPageSizeChange, state.pageSize.selected);
    });
  }, [props.selectedPageSizeChange]);

  const store = useMemo(() => {
    const contracts = propsToContracts(props, true, false);
    const pagerStore = createPagerStore(contracts);
    pagerStore.addValidators([pageNumberValidator, pageSizeValidator]);
    pagerStore.validate();

    return pagerStore;
  }, []);


  const selectPageCallback = useCallback(
    selectedPageChangeUncontrolled(store, props),
    [props.selectedPageChange]
  );
  const selectPageSizeCallback = useCallback(
    selectedPageSizeChangeUncontrolled(store, props),
    [props.selectedPageSizeChange]
  );

  const context: PagerContextType = useMemo(() => [
    store, {
      selectedPageChange: selectPageCallback,
      selectedPageSizeChange: selectPageSizeCallback,
    }
  ], [selectPageCallback, selectPageSizeCallback]);

  return [store, context];
}

export {useCoreUncontrolledContext};
