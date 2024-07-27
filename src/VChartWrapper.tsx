
import { IChartSpec, VChart } from "@visactor/react-vchart";
import React from 'react';
import { CreateVChartParams } from "./interface";

export function VChartWrapper(props: { data: CreateVChartParams }) {
    const { data } = props;

    if (data) {
        return <VChart data={data.data} spec={data.spec as unknown as IChartSpec} options={data.options} />
    }

    return null;

}
