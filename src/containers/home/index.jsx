import React, { useState } from 'react';
import TabBar from '../../components/tabbar';

import Experiencia from './experiencia'
import Habilidades from './habilidades';
import Educacao from './educacao';
import Projetos from './projetos';
import Sobre from './sobre';
import { Container } from './styles';

const Home = () => {
  const [activeTab, setActiveTab] = useState('sobre'); // Estado para controlar a aba ativa

  // Dados das abas para passar ao componente TabBar
  const tabsData = [
    { id: 'sobre', label: 'Sobre' },
    { id: 'experiencia', label: 'Experiência' },
    { id: 'educacao', label: 'Educação'},
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'projetos', label: 'Projetos' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'sobre':
        return <Sobre />;
      case 'experiencia':
        return <Experiencia />;
      case 'educacao':
        return <Educacao />;
      case 'habilidades':
        return <Habilidades />;
      case 'projetos':
        return <Projetos />;
      default:
        return <Sobre />;
    }
  };

  return (
    <Container>
      <TabBar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        tabs={tabsData}
      />

      <div>
        {renderContent()}
      </div>
    </Container>
  );
};

export default Home;