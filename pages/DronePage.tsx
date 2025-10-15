import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import ServicePage from '../components/ServicePage';

const DronePage: React.FC = () => {
    const { t } = useTranslations();
    const content = t('pages').drone;

    return <ServicePage serviceId="drone" content={content} />;
};

export default DronePage;