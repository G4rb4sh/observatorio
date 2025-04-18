// src/components/pages/HomePage.jsx
import React from 'react';
import { Box, Container } from '@mui/material';
import HeroSection from '../sections/HeroSection';
import KeyIndicatorsSection from '../sections/KeyIndicatorsSection';
import FeaturedReportsSection from '../sections/FeaturedReportsSection';
import DataVisualizationSection from '../sections/DataVisualizationSection';
import LatestNewsSection from '../sections/LatestNewsSection';
import { motion } from 'framer-motion';

const HomePage = () => {
  // Animation variants for page sections
  const sectionVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box component="main" sx={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Key Indicators Section */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
      >
        <Container maxWidth="xl" sx={{ mt: 8, mb: 8 }}>
          <KeyIndicatorsSection />
        </Container>
      </motion.div>
      
      {/* Featured Reports Section */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
      >
        <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
          <Container maxWidth="xl">
            <FeaturedReportsSection />
          </Container>
        </Box>
      </motion.div>
      
      {/* Data Visualization Section */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
      >
        <Container maxWidth="xl" sx={{ mt: 8, mb: 8 }}>
          <DataVisualizationSection />
        </Container>
      </motion.div>
      
      {/* Latest News Section */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
      >
        <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
          <Container maxWidth="xl">
            <LatestNewsSection />
          </Container>
        </Box>
      </motion.div>
    </Box>
  );
};

export default HomePage;