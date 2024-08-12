'use client';
import { themeConfig } from '@/configs';
import AntdStyledRegistry from '@/configs/theme/antd-styled-registry';
import { ConfigProvider } from 'antd';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function LayoutProvider({ children }: Props) {
  return (
    <ConfigProvider theme={themeConfig}>
      <AntdStyledRegistry>{children}</AntdStyledRegistry>
    </ConfigProvider>
  );
}
