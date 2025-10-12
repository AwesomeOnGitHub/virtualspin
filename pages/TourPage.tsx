import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import ServicePage from '../components/ServicePage';

const TourPage: React.FC = () => {
    const { t } = useTranslations();
    const content = t('pages').tour;

    return <ServicePage content={content} />;
};

export default TourPage;
