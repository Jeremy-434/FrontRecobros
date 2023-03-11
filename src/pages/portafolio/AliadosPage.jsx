import React from 'react';
import { FiltrosAliados } from '../../components/filtros/FiltrosAliados';
import { TablaAliados } from '../../components/table/tableAliados/TablaAliados';
import { PageLayout } from '../layout/PageLayout';

export const AliadosPage = () => {
    return (
        <PageLayout>
            <FiltrosAliados />
            <TablaAliados />
        </PageLayout>
    )
}
