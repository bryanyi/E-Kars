import React from "react";
import { useLoading, Grid } from "@agney/react-loading";
import "../css/LoadingComponent.css";

const LoadingComponent = () => {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Grid width="100" />,
  });

  return (
    <div className="LoadingComponent" {...containerProps}>
      {indicatorEl}
    </div>
  );
};

export default LoadingComponent;
