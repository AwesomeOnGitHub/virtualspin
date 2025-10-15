import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import ServicePage from '../components/ServicePage';

const WebPage: React.FC = () => {
    const { t } = useTranslations();
    const content = t('pages').web;

    return <ServicePage serviceId="web" content={content} />;
};

export default WebPage;