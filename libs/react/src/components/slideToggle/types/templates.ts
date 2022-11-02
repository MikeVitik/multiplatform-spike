import {DxSlideToggleIndicatorViewProps, DxSlideToggleTextViewProps} from '../views';

type IndicatorViewTemplate = (props: DxSlideToggleIndicatorViewProps) => JSX.Element;
type TextViewTemplate = (props: DxSlideToggleTextViewProps) => JSX.Element;

export type {
  IndicatorViewTemplate,
  TextViewTemplate,
}
