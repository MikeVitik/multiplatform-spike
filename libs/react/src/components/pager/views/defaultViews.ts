import {TemplateOptions} from '@dx/core/components/pager';
import {DxPagerPageNumberItemView} from './dxPagerPageNumberItemView';
import {DxPagerPageNumberView} from './dxPagerPageNumberView';
import {DxPagerPageSizeItemView} from './dxPagerPageSizeItemView';
import {DxPagerPageSizeView} from './dxPagerPageSizeView';
import {DxPagerView} from './dxPagerView';

const PAGER_DEFAULT_VIEWS: TemplateOptions = {
  pagerView: DxPagerView,
  pageNumberView: DxPagerPageNumberView,
  pageNumberItemView: DxPagerPageNumberItemView,
  pageNumberFakeItemView: DxPagerPageNumberItemView,
  pageSizeView: DxPagerPageSizeView,
  pageSizeItemView: DxPagerPageSizeItemView,
};

export {PAGER_DEFAULT_VIEWS};
