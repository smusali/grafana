import { PropsWithChildren, ReactElement } from 'react';

import { PluginMeta } from '../../types/plugin';

import { PluginContext } from './PluginContext';

export type PluginContextProviderProps = {
  meta: PluginMeta;
};

export function PluginContextProvider(props: PropsWithChildren<PluginContextProviderProps>): ReactElement {
  const { children, ...rest } = props;
  return <PluginContext.Provider value={rest}>{children}</PluginContext.Provider>;
}
