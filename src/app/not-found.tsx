'use client';

import React from 'react';
import { Button, Result } from 'antd';
import { usePushRouter } from '@/hooks';

const NotFound = () => {
  const router = usePushRouter();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button
          onClick={() => router.back()}
          type="primary">
          Trở lại
        </Button>
      }
    />
  );
};

export default NotFound;
