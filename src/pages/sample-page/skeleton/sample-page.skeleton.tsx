import React from 'react';
import { Skeleton } from 'antd';

const HallOfCompaniesSkeleton: React.FC<{ readonly loading: boolean }> = ({
  loading,
}) => (
  <div className="st-sample-page-skeleton">
    <Skeleton loading={loading} active={true} avatar={true} />
    <Skeleton loading={loading} active={true} avatar={true} />
    <Skeleton loading={loading} active={true} avatar={true} />
  </div>
);

export default HallOfCompaniesSkeleton;
