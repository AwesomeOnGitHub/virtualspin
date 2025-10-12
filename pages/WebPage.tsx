import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import ServicePage from '../components/ServicePage';

const WebPage: React.FC = () => {
    const { t } = useTranslations();
    const content = t('pages').website;

    return <ServicePage content={content} />;
};

export default WebPage;
