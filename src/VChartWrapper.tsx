import { VChart, IChartSpec } from "@visactor/react-vchart";
import React from 'react';
import { CreateVChartParams } from "./interface";

export function VChartWrapper(props: { data: CreateVChartParams }) {
  const { data } = props;

  if (data) {
    return (
      <VChart
        spec={{
          ...data.spec,
          data: data.data,
        } as IChartSpec}
        options={data.options}
      />
    );
  }

  return null;
}