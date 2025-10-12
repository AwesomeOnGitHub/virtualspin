import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import ServicePage from '../components/ServicePage';

const PhotographyPage: React.FC = () => {
    const { t } = useTranslations();
    const content = t('pages').photography;

    return <ServicePage content={content} />;
};

export default PhotographyPage;
