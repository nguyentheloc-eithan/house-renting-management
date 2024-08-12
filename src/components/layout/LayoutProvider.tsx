'use client';
import { ReactNode, useEffect } from 'react';
import { ConfigProvider } from 'antd';
import * as NProgress from 'nprogress';
import { usePathname, useSearchParams } from 'next/navigation';
import themeConfig from '@/configs/theme/theme-config';
import AntdStyledRegistry from '@/configs/theme/antd-styled-registry';

type Props = {
  children: ReactNode;
};

export default function LayoutProvider({ children }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    NProgress.done();
  }, [pathname, searchParams]);

  return (
    <ConfigProvider theme={themeConfig}>
      <AntdStyledRegistry>{children}</AntdStyledRegistry>
    </ConfigProvider>
  );
}
